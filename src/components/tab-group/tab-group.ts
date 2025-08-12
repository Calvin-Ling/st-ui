import StTabGroup from './tab-group.component.js';

export * from './tab-group.component.js';
export default StTabGroup;

StTabGroup.define('st-tab-group');

declare global {
  interface HTMLElementTagNameMap {
    'st-tab-group': StTabGroup;
  }
}
