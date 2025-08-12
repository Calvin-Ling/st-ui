import type StTreeItem from '../components/tree-item/tree-item.js';

export type StSelectionChangeEvent = CustomEvent<{ selection: StTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-selection-change': StSelectionChangeEvent;
  }
}
