import StTooltip from './tooltip.component.js';

export * from './tooltip.component.js';
export default StTooltip;

StTooltip.define('st-tooltip');

declare global {
  interface HTMLElementTagNameMap {
    'st-tooltip': StTooltip;
  }
}
