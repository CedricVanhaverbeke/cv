---
date: '15/10/2021'
title: 'Please stop doing this: Render objects'
description: "React developers always seem to fall into this trap. It seems practical and neat, but really it isn't."
---

## Let's face it. Developers love abstractions and are always keen to find a way to make code a tiny bit more structured. However, there's a thin line between overengineering and a smart way to do things. In this blogpost we'll look at something I'd like to call "render objects". 

# Overview

1. Use case
2. The problem
3. How it could be done differently
4. Conclusion

# Use case

Imagine you're creating a header for a website. You created a `Header` component that receives all the items it should render by passing props. The header items have a title and an icon. Let's leave all styling behind, and just focus on the code itself.

```jsx
const Header = ({ items }) => {
  return <div>{/* TODO: add items here */}</div>;
};
```

When you're a React developer and you see this kind of situation it would be tempting to define `items` as an array and map over it to create the components you need. Allow me to show what I mean:

```js
const items = [
  { title: 'Home', icon: 'iconName' },
  { title: 'Products', icon: 'otherIconName' },
  { title: 'Blog', icon: 'anotherIconName' },
];
```

```jsx
const Header = ({items}) => {
	return <div>
		{items.map(item => (
			// let's say you have an Item component somewhere that renders the text like you want
			<Item title={item.title} icon={item.icon}>
		))}
	</div>;
}
```

As a developer, you _love_ this. You made an abstraction. You're happy and you go home after creating an awesome feature. This phenomenom is something I'd like to call "render objects". These are objects that are solely created to later iterate over and pass the right props to a component.

# The problem

Before discussing the real problem here I'd like to highlight a side effect every solution like this introduces. Some of you probably already noticed the problem with the solution above; If you would lint this code you probably would receive this error:

```
Missing "key" prop for element.
```

Oh right, adding a key prop is a good idea when rendering a list. If you don't know why. [This awesome blogpost](https://kentcdodds.com/blog/understanding-reacts-key-prop) dives deep into this topic. Okay, let's add a key prop:

```jsx
const Header = ({items}) => {
	return <div>
		{items.map(item => (
			// let's say you have an Item component somewhere that renders the text like you want
			<Item key={item.title} title={item.title} icon={item.icon}>
		))}
	</div>;
}
```

Okay, great! No linting errors. All good! Your code will work like you want it to and you can move on with life. In this instance, there would probably be no issue. Even without adding a `key`. But imagine you would render multiple items with the same `title`. Now you cannot use this `title` as a key and you'd have no choice but adding an artificial key to the object.

> Note: this is not the point of this blogpost. It's just an important side effect to consider. Could it be this approach is not idiomatic in React?


Now your boss demands that some links should be styled differently. Let's say some links should be underlined and some don't. Okay, let's change the `items` object so we can do that.

```js
const items = [
  { title: 'Home', icon: 'iconName', isUnderlined: false },
  { title: 'Products', icon: 'otherIconName', isUnderlined: false },
  { title: 'Blog', icon: 'anotherIconName', isUnderlined: false },
  { title: 'UnderlinedTitle', icon: 'underlinedIcon', isUnderlined: true },
];
```

And consequently, we should change the `Header` component so we can pass the new `isUnderlined` prop:

```jsx
const Header = ({items}) => {
	return <div>
		{items.map(item => (
			// styling happens inside the Item component
			<Item key={item.title} title={item.title} icon={item.icon} isUnderlined={isUnderlined}>
		))}
	</div>;
}
```

I hope you see what I'm getting at. Every change in your layout should be defined in the `items` object. Which is weird, since it should be responsible _for providing the data for the Item, not the styling_. Thats why I'd like to call the `items` object a `rendering object`.

Lastly, someone would probably mention to do this:

```jsx
const Header = ({items}) => {
	return <div>
		{items.map(item => (
			// styling happens inside the Item component
			<Item key={item.title} {...item}>
		))}
	</div>;
}
```

I don't like this approach since now I don't have a clue what props are passed to the `Item` component without looking at the `items` object and there could be props passed that are not even used. Ofcourse you might like this way of working (but I think you're wrong)

# How it could be done differently

Let's remove the `items` object. It has no use. React has this neat thing called `children`, so let's just use that.  And not only for the `Header` component. Also for the `Item` component! No need to reinvent the wheel.

```jsx
const Header = ({ children }) => {
  return <div>{children}</div>;
};
```

And where we use the `Header` component we'll just pass our header titles:

```jsx
const Page = () => {
  return (
    <Header>
      <Item Icon="iconName">Home</Item>
      <Item Icon="iconName">Products</Item>
      <Item Icon="iconName">Blog</Item>
      <Item Icon="iconName">
        <span style={{ textDecoration: 'underline' }}>UnderlinedTitle</span>
      </Item>
    </Header>
  );
};
```

No need to pass a `key` prop here and there's infinite possibilities when it comes to styling your seperate items. It's also immediately clear from one file and one component what the style is of the navigation.

# Conclusion

Know when you're not actually dealing with a list of things. In the above example, a developer's mind would  immediately resort to abstraction. It seems logically to add everything in a list. But actually, the items were just components that needed to look the same. No need to treat them as a list! Only When the list length is unknown or variable, using the `map` function is justified in `React` (eg. retreiving a product list from the backend).
