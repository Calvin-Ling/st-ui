import StMenu from './menu.component.js';

export * from './menu.component.js';
export default StMenu;

StMenu.define('st-menu');

declare global {
  interface HTMLElementTagNameMap {
    'st-menu': StMenu;
  }
}
