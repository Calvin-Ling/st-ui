---
meta:
  title: Tree
  description: Trees allow you to display a hierarchical list of selectable tree items. Items with children can be expanded and collapsed as desired by the user.
layout: component
---

```html:preview
<st-tree>
  <st-tree-item>
    Deciduous
    <st-tree-item>Birch</st-tree-item>
    <st-tree-item>
      Maple
      <st-tree-item>Field maple</st-tree-item>
      <st-tree-item>Red maple</st-tree-item>
      <st-tree-item>Sugar maple</st-tree-item>
    </st-tree-item>
    <st-tree-item>Oak</st-tree-item>
  </st-tree-item>

  <st-tree-item>
    Coniferous
    <st-tree-item>Cedar</st-tree-item>
    <st-tree-item>Pine</st-tree-item>
    <st-tree-item>Spruce</st-tree-item>
  </st-tree-item>

  <st-tree-item>
    Non-trees
    <st-tree-item>Bamboo</st-tree-item>
    <st-tree-item>Cactus</st-tree-item>
    <st-tree-item>Fern</st-tree-item>
  </st-tree-item>
</st-tree>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree>
    <StTreeItem>
      Deciduous
      <StTreeItem>Birch</StTreeItem>
      <StTreeItem>
        Maple
        <StTreeItem>Field maple</StTreeItem>
        <StTreeItem>Red maple</StTreeItem>
        <StTreeItem>Sugar maple</StTreeItem>
      </StTreeItem>
      <StTreeItem>Oak</StTreeItem>
    </StTreeItem>

    <StTreeItem>
      Coniferous
      <StTreeItem>Cedar</StTreeItem>
      <StTreeItem>Pine</StTreeItem>
      <StTreeItem>Spruce</StTreeItem>
    </StTreeItem>

    <StTreeItem>
      Non-trees
      <StTreeItem>Bamboo</StTreeItem>
      <StTreeItem>Cactus</StTreeItem>
      <StTreeItem>Fern</StTreeItem>
    </StTreeItem>
  </StTree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html:preview
<st-select id="selection-mode" value="single" label="Selection">
  <st-option value="single">Single</st-option>
  <st-option value="multiple">Multiple</st-option>
  <st-option value="leaf">Leaf</st-option>
</st-select>

<br />

<st-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('st-change', () => {
    tree.querySelectorAll('st-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <SlSelect label="Selection" value={selection} onSlChange={event => setSelection(event.target.value)}>
        <SlMenuItem value="single">single</SlMenuItem>
        <SlMenuItem value="multiple">multiple</SlMenuItem>
        <SlMenuItem value="leaf">leaf</SlMenuItem>
      </SlSelect>

      <br />

      <StTree selection={selection}>
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
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html:preview
<st-tree class="tree-with-lines">
  <st-tree-item expanded>
    Deciduous
    <st-tree-item>Birch</st-tree-item>
    <st-tree-item expanded>
      Maple
      <st-tree-item>Field maple</st-tree-item>
      <st-tree-item>Red maple</st-tree-item>
      <st-tree-item>Sugar maple</st-tree-item>
    </st-tree-item>
    <st-tree-item>Oak</st-tree-item>
  </st-tree-item>

  <st-tree-item>
    Coniferous
    <st-tree-item>Cedar</st-tree-item>
    <st-tree-item>Pine</st-tree-item>
    <st-tree-item>Spruce</st-tree-item>
  </st-tree-item>

  <st-tree-item>
    Non-trees
    <st-tree-item>Bamboo</st-tree-item>
    <st-tree-item>Cactus</st-tree-item>
    <st-tree-item>Fern</st-tree-item>
  </st-tree-item>
</st-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

{% raw %}

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <StTreeItem expanded>
      Deciduous
      <StTreeItem>Birch</StTreeItem>
      <StTreeItem expanded>
        Maple
        <StTreeItem>Field maple</StTreeItem>
        <StTreeItem>Red maple</StTreeItem>
        <StTreeItem>Sugar maple</StTreeItem>
      </StTreeItem>
      <StTreeItem>Oak</StTreeItem>
    </StTreeItem>

    <StTreeItem>
      Coniferous
      <StTreeItem>Cedar</StTreeItem>
      <StTreeItem>Pine</StTreeItem>
      <StTreeItem>Spruce</StTreeItem>
    </StTreeItem>

    <StTreeItem>
      Non-trees
      <StTreeItem>Bamboo</StTreeItem>
      <StTreeItem>Cactus</StTreeItem>
      <StTreeItem>Fern</StTreeItem>
    </StTreeItem>
  </StTree>
);
```

