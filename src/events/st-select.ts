import type StMenuItem from '../components/menu-item/menu-item.js';

export type StSelectEvent = CustomEvent<{ item: StMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-select': StSelectEvent;
  }
}
