import StCheckbox from './checkbox.component.js';

export * from './checkbox.component.js';
export default StCheckbox;

StCheckbox.define('st-checkbox');

declare global {
  interface HTMLElementTagNameMap {
    'st-checkbox': StCheckbox;
  }
}
