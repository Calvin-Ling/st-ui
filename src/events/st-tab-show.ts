export type StTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-tab-show': StTabShowEvent;
  }
}
