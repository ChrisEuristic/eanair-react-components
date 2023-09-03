# @eanair/react-components

![Static Badge](https://img.shields.io/badge/npm-v9.6.7-green)

TypeScript React components library created for personal use.
(개인적인 용도로 사용하기 위해 제작한 리액트 컴포넌트 라이브러리입니다.)

## Installation (for standard modern project)

```bash
npm install @eanair/react-components
# or
yarn add @eanair/react-components
```

Example usage

```javascript
import { CodeBlock } from "@eanair/react-components";

function SomeComponent() {
  const content = `
    console.log("hello world!");
  `;

  return (
    <div style={{ width: "300px" }}>
      <CodeBlock code={text} />
    </div>
  );
}
```
Example result
![codeblock](https://github.com/ChrisEuristic/eanair-react-components/blob/main/resource/codeblock.png?raw=true "codeblock")

