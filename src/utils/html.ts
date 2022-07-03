export default function initHtml(html: string, css: string) {
  return `
<main>
<style type="text/css">
${css}
</style>
${html}
</main>
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
