---
meta:
  title: Button
  description: Buttons represent actions that are available to the user.
layout: component
---

```html:preview
<st-button>Button</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => <StButton>Button</StButton>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html:preview
<st-button variant="default">Default</st-button>
<st-button variant="primary">Primary</st-button>
<st-button variant="success">Success</st-button>
<st-button variant="neutral">Neutral</st-button>
<st-button variant="warning">Warning</st-button>
<st-button variant="danger">Danger</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton variant="default">Default</StButton>
    <StButton variant="primary">Primary</StButton>
    <StButton variant="success">Success</StButton>
    <StButton variant="neutral">Neutral</StButton>
    <StButton variant="warning">Warning</StButton>
    <StButton variant="danger">Danger</StButton>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html:preview
<st-button size="small">Small</st-button>
<st-button size="medium">Medium</st-button>
<st-button size="large">Large</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton size="small">Small</StButton>
    <StButton size="medium">Medium</StButton>
    <StButton size="large">Large</StButton>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html:preview
<st-button variant="default" outline>Default</st-button>
<st-button variant="primary" outline>Primary</st-button>
<st-button variant="success" outline>Success</st-button>
<st-button variant="neutral" outline>Neutral</st-button>
<st-button variant="warning" outline>Warning</st-button>
<st-button variant="danger" outline>Danger</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton variant="default" outline>
      Default
    </StButton>
    <StButton variant="primary" outline>
      Primary
    </StButton>
    <StButton variant="success" outline>
      Success
    </StButton>
    <StButton variant="neutral" outline>
      Neutral
    </StButton>
    <StButton variant="warning" outline>
      Warning
    </StButton>
    <StButton variant="danger" outline>
      Danger
    </StButton>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html:preview
<st-button size="small" pill>Small</st-button>
<st-button size="medium" pill>Medium</st-button>
<st-button size="large" pill>Large</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton size="small" pill>
      Small
    </StButton>
    <StButton size="medium" pill>
      Medium
    </StButton>
    <StButton size="large" pill>
      Large
    </StButton>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<st-icon>` in the default slot.

```html:preview
<st-button variant="default" size="small" circle>
  <st-icon name="gear" label="Settings"></st-icon>
</st-button>

<st-button variant="default" size="medium" circle>
  <st-icon name="gear" label="Settings"></st-icon>
</st-button>

<st-button variant="default" size="large" circle>
  <st-icon name="gear" label="Settings"></st-icon>
</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <StButton variant="default" size="small" circle>
      <StIcon name="gear" />
    </StButton>
    <StButton variant="default" size="medium" circle>
      <StIcon name="gear" />
    </StButton>
    <StButton variant="default" size="large" circle>
      <StIcon name="gear" />
    </StButton>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html:preview
<st-button variant="text" size="small">Text</st-button>
<st-button variant="text" size="medium">Text</st-button>
<st-button variant="text" size="large">Text</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton variant="text" size="small">
      Text
    </StButton>
    <StButton variant="text" size="medium">
      Text
    </StButton>
    <StButton variant="text" size="large">
      Text
    </StButton>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. [[CMD/CTRL/SHIFT]] + [[CLICK]]) and exposes the `target` and `download` attributes.

```html:preview
<st-button href="https://example.com/">Link</st-button>
<st-button href="https://example.com/" target="_blank">New Window</st-button>
<st-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</st-button>
<st-button href="https://example.com/" disabled>Disabled</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton href="https://example.com/">Link</StButton>
    <StButton href="https://example.com/" target="_blank">
      New Window
    </StButton>
    <StButton href="/assets/images/wordmark.svg" download="shoelace.svg">
      Download
    </StButton>
    <StButton href="https://example.com/" disabled>
      Disabled
    </StButton>
  </>
);
```

:::tip
When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).
:::

### Setting a Custom Width

As expected, buttons can be given a custom width by passing inline styles to the component (or using a class). This is useful for making buttons span the full width of their container on smaller screens.

```html:preview
<st-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</st-button>
<st-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</st-button>
<st-button variant="default" size="large" style="width: 100%;">Large</st-button>
```

{% raw %}

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </StButton>
    <StButton variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </StButton>
    <StButton variant="default" size="large" style={{ width: '100%' }}>
      Large
    </StButton>
  </>
);
```

{% endraw %}

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<st-button variant="default" size="small">
  <st-icon slot="prefix" name="gear"></st-icon>
  Settings
</st-button>

<st-button variant="default" size="small">
  <st-icon slot="suffix" name="arrow-counterclockwise"></st-icon>
  Refresh
</st-button>

<st-button variant="default" size="small">
  <st-icon slot="prefix" name="link-45deg"></st-icon>
  <st-icon slot="suffix" name="box-arrow-up-right"></st-icon>
  Open
