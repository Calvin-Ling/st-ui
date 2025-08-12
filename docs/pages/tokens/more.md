---
meta:
  title: More Design Tokens
  description: Additional design tokens can be found here.
---

# More Design Tokens

All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

:::tip
Currently, the source of design tokens is considered to be [`light.css`](https://github.com/shoelace-style/shoelace/blob/next/src/themes/light.css). The dark theme, [dark.css](https://github.com/shoelace-style/shoelace/blob/next/src/themes/dark.css), mirrors all of the same tokens with dark mode-specific values where appropriate. Work is planned to move all design tokens to a single file, perhaps JSON or YAML, in the near future.
:::

## Focus Rings

Focus ring tokens control the appearance of focus rings. Note that form inputs use `--st-input-focus-ring-*` tokens instead.

| Token                    | Value                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| `--st-focus-ring-color`  | `var(--st-color-primary-600)` (light theme)<br>`var(--st-color-primary-700)` (dark theme) |
| `--st-focus-ring-style`  | `solid`                                                                                   |
| `--st-focus-ring-width`  | `3px`                                                                                     |
| `--st-focus-ring`        | `var(--st-focus-ring-style) var(--st-focus-ring-width) var(--st-focus-ring-color)`        |
| `--st-focus-ring-offset` | `1px`                                                                                     |

## Buttons

Button tokens control the appearance of buttons. In addition, buttons also currently use some form input tokens such as `--st-input-height-*` and `--st-input-border-*`. More button tokens may be added in the future to make it easier to style them more independently.

| Token                          | Value                         |
| ------------------------------ | ----------------------------- |
| `--st-button-font-size-small`  | `var(--st-font-size-x-small)` |
| `--st-button-font-size-medium` | `var(--st-font-size-small)`   |
| `--st-button-font-size-large`  | `var(--st-font-size-medium)`  |

## Form Inputs

Form input tokens control the appearance of form controls such as [input](/components/input), [select](/components/select), [textarea](/components/textarea), etc.

| Token                                   | Value                              |
| --------------------------------------- | ---------------------------------- |
| `--st-input-height-small`               | `1.875rem` (30px @ 16px base)      |
| `--st-input-height-medium`              | `2.5rem` (40px @ 16px base)        |
| `--st-input-height-large`               | `3.125rem` (50px @ 16px base)      |
| `--st-input-background-color`           | `var(--st-color-neutral-0)`        |
| `--st-input-background-color-hover`     | `var(--st-input-background-color)` |
| `--st-input-background-color-focus`     | `var(--st-input-background-color)` |
| `--st-input-background-color-disabled`  | `var(--st-color-neutral-100)`      |
| `--st-input-border-color`               | `var(--st-color-neutral-300)`      |
| `--st-input-border-color-hover`         | `var(--st-color-neutral-400)`      |
| `--st-input-border-color-focus`         | `var(--st-color-primary-500)`      |
| `--st-input-border-color-disabled`      | `var(--st-color-neutral-300)`      |
| `--st-input-border-width`               | `1px`                              |
| `--st-input-required-content`           | `*`                                |
| `--st-input-required-content-offset`    | `-2px`                             |
| `--st-input-required-content-color`     | `var(--st-input-label-color)`      |
| `--st-input-border-radius-small`        | `var(--st-border-radius-medium)`   |
| `--st-input-border-radius-medium`       | `var(--st-border-radius-medium)`   |
| `--st-input-border-radius-large`        | `var(--st-border-radius-medium)`   |
| `--st-input-font-family`                | `var(--st-font-sans)`              |
| `--st-input-font-weight`                | `var(--st-font-weight-normal)`     |
| `--st-input-font-size-small`            | `var(--st-font-size-small)`        |
| `--st-input-font-size-medium`           | `var(--st-font-size-medium)`       |
| `--st-input-font-size-large`            | `var(--st-font-size-large)`        |
| `--st-input-letter-spacing`             | `var(--st-letter-spacing-normal)`  |
| `--st-input-color`                      | `var(--st-color-neutral-700)`      |
| `--st-input-color-hover`                | `var(--st-color-neutral-700)`      |
| `--st-input-color-focus`                | `var(--st-color-neutral-700)`      |
| `--st-input-color-disabled`             | `var(--st-color-neutral-900)`      |
| `--st-input-icon-color`                 | `var(--st-color-neutral-500)`      |
| `--st-input-icon-color-hover`           | `var(--st-color-neutral-600)`      |
| `--st-input-icon-color-focus`           | `var(--st-color-neutral-600)`      |
| `--st-input-placeholder-color`          | `var(--st-color-neutral-500)`      |
| `--st-input-placeholder-color-disabled` | `var(--st-color-neutral-600)`      |
| `--st-input-spacing-small`              | `var(--st-spacing-small)`          |
| `--st-input-spacing-medium`             | `var(--st-spacing-medium)`         |
| `--st-input-spacing-large`              | `var(--st-spacing-large)`          |
| `--st-input-focus-ring-color`           | `hsl(198.6 88.7% 48.4% / 40%)`     |
| `--st-input-focus-ring-offset`          | `0`                                |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                         | Value                         |
| --------------------------------------------- | ----------------------------- |
| `--st-input-filled-background-color`          | `var(--st-color-neutral-100)` |
| `--st-input-filled-background-color-hover`    | `var(--st-color-neutral-100)` |
| `--st-input-filled-background-color-focus`    | `var(--st-color-neutral-100)` |
| `--st-input-filled-background-color-disabled` | `var(--st-color-neutral-100)` |
| `--st-input-filled-color`                     | `var(--st-color-neutral-800)` |
| `--st-input-filled-color-hover`               | `var(--st-color-neutral-800)` |
| `--st-input-filled-color-focus`               | `var(--st-color-neutral-700)` |
| `--st-input-filled-color-disabled`            | `var(--st-color-neutral-800)` |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                               | Value                        |
| ----------------------------------- | ---------------------------- |
| `--st-input-label-font-size-small`  | `var(--st-font-size-small)`  |
| `--st-input-label-font-size-medium` | `var(--st-font-size-medium`) |
| `--st-input-label-font-size-large`  | `var(--st-font-size-large)`  |
| `--st-input-label-color`            | `inherit`                    |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                   | Value                         |
| --------------------------------------- | ----------------------------- |
| `--st-input-help-text-font-size-small`  | `var(--st-font-size-x-small)` |
| `--st-input-help-text-font-size-medium` | `var(--st-font-size-small)`   |
| `--st-input-help-text-font-size-large`  | `var(--st-font-size-medium)`  |
| `--st-input-help-text-color`            | `var(--st-color-neutral-500)` |

