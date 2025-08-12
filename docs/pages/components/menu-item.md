---
meta:
  title: Menu Item
  description: Menu items provide options for the user to pick from in a menu.
layout: component
---

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item>Option 1</st-menu-item>
  <st-menu-item>Option 2</st-menu-item>
  <st-menu-item>Option 3</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item type="checkbox" checked>Checkbox</st-menu-item>
  <st-menu-item disabled>Disabled</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item>
    Prefix Icon
    <st-icon slot="prefix" name="gift"></st-icon>
  </st-menu-item>
  <st-menu-item>
    Suffix Icon
    <st-icon slot="suffix" name="heart"></st-icon>
  </st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem>Option 1</StMenuItem>
    <StMenuItem>Option 2</StMenuItem>
    <StMenuItem>Option 3</StMenuItem>
    <StDivider />
    <StMenuItem type="checkbox" checked>
      Checkbox
    </StMenuItem>
    <StMenuItem disabled>Disabled</StMenuItem>
    <StDivider />
    <StMenuItem>
      Prefix Icon
      <StIcon slot="prefix" name="gift" />
    </StMenuItem>
    <StMenuItem>
      Suffix Icon
      <StIcon slot="suffix" name="heart" />
    </StMenuItem>
  </StMenu>
);
```

{% endraw %}

## Examples

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item>
    <st-icon slot="prefix" name="house"></st-icon>
    Home
  </st-menu-item>

  <st-menu-item>
    <st-icon slot="prefix" name="envelope"></st-icon>
    Messages
    <st-badge slot="suffix" variant="primary" pill>12</st-badge>
  </st-menu-item>

  <st-divider></st-divider>

  <st-menu-item>
    <st-icon slot="prefix" name="gear"></st-icon>
    Settings
  </st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem>
      <StIcon slot="prefix" name="house" />
      Home
    </StMenuItem>

    <StMenuItem>
      <StIcon slot="prefix" name="envelope" />
      Messages
      <StBadge slot="suffix" variant="primary" pill>
        12
      </StBadge>
    </StMenuItem>

    <StDivider />

    <StMenuItem>
      <StIcon slot="prefix" name="gear" />
      Settings
    </StMenuItem>
  </StMenu>
);
```

{% endraw %}

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item>Option 1</st-menu-item>
  <st-menu-item disabled>Option 2</st-menu-item>
  <st-menu-item>Option 3</st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem>Option 1</StMenuItem>
    <StMenuItem disabled>Option 2</StMenuItem>
    <StMenuItem>Option 3</StMenuItem>
  </StMenu>
);
```

{% endraw %}

### Loading

Use the `loading` attribute to indicate that a menu item is busy. Like a disabled menu item, clicks will be suppressed until the loading state is removed.

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item>Option 1</st-menu-item>
  <st-menu-item loading>Option 2</st-menu-item>
  <st-menu-item>Option 3</st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem>Option 1</StMenuItem>
    <StMenuItem loading>Option 2</StMenuItem>
    <StMenuItem>Option 3</StMenuItem>
  </StMenu>
);
```

{% endraw %}

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item type="checkbox">Autosave</st-menu-item>
  <st-menu-item type="checkbox" checked>Check Spelling</st-menu-item>
  <st-menu-item type="checkbox">Word Wrap</st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem type="checkbox">Autosave</StMenuItem>
    <StMenuItem type="checkbox" checked>
      Check Spelling
    </StMenuItem>
    <StMenuItem type="checkbox">Word Wrap</StMenuItem>
  </StMenu>
);
```

{% endraw %}

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `st-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html:preview
<st-menu class="menu-value" style="max-width: 200px;">
  <st-menu-item value="opt-1">Option 1</st-menu-item>
  <st-menu-item value="opt-2">Option 2</st-menu-item>
  <st-menu-item value="opt-3">Option 3</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item type="checkbox" value="opt-4">Checkbox 4</st-menu-item>
  <st-menu-item type="checkbox" value="opt-5">Checkbox 5</st-menu-item>
  <st-menu-item type="checkbox" value="opt-6">Checkbox 6</st-menu-item>
</st-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('st-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

{% raw %}

```jsx:react
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <StMenu style={{ maxWidth: '200px' }} onSlSelect={handleSelect}>
      <StMenuItem value="opt-1">Option 1</StMenuItem>
      <StMenuItem value="opt-2">Option 2</StMenuItem>
      <StMenuItem value="opt-3">Option 3</StMenuItem>
    </StMenu>
  );
};
```

{% endraw %}
