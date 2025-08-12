export type StAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-after-show': StAfterShowEvent;
  }
}
