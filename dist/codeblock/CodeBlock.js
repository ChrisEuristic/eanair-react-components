import React from "react";
import { useState } from "react";
import { marked } from "marked";
import { styled, keyframes } from "styled-components";
const windowWidth = 100;
export default function CodeBlock({ code }) {
    const [isWindowView, setIsWindowView] = useState(true);
    const [transition, setTransition] = useState();
    const Article = styled.article `
    width: ${windowWidth}%;
    word-wrap: break-word;
    box-sizing: border-box;
    background-color: white;
    border-radius: 5px;
    font-size: 0.8rem;
    padding: 0px 20px;
    overflow: hidden;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    animation: ${transition} 500ms forwards ease-in-out;
  `;
    return (React.createElement("div", null, isWindowView && (React.createElement(Main, null,
        React.createElement(Header, null,
            React.createElement(Red, { onClick: () => setIsWindowView(false) }),
            React.createElement(Yellow, { onClick: () => setTransition(keyframes `
          0% {
            max-height: 100vh;
          }
          100% {
            max-height: 0vh;
          }
        `) }),
            React.createElement(Green, { onClick: () => {
                    const delay = setTimeout(() => {
                        setTransition(keyframes `
                    0% {
                      max-height: 0vh;
                    }
                    100% {
                      max-height: 100vh;
                    }
                  `);
                        clearTimeout(delay);
                    }, 200);
                } })),
        React.createElement(Article, { dangerouslySetInnerHTML: { __html: marked(code) } })))));
}
const Main = styled.main `
  --width: ${windowWidth}%;
  width: var(--width);
  /* width: 1320px; */
  padding: 0.7rem;
  /* width: 100%; */
  background-color: rgb(112, 82, 82);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  box-shadow: 1px 1px 2px 1px var(--concept-color);
`;
const Header = styled.header `
  width: ${windowWidth}%;
  height: 40px;
  background-color: rgb(112, 82, 82);
  user-select: none;
`;
const Red = styled.aside `
  display: inline-block;
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  margin: 0 4px;
  position: relative;
  top: 0;
  left: 0;
  user-select: none;
  background-color: rgb(255, 111, 111);

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    background-color: #00000000;
    transition: 500ms;
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  &:hover::before {
    transition: 200ms;
    background-color: #00000050;
  }

  &:active {
    box-shadow: inset 1px 1px 1px #00000050;
    top: 1px;
    left: 1px;
  }
`;
const Yellow = styled.aside `
  display: inline-block;
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  margin: 0 4px;
  position: relative;
  top: 0;
  left: 0;
  user-select: none;
  background-color: rgb(246, 165, 52);

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    background-color: #00000000;
    transition: 500ms;
    clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
  }

  &:hover::before {
    transition: 200ms;
    background-color: #00000050;
  }

  &:active {
    box-shadow: inset 1px 1px 1px #00000050;
    top: 1px;
    left: 1px;
  }
`;
const Green = styled.aside `
  display: inline-block;
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  margin: 0 4px;
  position: relative;
  top: 0;
  left: 0;
  user-select: none;
  background-color: rgb(106, 223, 106);

  &::before {
    content: "";
    transition: 500ms;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 6px;
    height: 6px;
    background-color: #00000000;
    clip-path: polygon(80% 0, 0 0, 0 80%);
  }

  &::after {
    content: "";
    transition: 500ms;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 6px;
    height: 6px;
    background-color: #00000000;
    clip-path: polygon(100% 20%, 20% 100%, 100% 100%);
  }

  &:hover::before {
    transition: 200ms;
    background-color: #00000050;
  }

  &:hover::after {
    transition: 200ms;
    background-color: #00000050;
  }

  &:active {
    box-shadow: inset 1px 1px 1px #00000050;
    top: 1px;
    left: 1px;
  }
`;
//# sourceMappingURL=CodeBlock.js.map