export type StLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-lazy-load': StLazyLoadEvent;
  }
}
