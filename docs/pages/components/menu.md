---
meta:
  title: Menu
  description: Menus provide a list of options for the user to choose from.
layout: component
---

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item value="undo">Undo</st-menu-item>
  <st-menu-item value="redo">Redo</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item value="cut">Cut</st-menu-item>
  <st-menu-item value="copy">Copy</st-menu-item>
  <st-menu-item value="paste">Paste</st-menu-item>
  <st-menu-item value="delete">Delete</st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem value="undo">Undo</StMenuItem>
    <StMenuItem value="redo">Redo</StMenuItem>
    <StDivider />
    <StMenuItem value="cut">Cut</StMenuItem>
    <StMenuItem value="copy">Copy</StMenuItem>
    <StMenuItem value="paste">Paste</StMenuItem>
    <StMenuItem value="delete">Delete</StMenuItem>
  </StMenu>
);
```

{% endraw %}

:::tip
Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.
:::

## Examples

### In Dropdowns

Menus work really well when used inside [dropdowns](/components/dropdown).

```html:preview
<st-dropdown>
  <st-button slot="trigger" caret>Edit</st-button>
  <st-menu>
    <st-menu-item value="cut">Cut</st-menu-item>
    <st-menu-item value="copy">Copy</st-menu-item>
    <st-menu-item value="paste">Paste</st-menu-item>
  </st-menu>
</st-dropdown>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StDropdown>
    <StButton slot="trigger" caret>Edit</StButton>
    <StMenu>
      <StMenuItem value="cut">Cut</StMenuItem>
      <StMenuItem value="copy">Copy</StMenuItem>
      <StMenuItem value="paste">Paste</StMenuItem>
    </StMenu>
  </StDropdown>
);
```

### Submenus

To create a submenu, nest an `<st-menu slot="submenu">` in any [menu item](/components/menu-item).

```html:preview
<st-menu style="max-width: 200px;">
  <st-menu-item value="undo">Undo</st-menu-item>
  <st-menu-item value="redo">Redo</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item value="cut">Cut</st-menu-item>
  <st-menu-item value="copy">Copy</st-menu-item>
  <st-menu-item value="paste">Paste</st-menu-item>
  <st-divider></st-divider>
  <st-menu-item>
    Find
    <st-menu slot="submenu">
      <st-menu-item value="find">Find…</st-menu-item>
      <st-menu-item value="find-previous">Find Next</st-menu-item>
      <st-menu-item value="find-next">Find Previous</st-menu-item>
    </st-menu>
  </st-menu-item>
  <st-menu-item>
    Transformations
    <st-menu slot="submenu">
      <st-menu-item value="uppercase">Make uppercase</st-menu-item>
      <st-menu-item value="lowercase">Make lowercase</st-menu-item>
      <st-menu-item value="capitalize">Capitalize</st-menu-item>
    </st-menu>
  </st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StMenu style={{ maxWidth: '200px' }}>
    <StMenuItem value="undo">Undo</StMenuItem>
    <StMenuItem value="redo">Redo</StMenuItem>
    <StDivider />
    <StMenuItem value="cut">Cut</StMenuItem>
    <StMenuItem value="copy">Copy</StMenuItem>
    <StMenuItem value="paste">Paste</StMenuItem>
    <StDivider />
    <StMenuItem>
      Find
      <StMenu slot="submenu">
        <StMenuItem value="find">Find…</StMenuItem>
        <StMenuItem value="find-previous">Find Next</StMenuItem>
        <StMenuItem value="find-next">Find Previous</StMenuItem>
      </StMenu>
    </StMenuItem>
    <StMenuItem>
      Transformations
      <StMenu slot="submenu">
        <StMenuItem value="uppercase">Make uppercase</StMenuItem>
        <StMenuItem value="lowercase">Make lowercase</StMenuItem>
        <StMenuItem value="capitalize">Capitalize</StMenuItem>
      </StMenu>
    </StMenuItem>
  </StMenu>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenus when possible.
:::

{% endraw %}
