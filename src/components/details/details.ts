import StDetails from './details.component.js';

export * from './details.component.js';
export default StDetails;

StDetails.define('st-details');

declare global {
  interface HTMLElementTagNameMap {
    'st-details': StDetails;
  }
}
