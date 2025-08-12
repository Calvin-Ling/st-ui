import { css } from 'lit';

export default css`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--st-tooltip-arrow-size);
    --arrow-color: var(--st-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--st-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--st-tooltip-border-radius);
    background-color: var(--st-tooltip-background-color);
    font-family: var(--st-tooltip-font-family);
    font-size: var(--st-tooltip-font-size);
    font-weight: var(--st-tooltip-font-weight);
    line-height: var(--st-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--st-tooltip-color);
    padding: var(--st-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;
