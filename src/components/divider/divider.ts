import StDivider from './divider.component.js';

export * from './divider.component.js';
export default StDivider;

StDivider.define('st-divider');

declare global {
  interface HTMLElementTagNameMap {
    'st-divider': StDivider;
  }
}
