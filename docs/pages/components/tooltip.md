---
meta:
  title: Tooltip
  description: Tooltips display additional information based on a specific action.
layout: component
---

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html:preview
<st-tooltip content="This is a tooltip">
  <st-button>Hover Me</st-button>
</st-tooltip>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <StTooltip content="This is a tooltip">
    <StButton>Hover Me</StButton>
  </StTooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html:preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <st-tooltip content="top-start" placement="top-start">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="top" placement="top">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="top-end" placement="top-end">
      <st-button></st-button>
    </st-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <st-tooltip content="left-start" placement="left-start">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="right-start" placement="right-start">
      <st-button></st-button>
    </st-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <st-tooltip content="left" placement="left">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="right" placement="right">
      <st-button></st-button>
    </st-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <st-tooltip content="left-end" placement="left-end">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="right-end" placement="right-end">
      <st-button></st-button>
    </st-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <st-tooltip content="bottom-start" placement="bottom-start">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="bottom" placement="bottom">
      <st-button></st-button>
    </st-tooltip>

    <st-tooltip content="bottom-end" placement="bottom-end">
      <st-button></st-button>
    </st-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example st-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) st-tooltip:first-child st-button,
  .tooltip-placement-example-row:nth-child(5) st-tooltip:first-child st-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) st-tooltip:nth-child(2) st-button,
  .tooltip-placement-example-row:nth-child(3) st-tooltip:nth-child(2) st-button,
  .tooltip-placement-example-row:nth-child(4) st-tooltip:nth-child(2) st-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example st-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) st-tooltip:first-child st-button,
  .tooltip-placement-example-row:nth-child(5) st-tooltip:first-child st-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) st-tooltip:nth-child(2) st-button,
  .tooltip-placement-example-row:nth-child(3) st-tooltip:nth-child(2) st-button,
  .tooltip-placement-example-row:nth-child(4) st-tooltip:nth-child(2) st-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <StTooltip content="top-start" placement="top-start">
          <StButton />
        </StTooltip>

        <StTooltip content="top" placement="top">
          <StButton />
        </StTooltip>

        <StTooltip content="top-end" placement="top-end">
          <StButton />
        </StTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <StTooltip content="left-start" placement="left-start">
          <StButton />
        </StTooltip>

        <StTooltip content="right-start" placement="right-start">
          <StButton />
        </StTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <StTooltip content="left" placement="left">
          <StButton />
        </StTooltip>

        <StTooltip content="right" placement="right">
          <StButton />
        </StTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <StTooltip content="left-end" placement="left-end">
          <StButton />
        </StTooltip>

        <StTooltip content="right-end" placement="right-end">
          <StButton />
        </StTooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <StTooltip content="bottom-start" placement="bottom-start">
          <StButton />
        </StTooltip>

        <StTooltip content="bottom" placement="bottom">
          <StButton />
        </StTooltip>

        <StTooltip content="bottom-end" placement="bottom-end">
          <StButton />
        </StTooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html:preview
<st-tooltip content="Click again to dismiss" trigger="click">
  <st-button>Click to Toggle</st-button>
</st-tooltip>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <StTooltip content="Click again to dismiss" trigger="click">
    <StButton>Click to Toggle</StButton>
  </StTooltip>
);
```

### Manual Trigger

Tooltips can be controlled programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html:preview
<st-button style="margin-right: 4rem;">Toggle Manually</st-button>

<st-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <st-avatar label="User"></st-avatar>
</st-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

{% raw %}

```jsx:react
import { useState } from 'react';
import SlAvatar from '@shoelace-style/shoelace/dist/react/avatar';
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StButton style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </StButton>

      <StTooltip open={open} content="This is an avatar" trigger="manual">
        <SlAvatar />
      </StTooltip>
    </>
  );
};
```

{% endraw %}

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--st-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html:preview
<st-tooltip content="This is a tooltip" style="--st-tooltip-arrow-size: 0;">
  <st-button>No Arrow</st-button>
</st-tooltip>
```

{% raw %}

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <div style={{ '--st-tooltip-arrow-size': '0' }}>
    <StTooltip content="This is a tooltip">
      <StButton>Above</StButton>
    </StTooltip>

    <StTooltip content="This is a tooltip" placement="bottom">
      <StButton>Below</StButton>
    </StTooltip>
  </div>
);
```

{% endraw %}

To override it globally, set it in a root block in your stylesheet after the Shoelace stylesheet is loaded.

```css
:root {
  --st-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html:preview
<st-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <st-button>Hover me</st-button>
</st-tooltip>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <StTooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <StButton>Hover Me</StButton>
  </StTooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html:preview
<st-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <st-button>Hover me</st-button>
</st-tooltip>
```

{% raw %}

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <StTooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <StButton>Hover Me</StButton>
  </StTooltip>
);
```

{% endraw %}

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block), which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html:preview
<div class="tooltip-hoist">
  <st-tooltip content="This is a tooltip">
    <st-button>No Hoist</st-button>
  </st-tooltip>

  <st-tooltip content="This is a tooltip" hoist>
    <st-button>Hoist</st-button>
  </st-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--st-panel-border-color);
    overflow: hidden;
    padding: var(--st-spacing-medium);
  }
</style>
```

```jsx:react
import StButton from '@shoelace-style/shoelace/dist/react/button';
import StTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--st-panel-border-color);
    overflow: hidden;
    padding: var(--st-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <StTooltip content="This is a tooltip">
        <StButton>No Hoist</StButton>
      </StTooltip>

      <StTooltip content="This is a tooltip" hoist>
        <StButton>Hoist</StButton>
      </StTooltip>
    </div>

    <style>{css}</style>
  </>
);
```
