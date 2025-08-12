export type StAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-after-collapse': StAfterCollapseEvent;
  }
}
