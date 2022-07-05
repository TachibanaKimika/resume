import { marked } from 'marked';

const flexBox: any = {
  name: 'flexWarp',
  level: 'block',
  start(src: string) {
    return src?.match(/\$flex-start/)?.index;
  },
  tokenizer(src: string) {
    const rule = /^(\$flex-start((\n|.))+(\$flex-end))/;
    const match = rule.exec(src);
    if (match) {
      const text = match?.[0]?.replace(/^\$flex\-start/, '')?.replace(/\$flex\-end$/, '');
      const tokens = this.lexer.blockTokens(text);
      return {
        type: 'flexWarp',
        raw: match[0],
        text,
        tokens,
      };
    }
  },
  renderer(token: any) {
    return `<div style="display: flex">${this.parser.parse(token.tokens)}</div>`;
  },
};

const flexChild: any = {
  name: 'flexChild',
  level: 'block',
  start(src: string) {
    return src?.match(/\$flex-child-start-\d/)?.index;
  },
  tokenizer(src: string) {
    const flexNum = src?.match(/\$flex\-child\-start\-\d/)?.[0]?.replace(/\$flex\-child\-start\-/, '');
    const rule = new RegExp(`^(\\$flex\\-child\\-start\\-${flexNum}((\\n|.))+(\\$flex\\-child\\-end\\-${flexNum}))`);
    const startRuleStr = `^\\$flex\\-child\\-start-${flexNum}`; const
      endRuleStr = `\\$flex\\-child\\-end\\-${flexNum}$`;
    const match = rule.exec(src);
    if (match) {
      const statementKeyword = ['right', 'left', 'center'];
      const statementsMatch = src?.match(new RegExp(`(?<=(${startRuleStr}:)).*`))?.[0]?.split('&');
      const style = statementsMatch?.map((statement: string) => (statementKeyword.includes(statement) ? `align-items: ${statement};text-align: ${statement};` : statement));
      const text = match?.[0]?.replace(new RegExp(`${startRuleStr}.*`), '')?.replace(new RegExp(`.*${endRuleStr}`), '');
      const tokens = this.lexer.blockTokens(text);
      return {
        type: 'flexChild',
        raw: match[0],
        level: flexNum,
        style,
        text,
        tokens,
      };
    }
  },
  renderer(token: any) {
    return `<div style="flex: ${token?.level};${token?.style?.join(';')}">${this.parser.parse(token.tokens)}</div>`;
  },
};

marked.use({ extensions: [flexBox, flexChild] });

export default marked;
