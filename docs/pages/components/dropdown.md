---
meta:
  title: Dropdown
  description: 'Dropdowns expose additional content that "drops down" in a panel.'
layout: component
---

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker)). The API gives you complete control over showing, hiding, and positioning the panel.

```html:preview
<st-dropdown>
  <st-button slot="trigger" caret>Dropdown</st-button>
  <st-menu>
    <st-menu-item>Dropdown Item 1</st-menu-item>
    <st-menu-item>Dropdown Item 2</st-menu-item>
    <st-menu-item>Dropdown Item 3</st-menu-item>
    <st-divider></st-divider>
    <st-menu-item type="checkbox" checked>Checkbox</st-menu-item>
    <st-menu-item disabled>Disabled</st-menu-item>
    <st-divider></st-divider>
    <st-menu-item>
      Prefix
      <st-icon slot="prefix" name="gift"></st-icon>
    </st-menu-item>
    <st-menu-item>
      Suffix Icon
      <st-icon slot="suffix" name="heart"></st-icon>
    </st-menu-item>
  </st-menu>
</st-dropdown>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StDropdown>
    <StButton slot="trigger" caret>
      Dropdown
    </StButton>
    <StMenu>
      <StMenuItem>Dropdown Item 1</StMenuItem>
      <StMenuItem>Dropdown Item 2</StMenuItem>
      <StMenuItem>Dropdown Item 3</StMenuItem>
      <StDivider />
      <StMenuItem type="checkbox" checked>
        Checkbox
      </StMenuItem>
      <StMenuItem disabled>Disabled</StMenuItem>
      <StDivider />
      <StMenuItem>
        Prefix
        <StIcon slot="prefix" name="gift" />
      </StMenuItem>
      <StMenuItem>
        Suffix Icon
        <StIcon slot="suffix" name="heart" />
      </StMenuItem>
    </StMenu>
  </StDropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`st-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html:preview
