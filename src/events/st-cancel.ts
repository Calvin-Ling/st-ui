export type StCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-cancel': StCancelEvent;
  }
}
