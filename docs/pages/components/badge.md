---
meta:
  title: Badge
  description: Badges are used to draw attention and display statuses or counts.
layout: component
---

```html:preview
<st-badge>Badge</st-badge>
```

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';

const App = () => <StBadge>Badge</StBadge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html:preview
<st-badge variant="primary">Primary</st-badge>
<st-badge variant="success">Success</st-badge>
<st-badge variant="neutral">Neutral</st-badge>
<st-badge variant="warning">Warning</st-badge>
<st-badge variant="danger">Danger</st-badge>
```

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';

const App = () => (
  <>
    <StBadge variant="primary">Primary</StBadge>
    <StBadge variant="success">Success</StBadge>
    <StBadge variant="neutral">Neutral</StBadge>
    <StBadge variant="warning">Warning</StBadge>
    <StBadge variant="danger">Danger</StBadge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html:preview
<st-badge variant="primary" pill>Primary</st-badge>
<st-badge variant="success" pill>Success</st-badge>
<st-badge variant="neutral" pill>Neutral</st-badge>
<st-badge variant="warning" pill>Warning</st-badge>
<st-badge variant="danger" pill>Danger</st-badge>
```

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';

const App = () => (
  <>
    <StBadge variant="primary" pill>
      Primary
    </StBadge>
    <StBadge variant="success" pill>
      Success
    </StBadge>
    <StBadge variant="neutral" pill>
      Neutral
    </StBadge>
    <StBadge variant="warning" pill>
      Warning
    </StBadge>
    <StBadge variant="danger" pill>
      Danger
    </StBadge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html:preview
<div class="badge-pulse">
  <st-badge variant="primary" pill pulse>1</st-badge>
  <st-badge variant="success" pill pulse>1</st-badge>
  <st-badge variant="neutral" pill pulse>1</st-badge>
  <st-badge variant="warning" pill pulse>1</st-badge>
  <st-badge variant="danger" pill pulse>1</st-badge>
</div>

<style>
  .badge-pulse st-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';

const css = `
  .badge-pulse st-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <StBadge variant="primary" pill pulse>
        1
      </StBadge>
      <StBadge variant="success" pill pulse>
        1
      </StBadge>
      <StBadge variant="neutral" pill pulse>
        1
      </StBadge>
      <StBadge variant="warning" pill pulse>
        1
      </StBadge>
      <StBadge variant="danger" pill pulse>
        1
      </StBadge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html:preview
<st-button>
  Requests
  <st-badge pill>30</st-badge>
</st-button>

<st-button style="margin-inline-start: 1rem;">
  Warnings
  <st-badge variant="warning" pill>8</st-badge>
</st-button>

<st-button style="margin-inline-start: 1rem;">
  Errors
  <st-badge variant="danger" pill>6</st-badge>
</st-button>
```

{% raw %}

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';
import SlButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => (
  <>
    <SlButton>
      Requests
      <StBadge pill>30</StBadge>
    </SlButton>

    <SlButton style={{ marginInlineStart: '1rem' }}>
      Warnings
      <StBadge variant="warning" pill>
        8
      </StBadge>
    </SlButton>

    <SlButton style={{ marginInlineStart: '1rem' }}>
      Errors
      <StBadge variant="danger" pill>
        6
      </StBadge>
    </SlButton>
  </>
);
```

{% endraw %}

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html:preview
<st-menu style="max-width: 240px;">
  <st-menu-label>Messages</st-menu-label>
  <st-menu-item>Comments <st-badge slot="suffix" variant="neutral" pill>4</st-badge></st-menu-item>
  <st-menu-item>Replies <st-badge slot="suffix" variant="neutral" pill>12</st-badge></st-menu-item>
</st-menu>
```

{% raw %}

```jsx:react
import StBadge from '@shoelace-style/shoelace/dist/react/badge';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlMenu from '@shoelace-style/shoelace/dist/react/menu';
import SlMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';
import SlMenuLabel from '@shoelace-style/shoelace/dist/react/menu-label';

const App = () => (
  <SlMenu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--st-panel-border-color)',
      borderRadius: 'var(--st-border-radius-medium)'
    }}
  >
    <SlMenuLabel>Messages</SlMenuLabel>
    <SlMenuItem>
      Comments
      <StBadge slot="suffix" variant="neutral" pill>
        4
      </StBadge>
    </SlMenuItem>
    <SlMenuItem>
      Replies
      <StBadge slot="suffix" variant="neutral" pill>
        12
      </StBadge>
    </SlMenuItem>
  </SlMenu>
);
```

{% endraw %}
