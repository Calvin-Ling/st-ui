---
meta:
  title: Icon Button
  description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component
---

For a full list of icons that come bundled with Shoelace, refer to the [icon component](/components/icon).

```html:preview
<st-icon-button name="gear" label="Settings"></st-icon-button>
```

```jsx:react
import StIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => <StIconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html:preview
<st-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></st-icon-button>
<st-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></st-icon-button>
<st-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></st-icon-button>
```

{% raw %}

```jsx:react
import StIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => (
  <>
    <StIconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <StIconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <StIconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html:preview
<div class="icon-button-color">
  <st-icon-button name="type-bold" label="Bold"></st-icon-button>
  <st-icon-button name="type-italic" label="Italic"></st-icon-button>
  <st-icon-button name="type-underline" label="Underline"></st-icon-button>
</div>

<style>
  .icon-button-color st-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color st-icon-button::part(base):hover,
  .icon-button-color st-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color st-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx:react
import StIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const css = `
  .icon-button-color st-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color st-icon-button::part(base):hover,
  .icon-button-color st-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color st-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <StIconButton name="type-bold" label="Bold" />
      <StIconButton name="type-italic" label="Italic" />
      <StIconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html:preview
<st-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></st-icon-button>
```

```jsx:react
import StIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => <StIconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html:preview
<st-tooltip content="Settings">
  <st-icon-button name="gear" label="Settings"></st-icon-button>
</st-tooltip>
```

```jsx:react
import StIconButton from '@shoelace-style/shoelace/dist/react/icon-button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <StTooltip content="Settings">
    <StIconButton name="gear" label="Settings" />
  </StTooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html:preview
<st-icon-button name="gear" label="Settings" disabled></st-icon-button>
```

```jsx:react
import StIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => <StIconButton name="gear" label="Settings" disabled />;
```
