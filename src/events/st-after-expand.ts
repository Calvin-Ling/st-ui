export type StAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-after-expand': StAfterExpandEvent;
  }
}
