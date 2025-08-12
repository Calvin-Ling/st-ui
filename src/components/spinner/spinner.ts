import StSpinner from './spinner.component.js';

export * from './spinner.component.js';
export default StSpinner;

StSpinner.define('st-spinner');

declare global {
  interface HTMLElementTagNameMap {
    'st-spinner': StSpinner;
  }
}
