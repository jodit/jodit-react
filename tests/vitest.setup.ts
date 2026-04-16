import { expect } from 'vitest';
import prettier from 'prettier/standalone';
import htmlPlugin from 'prettier/plugins/html';

function normalize(html: string) {
  return html.replace(
    /name="jodit-toolbar-focus-helper_\d+"/g,
    'name="jodit-toolbar-focus-helper__ID__"'
  );
}

function roughFormat(html: string) {
  return html.replace(/></g, '>\n<');
}

function formatHtmlSafe(html: string) {
  try {
    const out = prettier.format(html, {
      parser: 'html',
      plugins: [htmlPlugin],
      printWidth: 80
    });
    return typeof out === 'string' ? out : roughFormat(html);
  } catch {
    return roughFormat(html);
  }
}

function nodeToHtml(val: any): string {
  if (val && val.nodeType === 11) {
    const el = document.createElement('div');
    el.appendChild(val.cloneNode(true));
    return el.innerHTML;
  }
  if (val && val.nodeType === 1 && typeof val.outerHTML === 'string') {
    return val.outerHTML;
  }
  return String(val);
}

expect.addSnapshotSerializer({
  test(val) {
    return val && typeof val === 'object' && 'nodeType' in val;
  },
  print(val) {
    const html = normalize(nodeToHtml(val));
    return formatHtmlSafe(html);
  }
});