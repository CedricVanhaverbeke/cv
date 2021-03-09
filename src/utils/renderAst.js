import React from 'react';

import rehypeReact from 'rehype-react';

import PrimaryHeader from '../components/PrimaryHeader';
import SecondaryHeader from '../components/SecondaryHeader';
import Link from '../components/Link';
import CodeBlock from '../components/CodeBlock';

export default new rehypeReact({
  createElement: React.createElement,
  components: {
    ['h1']: PrimaryHeader,
    ['h2']: SecondaryHeader,
    ['a']: Link,
    ['code']: CodeBlock,
  },
}).Compiler;
