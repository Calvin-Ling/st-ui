import StPopup from './popup.component.js';

export * from './popup.component.js';
export default StPopup;

StPopup.define('st-popup');

declare global {
  interface HTMLElementTagNameMap {
    'st-popup': StPopup;
  }
}
