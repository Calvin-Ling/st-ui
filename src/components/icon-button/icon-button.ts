import StIconButton from './icon-button.component.js';

export * from './icon-button.component.js';
export default StIconButton;

StIconButton.define('st-icon-button');

declare global {
  interface HTMLElementTagNameMap {
    'st-icon-button': StIconButton;
  }
}
