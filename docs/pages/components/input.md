---
meta:
  title: Input
  description: Inputs collect data from the user.
layout: component
---

```html:preview
<st-input></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput />;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html:preview
<st-input label="What is your name?"></st-input>
```

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput label="What is your name?" />;
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<st-input label="Nickname" help-text="What would you like people to call you?"></st-input>
```

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html:preview
<st-input placeholder="Type something"></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html:preview
<st-input placeholder="Clearable" clearable></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html:preview
<st-input type="password" placeholder="Password Toggle" password-toggle></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html:preview
<st-input placeholder="Type something" filled></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html:preview
<st-input placeholder="Disabled" disabled></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => <StInput placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html:preview
<st-input placeholder="Small" size="small"></st-input>
<br />
<st-input placeholder="Medium" size="medium"></st-input>
<br />
<st-input placeholder="Large" size="large"></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => (
  <>
    <StInput placeholder="Small" size="small" />
    <br />
    <StInput placeholder="Medium" size="medium" />
    <br />
    <StInput placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html:preview
<st-input placeholder="Small" size="small" pill></st-input>
<br />
<st-input placeholder="Medium" size="medium" pill></st-input>
<br />
<st-input placeholder="Large" size="large" pill></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => (
  <>
    <StInput placeholder="Small" size="small" pill />
    <br />
    <StInput placeholder="Medium" size="medium" pill />
    <br />
    <StInput placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html:preview
<st-input type="email" placeholder="Email"></st-input>
<br />
<st-input type="number" placeholder="Number"></st-input>
<br />
<st-input type="date" placeholder="Date"></st-input>
```

```jsx:react
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => (
  <>
    <StInput type="email" placeholder="Email" />
    <br />
    <StInput type="number" placeholder="Number" />
    <br />
    <StInput type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html:preview
<st-input placeholder="Small" size="small">
  <st-icon name="house" slot="prefix"></st-icon>
  <st-icon name="chat" slot="suffix"></st-icon>
</st-input>
<br />
<st-input placeholder="Medium" size="medium">
  <st-icon name="house" slot="prefix"></st-icon>
  <st-icon name="chat" slot="suffix"></st-icon>
</st-input>
<br />
<st-input placeholder="Large" size="large">
  <st-icon name="house" slot="prefix"></st-icon>
  <st-icon name="chat" slot="suffix"></st-icon>
</st-input>
```

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StInput from '@shoelace-style/shoelace/dist/react/input';

const App = () => (
  <>
    <StInput placeholder="Small" size="small">
      <StIcon name="house" slot="prefix"></StIcon>
      <StIcon name="chat" slot="suffix"></StIcon>
    </StInput>
    <br />
    <StInput placeholder="Medium" size="medium">
      <StIcon name="house" slot="prefix"></StIcon>
      <StIcon name="chat" slot="suffix"></StIcon>
    </StInput>
    <br />
    <StInput placeholder="Large" size="large">
      <StIcon name="house" slot="prefix"></StIcon>
      <StIcon name="chat" slot="suffix"></StIcon>
    </StInput>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html:preview
<st-input class="label-on-left" label="Name" help-text="Enter your name"></st-input>
<st-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></st-input>
<st-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></st-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--st-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--st-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```
