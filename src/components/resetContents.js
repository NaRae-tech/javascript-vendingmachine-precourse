import { $ } from '../dom.js';

export function ResetContents() {
  const contentContainer = $('#contents');
  while (contentContainer.hasChildNodes()) {
    contentContainer.removeChild(contentContainer.lastChild);
  }
}