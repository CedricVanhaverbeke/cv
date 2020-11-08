import React from 'react';

export const Row = ({ children }) => {
  const columns = React.Children.toArray(children).length;
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      className="w-full border-dashed border-white grid"
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: `${child.props.className} p-2`,
        });
      })}
    </div>
  );
};

const AsciiTable = ({ children }) => (
  <div className="flex flex-col w-full mb-4">{children}</div>
);

export default AsciiTable;
