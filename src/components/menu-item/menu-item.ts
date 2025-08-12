import StMenuItem from './menu-item.component.js';

export * from './menu-item.component.js';
export default StMenuItem;

StMenuItem.define('st-menu-item');

declare global {
  interface HTMLElementTagNameMap {
    'st-menu-item': StMenuItem;
  }
}
