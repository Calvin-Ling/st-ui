export type StLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-lazy-change': StLazyChangeEvent;
  }
}
