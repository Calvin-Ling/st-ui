---
meta:
  title: Checkbox
  description: Checkboxes allow the user to toggle an option on or off.
layout: component
---

```html:preview
<st-checkbox>Checkbox</st-checkbox>
```

```jsx:react
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <StCheckbox>Checkbox</StCheckbox>;
```

:::tip
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html:preview
<st-checkbox checked>Checked</st-checkbox>
```

```jsx:react
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <StCheckbox checked>Checked</StCheckbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html:preview
<st-checkbox indeterminate>Indeterminate</st-checkbox>
```

```jsx:react
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <StCheckbox indeterminate>Indeterminate</StCheckbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html:preview
<st-checkbox disabled>Disabled</st-checkbox>
```

```jsx:react
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <StCheckbox disabled>Disabled</StCheckbox>;
```

### Sizes

Use the `size` attribute to change a checkbox's size.

```html:preview
<st-checkbox size="small">Small</st-checkbox>
<br />
<st-checkbox size="medium">Medium</st-checkbox>
<br />
<st-checkbox size="large">Large</st-checkbox>
```

```jsx:react
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => (
  <>
    <StCheckbox size="small">Small</StCheckbox>
    <br />
    <StCheckbox size="medium">Medium</StCheckbox>
    <br />
    <StCheckbox size="large">Large</StCheckbox>
  </>
);
```

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html:preview
<st-checkbox help-text="What should the user know about the checkbox?">Label</st-checkbox>
```

```jsx:react
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <StCheckbox help-text="What should the user know about the switch?">Label</StCheckbox>;
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html:preview
<form class="custom-validity">
  <st-checkbox>Check me</st-checkbox>
  <br />
  <st-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</st-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('st-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('st-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('st-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

{% raw %}

```jsx:react
import { useEffect, useRef } from 'react';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import StCheckbox from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <StCheckbox ref={checkbox} onSlChange={handleChange}>
        Check me
      </StCheckbox>
      <br />
      <SlButton type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </SlButton>
    </form>
  );
};
```

{% endraw %}
