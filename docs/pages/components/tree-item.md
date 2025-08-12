---
meta:
  title: Tree Item
  description: A tree item serves as a hierarchical node that lives inside a tree.
layout: component
---

```html:preview
<st-tree>
  <st-tree-item>
    Item 1
    <st-tree-item>Item A</st-tree-item>
    <st-tree-item>Item B</st-tree-item>
    <st-tree-item>Item C</st-tree-item>
  </st-tree-item>
  <st-tree-item>Item 2</st-tree-item>
  <st-tree-item>Item 3</st-tree-item>
</st-tree>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree>
    <StTreeItem>
      Item 1
      <StTreeItem>Item A</StTreeItem>
      <StTreeItem>Item B</StTreeItem>
      <StTreeItem>Item C</StTreeItem>
    </StTreeItem>
    <StTreeItem>Item 2</StTreeItem>
    <StTreeItem>Item 3</StTreeItem>
  </StTree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html:preview
<st-tree>
  <st-tree-item>
    Item 1
    <st-tree-item>
      Item A
      <st-tree-item>Item Z</st-tree-item>
      <st-tree-item>Item Y</st-tree-item>
      <st-tree-item>Item X</st-tree-item>
    </st-tree-item>
    <st-tree-item>Item B</st-tree-item>
    <st-tree-item>Item C</st-tree-item>
  </st-tree-item>
  <st-tree-item>Item 2</st-tree-item>
  <st-tree-item>Item 3</st-tree-item>
</st-tree>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree>
    <StTreeItem>
      Item 1
      <StTreeItem>
        Item A
        <StTreeItem>Item Z</StTreeItem>
        <StTreeItem>Item Y</StTreeItem>
        <StTreeItem>Item X</StTreeItem>
      </StTreeItem>
      <StTreeItem>Item B</StTreeItem>
      <StTreeItem>Item C</StTreeItem>
    </StTreeItem>
    <StTreeItem>Item 2</StTreeItem>
    <StTreeItem>Item 3</StTreeItem>
  </StTree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html:preview
<st-tree>
  <st-tree-item selected>
    Item 1
    <st-tree-item>Item A</st-tree-item>
    <st-tree-item>Item B</st-tree-item>
    <st-tree-item>Item C</st-tree-item>
  </st-tree-item>
  <st-tree-item>Item 2</st-tree-item>
  <st-tree-item>Item 3</st-tree-item>
</st-tree>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree>
    <StTreeItem selected>
      Item 1
      <StTreeItem>Item A</StTreeItem>
      <StTreeItem>Item B</StTreeItem>
      <StTreeItem>Item C</StTreeItem>
    </StTreeItem>
    <StTreeItem>Item 2</StTreeItem>
    <StTreeItem>Item 3</StTreeItem>
  </StTree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html:preview
<st-tree>
  <st-tree-item expanded>
    Item 1
    <st-tree-item expanded>
      Item A
      <st-tree-item>Item Z</st-tree-item>
      <st-tree-item>Item Y</st-tree-item>
      <st-tree-item>Item X</st-tree-item>
    </st-tree-item>
    <st-tree-item>Item B</st-tree-item>
    <st-tree-item>Item C</st-tree-item>
  </st-tree-item>
  <st-tree-item>Item 2</st-tree-item>
  <st-tree-item>Item 3</st-tree-item>
</st-tree>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree>
    <StTreeItem expanded>
      Item 1
      <StTreeItem expanded>
        Item A
        <StTreeItem>Item Z</StTreeItem>
        <StTreeItem>Item Y</StTreeItem>
        <StTreeItem>Item X</StTreeItem>
      </StTreeItem>
      <StTreeItem>Item B</StTreeItem>
      <StTreeItem>Item C</StTreeItem>
    </StTreeItem>
    <StTreeItem>Item 2</StTreeItem>
    <StTreeItem>Item 3</StTreeItem>
  </StTree>
);
```
