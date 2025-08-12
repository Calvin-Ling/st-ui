import StResizeObserver from './resize-observer.component.js';

export * from './resize-observer.component.js';
export default StResizeObserver;

StResizeObserver.define('st-resize-observer');

declare global {
  interface HTMLElementTagNameMap {
    'st-resize-observer': StResizeObserver;
  }
}
