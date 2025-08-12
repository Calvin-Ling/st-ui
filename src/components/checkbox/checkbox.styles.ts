import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--st-input-font-family);
    font-weight: var(--st-input-font-weight);
    color: var(--st-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--st-toggle-size-small);
    font-size: var(--st-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--st-toggle-size-medium);
    font-size: var(--st-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--st-toggle-size-large);
    font-size: var(--st-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--st-input-border-width) var(--st-input-border-color);
    border-radius: 2px;
    background-color: var(--st-input-background-color);
    color: var(--st-color-neutral-0);
    transition:
      var(--st-transition-fast) border-color,
      var(--st-transition-fast) background-color,
      var(--st-transition-fast) color,
      var(--st-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--st-input-border-color-hover);
    background-color: var(--st-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--st-color-primary-600);
    background-color: var(--st-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--st-color-primary-500);
    background-color: var(--st-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--st-focus-ring);
    outline-offset: var(--st-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--st-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--st-input-required-content);
    color: var(--st-input-required-content-color);
    margin-inline-start: var(--st-input-required-content-offset);
  }
`;