<div class="dropdown-selection">
  <st-dropdown>
    <st-button slot="trigger" caret>Edit</st-button>
    <st-menu>
      <st-menu-item value="cut">Cut</st-menu-item>
      <st-menu-item value="copy">Copy</st-menu-item>
      <st-menu-item value="paste">Paste</st-menu-item>
    </st-menu>
  </st-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('st-dropdown');

  dropdown.addEventListener('st-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <StDropdown>
      <StButton slot="trigger" caret>
        Edit
      </StButton>
      <StMenu onSlSelect={handleSelect}>
        <StMenuItem value="cut">Cut</StMenuItem>
        <StMenuItem value="copy">Copy</StMenuItem>
        <StMenuItem value="paste">Paste</StMenuItem>
      </StMenu>
    </StDropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html:preview
<div class="dropdown-selection-alt">
  <st-dropdown>
    <st-button slot="trigger" caret>Edit</st-button>
    <st-menu>
      <st-menu-item value="cut">Cut</st-menu-item>
      <st-menu-item value="copy">Copy</st-menu-item>
      <st-menu-item value="paste">Paste</st-menu-item>
    </st-menu>
  </st-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('st-menu-item[value="cut"]');
  const copy = container.querySelector('st-menu-item[value="copy"]');
  const paste = container.querySelector('st-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <StDropdown>
      <StButton slot="trigger" caret>
        Edit
      </StButton>
      <StMenu>
        <StMenuItem onClick={handleCut}>Cut</StMenuItem>
        <StMenuItem onClick={handleCopy}>Copy</StMenuItem>
        <StMenuItem onClick={handlePaste}>Paste</StMenuItem>
      </StMenu>
    </StDropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html:preview
<st-dropdown placement="top-start">
  <st-button slot="trigger" caret>Edit</st-button>
  <st-menu>
    <st-menu-item>Cut</st-menu-item>
    <st-menu-item>Copy</st-menu-item>
    <st-menu-item>Paste</st-menu-item>
    <st-divider></st-divider>
    <st-menu-item>Find</st-menu-item>
    <st-menu-item>Replace</st-menu-item>
  </st-menu>
</st-dropdown>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StDropdown placement="top-start">
    <StButton slot="trigger" caret>
      Edit
    </StButton>
    <StMenu>
      <StMenuItem>Cut</StMenuItem>
      <StMenuItem>Copy</StMenuItem>
      <StMenuItem>Paste</StMenuItem>
      <StDivider />
      <StMenuItem>Find</StMenuItem>
      <StMenuItem>Replace</StMenuItem>
    </StMenu>
  </StDropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html:preview
<st-dropdown distance="30">
  <st-button slot="trigger" caret>Edit</st-button>
  <st-menu>
    <st-menu-item>Cut</st-menu-item>
    <st-menu-item>Copy</st-menu-item>
    <st-menu-item>Paste</st-menu-item>
    <st-divider></st-divider>
    <st-menu-item>Find</st-menu-item>
    <st-menu-item>Replace</st-menu-item>
  </st-menu>
</st-dropdown>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StDropdown distance={30}>
    <StButton slot="trigger" caret>
      Edit
    </StButton>
    <StMenu>
      <StMenuItem>Cut</StMenuItem>
      <StMenuItem>Copy</StMenuItem>
      <StMenuItem>Paste</StMenuItem>
      <StDivider />
      <StMenuItem>Find</StMenuItem>
      <StMenuItem>Replace</StMenuItem>
    </StMenu>
  </StDropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html:preview
<st-dropdown skidding="30">
  <st-button slot="trigger" caret>Edit</st-button>
  <st-menu>
    <st-menu-item>Cut</st-menu-item>
    <st-menu-item>Copy</st-menu-item>
    <st-menu-item>Paste</st-menu-item>
    <st-divider></st-divider>
    <st-menu-item>Find</st-menu-item>
    <st-menu-item>Replace</st-menu-item>
  </st-menu>
</st-dropdown>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <StDropdown skidding={30}>
    <StButton slot="trigger" caret>
      Edit
    </StButton>
    <StMenu>
      <StMenuItem>Cut</StMenuItem>
      <StMenuItem>Copy</StMenuItem>
      <StMenuItem>Paste</StMenuItem>
      <StDivider />
      <StMenuItem>Find</StMenuItem>
      <StMenuItem>Replace</StMenuItem>
    </StMenu>
  </StDropdown>
);
```

### Submenus

To create a submenu, nest an `<st-menu slot="submenu">` element in a [menu item](/components/menu-item).

```html:preview
<st-dropdown>
  <st-button slot="trigger" caret>Edit</st-button>

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
</st-dropdown>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--st-panel-border-color);
    padding: var(--st-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <StDropdown>
      <StButton slot="trigger" caret>Edit</StButton>

      <StMenu style="max-width: 200px;">
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
    </StDropdown>
  </>
);
```

:::warning
As a UX best practice, avoid using more than one level of submenu when possible.
:::

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="dropdown-hoist">
  <st-dropdown>
    <st-button slot="trigger" caret>No Hoist</st-button>
    <st-menu>
      <st-menu-item>Item 1</st-menu-item>
      <st-menu-item>Item 2</st-menu-item>
      <st-menu-item>Item 3</st-menu-item>
    </st-menu>
  </st-dropdown>

  <st-dropdown hoist>
    <st-button slot="trigger" caret>Hoist</st-button>
    <st-menu>
      <st-menu-item>Item 1</st-menu-item>
      <st-menu-item>Item 2</st-menu-item>
      <st-menu-item>Item 3</st-menu-item>
    </st-menu>
  </st-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--st-panel-border-color);
    padding: var(--st-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StDivider from '@shoelace-style/shoelace/dist/react/divider';
import StDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import StMenu from '@shoelace-style/shoelace/dist/react/menu';
import StMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--st-panel-border-color);
    padding: var(--st-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <StDropdown>
        <StButton slot="trigger" caret>
          No Hoist
        </StButton>
        <StMenu>
          <StMenuItem>Item 1</StMenuItem>
          <StMenuItem>Item 2</StMenuItem>
          <StMenuItem>Item 3</StMenuItem>
        </StMenu>
      </StDropdown>

      <StDropdown hoist>
        <StButton slot="trigger" caret>
          Hoist
        </StButton>
        <StMenu>
          <StMenuItem>Item 1</StMenuItem>
          <StMenuItem>Item 2</StMenuItem>
          <StMenuItem>Item 3</StMenuItem>
        </StMenu>
      </StDropdown>
    </div>

    <style>{css}</style>
  </>
);
```
