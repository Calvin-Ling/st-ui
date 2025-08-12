export type StTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-tab-hide': StTabHideEvent;
  }
}
