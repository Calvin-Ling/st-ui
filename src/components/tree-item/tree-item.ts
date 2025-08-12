import StTreeItem from './tree-item.component.js';

export * from './tree-item.component.js';
export default StTreeItem;

StTreeItem.define('st-tree-item');

declare global {
  interface HTMLElementTagNameMap {
    'st-tree-item': StTreeItem;
  }
}
