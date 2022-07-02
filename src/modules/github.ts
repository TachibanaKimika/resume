export default `
.custom {
  width: 100px;
  height: 100px;
  background-color: #fdf;
}

main {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #24292f;
  background-color: #ffffff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  white-sapce: pre-wrap;
  padding: 25px;
}

details,
figcaption,
figure {
  display: block;
}

summary {
  display: list-item;
}

[hidden] {
  display: none !important;
}

a {
  background-color: transparent;
  color: #0969da;
  text-decoration: none;
}

a:active,
a:hover {
  outline-width: 0;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: 600;
}

dfn {
  font-style: italic;
}

h1 {
  margin: 12px 0;
  font-weight: 600;
  padding-bottom: 10px;
  font-size: 2em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
}

mark {
  background-color: #fff8c5;
  color: #24292f;
}

small {
  font-size: 90%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
  background-color: #ffffff;
}

code,
kbd,
pre,
samp {
  font-family: monospace,monospace;
  font-size: 1em;
}

figure {
  margin: 1em 40px;
}

hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid hsla(210,18%,87%,1);
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #d0d7de;
  border: 0;
}

input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

a:hover {
  text-decoration: underline;
}

hr::before {
  display: table;
  content: "";
}

hr::after {
  display: table;
  clear: both;
  content: "";
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
}

td,
th {
  padding: 0;
}

details summary {
  cursor: pointer;
}

details:not([open])>*:not(summary) {
  display: none !important;
}

kbd {
  display: inline-block;
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #24292f;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: solid 1px rgba(175,184,193,0.2);
  border-bottom-color: rgba(175,184,193,0.2);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(175,184,193,0.2);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 6px;
  padding-bottom: 6px;
  font-weight: 600;
  line-height: 1.25;
}

h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
  margin-bottom: 10px;
  padding-bottom: 10px;
}

h3 {
  font-weight: 600;
  font-size: 1.25em;
}

h4 {
  font-weight: 600;
  font-size: 1em;
}

h5 {
  font-weight: 600;
  font-size: .875em;
}

h6 {
  font-weight: 600;
  font-size: .85em;
  color: #57606a;
}

p {
  margin-top: 0;
  margin-bottom: 10px;
}

blockquote {
  margin: 0;
  padding: 0 1em;
  color: #57606a;
  border-left: .25em solid #d0d7de;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

ol ol,
ul ol {
  list-style-type: lower-roman;
}

ul ul ol,
ul ol ol,
ol ul ol,
ol ol ol {
  list-style-type: lower-alpha;
}

dd {
  margin-left: 0;
}

tt,
code {
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
  word-wrap: normal;
}

::placeholder {
  color: #6e7781;
  opacity: 1;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

[data-catalyst] {
  display: block;
}

g-emoji {
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

g-emoji img {
  width: 1em;
  height: 1em;
}

p,
blockquote,
ul,
ol,
dl,
table,
pre,
details {
  margin-top: 0;
  margin-bottom: 12px;
}

p {
  white-space: pre-wrap;
}

blockquote>:first-child {
  margin-top: 0;
}

blockquote>:last-child {
  margin-bottom: 0;
}

sup>a::before {
  content: "[";
}

sup>a::after {
  content: "]";
}

h1 tt,
h1 code,
h2 tt,
h2 code,
h3 tt,
h3 code,
h4 tt,
h4 code,
h5 tt,
h5 code,
h6 tt,
h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

ol[type="1"] {
  list-style-type: decimal;
}

ol[type=a] {
  list-style-type: lower-alpha;
}

ol[type=i] {
  list-style-type: lower-roman;
}

div>ol:not([type]) {
  list-style-type: decimal;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

li>p {
  margin-top: 16px;
}

li+li {
  margin-top: .25em;
}

dl {
  padding: 0;
}

dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

table th {
  font-weight: 600;
}

table th,
table td {
  padding: 6px 13px;
  border: 1px solid #d0d7de;
}

table tr {
  background-color: #ffffff;
  border-top: 1px solid hsla(210,18%,87%,1);
}

table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

table img {
  background-color: transparent;
}

img[align=right] {
  padding-left: 20px;
}

img[align=left] {
  padding-right: 20px;
}

code,
tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  background-color: rgba(175,184,193,0.2);
  border-radius: 6px;
}

code br,
tt br {
  display: none;
}

del code {
  text-decoration: inherit;
}

pre code {
  font-size: 100%;
}

pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

pre code,
pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}
`