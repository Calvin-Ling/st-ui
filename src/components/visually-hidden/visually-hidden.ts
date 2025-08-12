import StVisuallyHidden from './visually-hidden.component.js';

export * from './visually-hidden.component.js';
export default StVisuallyHidden;

StVisuallyHidden.define('st-visually-hidden');

declare global {
  interface HTMLElementTagNameMap {
    'st-visually-hidden': StVisuallyHidden;
  }
}
