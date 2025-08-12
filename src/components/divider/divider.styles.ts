import { css } from 'lit';

export default css`
  :host {
    --color: var(--st-panel-border-color);
    --width: var(--st-panel-border-width);
    --spacing: var(--st-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;
