import StAnimation from './animation.component.js';

export * from './animation.component.js';
export default StAnimation;

StAnimation.define('st-animation');

declare global {
  interface HTMLElementTagNameMap {
    'st-animation': StAnimation;
  }
}