## Toggles

Toggle tokens control the appearance of toggles such as [checkbox](/components/checkbox), [radio](/components/radio), [switch](/components/switch), etc.

| Token                     | Value                         |
| ------------------------- | ----------------------------- |
| `--st-toggle-size-small`  | `0.875rem` (14px @ 16px base) |
| `--st-toggle-size-medium` | `1.125rem` (18px @ 16px base) |
| `--st-toggle-size-large`  | `1.375rem` (22px @ 16px base) |

## Overlays

Overlay tokens control the appearance of overlays as used in [dialog](/components/dialog), [drawer](/components/drawer), etc.

| Token                           | Value                       |
| ------------------------------- | --------------------------- |
| `--st-overlay-background-color` | `hsl(240 3.8% 46.1% / 33%)` |

## Panels

Panel tokens control the appearance of panels such as those used in [dialog](/components/dialog), [drawer](/components/drawer), [menu](/components/menu), etc.

| Token                         | Value                         |
| ----------------------------- | ----------------------------- |
| `--st-panel-background-color` | `var(--st-color-neutral-0)`   |
| `--st-panel-border-color`     | `var(--st-color-neutral-200)` |
| `--st-panel-border-width`     | `1px`                         |

## Tooltips

Tooltip tokens control the appearance of tooltips. This includes the [tooltip](/components/tooltip) component as well as other implementations, such [range tooltips](/components/range).

| Token                           | Value                                                  |
| ------------------------------- | ------------------------------------------------------ |
| `--st-tooltip-border-radius`    | `var(--st-border-radius-medium)`                       |
| `--st-tooltip-background-color` | `var(--st-color-neutral-800)`                          |
| `--st-tooltip-color`            | `var(--st-color-neutral-0)`                            |
| `--st-tooltip-font-family`      | `var(--st-font-sans)`                                  |
| `--st-tooltip-font-weight`      | `var(--st-font-weight-normal)`                         |
| `--st-tooltip-font-size`        | `var(--st-font-size-small)`                            |
| `--st-tooltip-line-height`      | `var(--st-line-height-dense)`                          |
| `--st-tooltip-padding`          | `var(--st-spacing-2x-small) var(--st-spacing-x-small)` |
| `--st-tooltip-arrow-size`       | `6px`                                                  |
