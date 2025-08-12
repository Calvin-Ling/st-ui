import StCopyButton from './copy-button.component.js';

export * from './copy-button.component.js';
export default StCopyButton;

StCopyButton.define('st-copy-button');

declare global {
  interface HTMLElementTagNameMap {
    'st-copy-button': StCopyButton;
  }
}
