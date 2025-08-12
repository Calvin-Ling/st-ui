import StBadge from './badge.component.js';

export * from './badge.component.js';
export default StBadge;

StBadge.define('st-badge');

declare global {
  interface HTMLElementTagNameMap {
    'st-badge': StBadge;
  }
}
