import StTab from './tab.component.js';

export * from './tab.component.js';
export default StTab;

StTab.define('st-tab');

declare global {
  interface HTMLElementTagNameMap {
    'st-tab': StTab;
  }
}
