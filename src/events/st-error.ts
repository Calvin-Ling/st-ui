export type StErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-error': StErrorEvent;
  }
}
