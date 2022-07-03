import { marked } from 'marked';

const flexBlock: any = {
  name: 'flexBlock',
  level: 'block',
  start(src: string) {
    return src.match(/\^/)?.index;
  },
  tokenizer(src: string) {
    const rule = /^\^([^\^\n]+)\^([^\^\n]*)(?:\n|$)/;
    const match = rule.exec(src);
    if (match) {
      const token = { // Token to generate
        type: 'flexBlock', // Should match "name" above
        raw: match[0], // Text to consume from the source
        text: match[0].trim(), // Additional custom properties
        tokens: [], // Array where child inline tokens will be generated
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  },
  renderer(token: any) {
    console.log('flex-block', token);
    return `<div class="flex-parent" style="display: flex">${this.parser.parse(token.tokens)}</div>`;
  },
};

const flexContent: any = {
  name: 'flexChild',
  level: 'inline', // Is this a block-level or inline-level tokenizer?
  start(src: string) { return src.match(/\^/)?.index; }, // Hint to Marked.js to stop and check for a match
  tokenizer(src: string) {
    const rule = /^\^([^^\n]+)\^([^^\n]*)(?:\n|$)/; // Regex for the complete token, anchor to string start
    const match = rule.exec(src);
    if (match) {
      return { // Token to generate
        type: 'flexChild', // Should match "name" above
        raw: match[0], // Text to consume from the source
        left: this.lexer.blockTokens(match[1].trim()), // Additional custom properties, including
        right: this.lexer.blockTokens(match[2].trim()), //   any further-nested inline tokens
      };
    }
  },
  renderer(token: any) {
    console.log('flexchild', token, this.parser.parse(token?.left));
    return `
    <div class="flex-left" style="text-align: left;">
      ${this.parser.parse(token?.left)}
    </div>
    <div class="flex-right" style="text-align: right; margin-left: auto">
      ${this.parser.parse(token?.right)}
    </div>`;
  },
  childTokens: ['left', 'right'], // Any child tokens to be visited by walkTokens
};

marked.use({ extensions: [flexBlock, flexContent] });

export default marked;
