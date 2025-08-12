import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--st-font-sans);
    font-size: var(--st-font-size-small);
    font-weight: var(--st-font-weight-semibold);
    border-radius: var(--st-border-radius-medium);
    color: var(--st-color-neutral-600);
    padding: var(--st-spacing-medium) var(--st-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--st-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--st-color-primary-600);
    outline: var(--st-focus-ring);
    outline-offset: calc(-1 * var(--st-focus-ring-width) - var(--st-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--st-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--st-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--st-font-size-small);
    margin-inline-start: var(--st-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--st-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
