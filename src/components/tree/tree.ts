import StTree from './tree.component.js';

export * from './tree.component.js';
export default StTree;

StTree.define('st-tree');

declare global {
  interface HTMLElementTagNameMap {
    'st-tree': StTree;
  }
}
