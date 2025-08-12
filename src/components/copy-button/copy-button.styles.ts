import { css } from 'lit';

export default css`
  :host {
    --error-color: var(--st-color-danger-600);
    --success-color: var(--st-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--st-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--st-spacing-x-small);
    cursor: pointer;
    transition: var(--st-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;
