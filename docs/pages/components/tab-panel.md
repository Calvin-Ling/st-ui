---
meta:
  title: Tab Panel
  description: Tab panels are used inside tab groups to display tabbed content.
layout: component
---

```html:preview
<st-tab-group>
  <st-tab slot="nav" panel="general">General</st-tab>
  <st-tab slot="nav" panel="custom">Custom</st-tab>
  <st-tab slot="nav" panel="advanced">Advanced</st-tab>
  <st-tab slot="nav" panel="disabled" disabled>Disabled</st-tab>

  <st-tab-panel name="general">This is the general tab panel.</st-tab-panel>
  <st-tab-panel name="custom">This is the custom tab panel.</st-tab-panel>
  <st-tab-panel name="advanced">This is the advanced tab panel.</st-tab-panel>
  <st-tab-panel name="disabled">This is a disabled tab panel.</st-tab-panel>
</st-tab-group>
```

```jsx:react
import StTab from '@shoelace-style/shoelace/dist/react/tab';
import StTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import StTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';

const App = () => (
  <StTabGroup>
    <StTab slot="nav" panel="general">
      General
    </StTab>
    <StTab slot="nav" panel="custom">
      Custom
    </StTab>
    <StTab slot="nav" panel="advanced">
      Advanced
    </StTab>
    <StTab slot="nav" panel="disabled" disabled>
      Disabled
    </StTab>

    <StTabPanel name="general">This is the general tab panel.</StTabPanel>
    <StTabPanel name="custom">This is the custom tab panel.</StTabPanel>
    <StTabPanel name="advanced">This is the advanced tab panel.</StTabPanel>
    <StTabPanel name="disabled">This is a disabled tab panel.</StTabPanel>
  </StTabGroup>
);
```

:::tip
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::
