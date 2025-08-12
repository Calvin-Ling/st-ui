import { css } from 'lit';

export default css`
  :host {
    display: block;
    position: relative;
    background: var(--st-panel-background-color);
    border: solid var(--st-panel-border-width) var(--st-panel-border-color);
    border-radius: var(--st-border-radius-medium);
    padding: var(--st-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(st-divider) {
    --spacing: var(--st-spacing-x-small);
  }
`;
