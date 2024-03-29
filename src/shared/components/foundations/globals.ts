import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
/* A Modern CSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul[class],
ol[class] {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
figure,
blockquote,
dl,
dd {
  margin: 0;
}
html {
  scroll-behavior: smooth;
  font-size: 14px;
  background: ${theme.color.neutral['100']};
  overflow-y: scroll;
  overscroll-behavior: contain;
}
body {
  overflow: hidden;
  text-rendering: optimizeSpeed;
  font-family: ${theme.font.family.base};
  line-height: 1.65;
    background: ${theme.color.neutral['100']};
}
ul[class],
ol[class] {
  list-style: none;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img,
picture {
  max-width: 100%;
  display: block;
}
article > * + * {
  margin-top: 1em;
}
input,
button,
textarea,
select {
  font: inherit;
}
img:not([alt]) {
  filter: blur(10px);
}

//
// ::-webkit-scrollbar {
//   width: 10px;
// }
//
// ::-webkit-scrollbar-track {
//   background: ${theme.color.neutral['100']};
// }
//
// ::-webkit-scrollbar-thumb {
//   background: ${theme.color.neutral['200']};
// }
//
// ::-webkit-scrollbar-thumb:hover {
//   background: ${theme.color.neutral['300']};
// }

::-moz-selection {
  background: ${theme.color.neutral['200']};
}
::selection {
  background: ${theme.color.neutral['200']};
}
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
