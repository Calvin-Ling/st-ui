import StButton from './button.component.js';

export * from './button.component.js';
export default StButton;

StButton.define('st-button');

declare global {
  interface HTMLElementTagNameMap {
    'st-button': StButton;
  }
}
