export default function initHtml(html: string, css: string) {
  return `<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css" media="print">
@page {
  size: auto;  /* auto is the initial value */
  margin: 0mm; /* this affects the margin in the printer settings */
}
</style>
<style type="text/css">
${css}
</style>
</head>
<body>
${html}
</body>
`;
}

export const renderPreview = (html: string, css: string) => {
  return `
<div>
  <style type="text/css">
    ${css}
  </style>
  ${html}
</div>
  `
}