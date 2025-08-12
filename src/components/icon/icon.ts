import StIcon from './icon.component.js';

export * from './icon.component.js';
export default StIcon;

StIcon.define('st-icon');

declare global {
  interface HTMLElementTagNameMap {
    'st-icon': StIcon;
  }
}
