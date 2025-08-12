---
meta:
  title: Divider
  description: Dividers are used to visually separate or group elements.
layout: component
---

```html:preview
<st-divider></st-divider>
```

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';

const App = () => <StDivider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html:preview
<st-divider style="--width: 4px;"></st-divider>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';

const App = () => <StDivider style={{ '--width': '4px' }} />;
```

{% endraw %}

### Color

Use the `--color` custom property to change the color of the divider.

```html:preview
<st-divider style="--color: tomato;"></st-divider>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';

const App = () => <StDivider style={{ '--color': 'tomato' }} />;
```

{% endraw %}

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html:preview
<div style="text-align: center;">
  Above
  <st-divider style="--spacing: 2rem;"></st-divider>
  Below
</div>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';

const App = () => (
  <>
    Above
    <StDivider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

{% endraw %}

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html:preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <st-divider vertical></st-divider>
  Middle
  <st-divider vertical></st-divider>
  Last
</div>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <StDivider vertical />
    Middle
    <StDivider vertical />
    Last
  </div>
);
```

{% endraw %}

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item value="1">Option 1</st-menu-item>
  <st-menu-item value="2">Option 2</st-menu-item>
  <st-menu-item value="3">Option 3</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item value="4">Option 4</st-menu-item>
  <st-menu-item value="5">Option 5</st-menu-item>
  <st-menu-item value="6">Option 6</st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem value="1">Option 1</StMenuItem>
    <StMenuItem value="2">Option 2</StMenuItem>
    <StMenuItem value="3">Option 3</StMenuItem>
    <st-divider />
    <StMenuItem value="4">Option 4</StMenuItem>
    <StMenuItem value="5">Option 5</StMenuItem>
    <StMenuItem value="6">Option 6</StMenuItem>
  </StMenu>
);
```

### Tailwind users

Using TailwindCSS with Shoelace [may override divider styles](https://github.com/shoelace-style/shoelace/issues/2088), making them invisible. As a workaround, add this to your Tailwind config file.

```css
@layer base {
  st-divider:not([vertical]) {
    border-top: solid var(--width) var(--color);
  }

  st-divider[vertical] {
    border-left: solid var(--width) var(--color);
  }
}
```

{% endraw %}