</st-button>

<br /><br />

<st-button variant="default">
  <st-icon slot="prefix" name="gear"></st-icon>
  Settings
</st-button>

<st-button variant="default">
  <st-icon slot="suffix" name="arrow-counterclockwise"></st-icon>
  Refresh
</st-button>

<st-button variant="default">
  <st-icon slot="prefix" name="link-45deg"></st-icon>
  <st-icon slot="suffix" name="box-arrow-up-right"></st-icon>
  Open
</st-button>

<br /><br />

<st-button variant="default" size="large">
  <st-icon slot="prefix" name="gear"></st-icon>
  Settings
</st-button>

<st-button variant="default" size="large">
  <st-icon slot="suffix" name="arrow-counterclockwise"></st-icon>
  Refresh
</st-button>

<st-button variant="default" size="large">
  <st-icon slot="prefix" name="link-45deg"></st-icon>
  <st-icon slot="suffix" name="box-arrow-up-right"></st-icon>
  Open
</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <StButton variant="default" size="small">
      <StIcon slot="prefix" name="gear"></StIcon>
      Settings
    </StButton>

    <StButton variant="default" size="small">
      <StIcon slot="suffix" name="arrow-counterclockwise"></StIcon>
      Refresh
    </StButton>

    <StButton variant="default" size="small">
      <StIcon slot="prefix" name="link-45deg"></StIcon>
      <StIcon slot="suffix" name="box-arrow-up-right"></StIcon>
      Open
    </StButton>

    <br />
    <br />

    <StButton variant="default">
      <StIcon slot="prefix" name="gear"></StIcon>
      Settings
    </StButton>

    <StButton variant="default">
      <StIcon slot="suffix" name="arrow-counterclockwise"></StIcon>
      Refresh
    </StButton>

    <StButton variant="default">
      <StIcon slot="prefix" name="link-45deg"></StIcon>
      <StIcon slot="suffix" name="box-arrow-up-right"></StIcon>
      Open
    </StButton>

    <br />
    <br />

    <StButton variant="default" size="large">
      <StIcon slot="prefix" name="gear"></StIcon>
      Settings
    </StButton>

    <StButton variant="default" size="large">
      <StIcon slot="suffix" name="arrow-counterclockwise"></StIcon>
      Refresh
    </StButton>

    <StButton variant="default" size="large">
      <StIcon slot="prefix" name="link-45deg"></StIcon>
      <StIcon slot="suffix" name="box-arrow-up-right"></StIcon>
      Open
    </StButton>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html:preview
<st-button size="small" caret>Small</st-button>
<st-button size="medium" caret>Medium</st-button>
<st-button size="large" caret>Large</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton size="small" caret>
      Small
    </StButton>
    <StButton size="medium" caret>
      Medium
    </StButton>
    <StButton size="large" caret>
      Large
    </StButton>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around.

```html:preview
<st-button variant="default" loading>Default</st-button>
<st-button variant="primary" loading>Primary</st-button>
<st-button variant="success" loading>Success</st-button>
<st-button variant="neutral" loading>Neutral</st-button>
<st-button variant="warning" loading>Warning</st-button>
<st-button variant="danger" loading>Danger</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton variant="default" loading>
      Default
    </StButton>
    <StButton variant="primary" loading>
      Primary
    </StButton>
    <StButton variant="success" loading>
      Success
    </StButton>
    <StButton variant="neutral" loading>
      Neutral
    </StButton>
    <StButton variant="warning" loading>
      Warning
    </StButton>
    <StButton variant="danger" loading>
      Danger
    </StButton>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button.

```html:preview
<st-button variant="default" disabled>Default</st-button>
<st-button variant="primary" disabled>Primary</st-button>
<st-button variant="success" disabled>Success</st-button>
<st-button variant="neutral" disabled>Neutral</st-button>
<st-button variant="warning" disabled>Warning</st-button>
<st-button variant="danger" disabled>Danger</st-button>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <StButton variant="default" disabled>
      Default
    </StButton>

    <StButton variant="primary" disabled>
      Primary
    </StButton>

    <StButton variant="success" disabled>
      Success
    </StButton>

    <StButton variant="neutral" disabled>
      Neutral
    </StButton>

    <StButton variant="warning" disabled>
      Warning
    </StButton>

    <StButton variant="danger" disabled>
      Danger
    </StButton>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `st-button[variant="primary"]`).

```html:preview
<st-button class="pink">Pink Button</st-button>

<style>
  st-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --st-input-height-medium: 48px;
    --st-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--st-transition-medium) transform ease, var(--st-transition-medium) border ease;
  }

  st-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  st-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  st-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```