{% endraw %}

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `st-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html:preview
<st-tree>
  <st-tree-item lazy>Available Trees</st-tree-item>
</st-tree>

<script type="module">
  const lazyItem = document.querySelector('st-tree-item[lazy]');

  lazyItem.addEventListener('st-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('st-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <StTree>
      <StTreeItem lazy={lazy} onSlLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <StTreeItem>{item}</StTreeItem>
        ))}
      </StTreeItem>
    </StTree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html:preview
<st-tree class="custom-icons">
  <st-icon name="plus-square" slot="expand-icon"></st-icon>
  <st-icon name="dash-square" slot="collapse-icon"></st-icon>

  <st-tree-item>
    Deciduous
    <st-tree-item>Birch</st-tree-item>
    <st-tree-item>
      Maple
      <st-tree-item>Field maple</st-tree-item>
      <st-tree-item>Red maple</st-tree-item>
      <st-tree-item>Sugar maple</st-tree-item>
    </st-tree-item>
    <st-tree-item>Oak</st-tree-item>
  </st-tree-item>

  <st-tree-item>
    Coniferous
    <st-tree-item>Cedar</st-tree-item>
    <st-tree-item>Pine</st-tree-item>
    <st-tree-item>Spruce</st-tree-item>
  </st-tree-item>

  <st-tree-item>
    Non-trees
    <st-tree-item>Bamboo</st-tree-item>
    <st-tree-item>Cactus</st-tree-item>
    <st-tree-item>Fern</st-tree-item>
  </st-tree-item>
</st-tree>

<style>
  .custom-icons st-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx:react
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => (
  <StTree>
    <StIcon name="plus-square" slot="expand-icon"></StIcon>
    <StIcon name="dash-square" slot="collapse-icon"></StIcon>

    <StTreeItem>
      Deciduous
      <StTreeItem>Birch</StTreeItem>
      <StTreeItem>
        Maple
        <StTreeItem>Field maple</StTreeItem>
        <StTreeItem>Red maple</StTreeItem>
        <StTreeItem>Sugar maple</StTreeItem>
      </StTreeItem>
      <StTreeItem>Oak</StTreeItem>
    </StTreeItem>

    <StTreeItem>
      Coniferous
      <StTreeItem>Cedar</StTreeItem>
      <StTreeItem>Pine</StTreeItem>
      <StTreeItem>Spruce</StTreeItem>
    </StTreeItem>

    <StTreeItem>
      Non-trees
      <StTreeItem>Bamboo</StTreeItem>
      <StTreeItem>Cactus</StTreeItem>
      <StTreeItem>Fern</StTreeItem>
    </StTreeItem>
  </StTree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html:preview
<st-tree class="tree-with-icons">
  <st-tree-item expanded>
    <st-icon name="folder"></st-icon>
    Documents

    <st-tree-item>
      <st-icon name="folder"> </st-icon>
      Photos
      <st-tree-item>
        <st-icon name="image"></st-icon>
        birds.jpg
      </st-tree-item>
      <st-tree-item>
        <st-icon name="image"></st-icon>
        kitten.jpg
      </st-tree-item>
      <st-tree-item>
        <st-icon name="image"></st-icon>
        puppy.jpg
      </st-tree-item>
    </st-tree-item>

    <st-tree-item>
      <st-icon name="folder"></st-icon>
      Writing
      <st-tree-item>
        <st-icon name="file"></st-icon>
        draft.txt
      </st-tree-item>
      <st-tree-item>
        <st-icon name="file-pdf"></st-icon>
        final.pdf
      </st-tree-item>
      <st-tree-item>
        <st-icon name="file-bar-graph"></st-icon>
        sales.xls
      </st-tree-item>
    </st-tree-item>
  </st-tree-item>
</st-tree>
```

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';
import StTree from '@shoelace-style/shoelace/dist/react/tree';
import StTreeItem from '@shoelace-style/shoelace/dist/react/tree-item';

const App = () => {
  return (
    <StTree class="tree-with-icons">
      <StTreeItem expanded>
        <StIcon name="folder" />
        Root
        <StTreeItem>
          <StIcon name="folder" />
          Folder 1<StTreeItem>
            <StIcon name="files" />
            File 1 - 1
          </StTreeItem>
          <StTreeItem disabled>
            <StIcon name="files" />
            File 1 - 2
          </StTreeItem>
          <StTreeItem>
            <StIcon name="files" />
            File 1 - 3
          </StTreeItem>
        </StTreeItem>
        <StTreeItem>
          <StIcon name="files" />
          Folder 2<StTreeItem>
            <StIcon name="files" />
            File 2 - 1
          </StTreeItem>
          <StTreeItem>
            <StIcon name="files" />
            File 2 - 2
          </StTreeItem>
        </StTreeItem>
        <StTreeItem>
          <StIcon name="files" />
          File 1
        </StTreeItem>
      </StTreeItem>
    </StTree>
  );
};
```
