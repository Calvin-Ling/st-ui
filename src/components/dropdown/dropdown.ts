import StDropdown from './dropdown.component.js';

export * from './dropdown.component.js';
export default StDropdown;

StDropdown.define('st-dropdown');

declare global {
  interface HTMLElementTagNameMap {
    'st-dropdown': StDropdown;
  }
}
