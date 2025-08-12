export type StCopyEvent = CustomEvent<{ value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'st-copy': StCopyEvent;
  }
}
