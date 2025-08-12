import StInput from './input.component.js';

export * from './input.component.js';
export default StInput;

StInput.define('st-input');

declare global {
  interface HTMLElementTagNameMap {
    'st-input': StInput;
  }
}
