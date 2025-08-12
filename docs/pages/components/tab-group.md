---
meta:
  title: Tab Group
  description: Tab groups organize content into a container that shows one section at a time.
layout: component
---

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

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

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html:preview
<st-tab-group placement="bottom">
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
  <StTabGroup placement="bottom">
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

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html:preview
<st-tab-group placement="start">
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
  <StTabGroup placement="start">
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

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html:preview
<st-tab-group placement="end">
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
  <StTabGroup placement="end">
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

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html:preview
<st-tab-group class="tabs-closable">
  <st-tab slot="nav" panel="general">General</st-tab>
  <st-tab slot="nav" panel="closable-1" closable>Closable 1</st-tab>
  <st-tab slot="nav" panel="closable-2" closable>Closable 2</st-tab>
  <st-tab slot="nav" panel="closable-3" closable>Closable 3</st-tab>

  <st-tab-panel name="general">This is the general tab panel.</st-tab-panel>
  <st-tab-panel name="closable-1">This is the first closable tab panel.</st-tab-panel>
  <st-tab-panel name="closable-2">This is the second closable tab panel.</st-tab-panel>
  <st-tab-panel name="closable-3">This is the third closable tab panel.</st-tab-panel>
</st-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('st-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`st-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx:react
import StTab from '@shoelace-style/shoelace/dist/react/tab';
import StTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import StTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('st-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <StTabGroup className="tabs-closable" onSlClose={handleClose}>
      <StTab slot="nav" panel="general">
        General
      </StTab>
      <StTab slot="nav" panel="closable-1" closable onSlClose={handleClose}>
        Closable 1
      </StTab>
      <StTab slot="nav" panel="closable-2" closable onSlClose={handleClose}>
        Closable 2
      </StTab>
      <StTab slot="nav" panel="closable-3" closable onSlClose={handleClose}>
        Closable 3
      </StTab>

      <StTabPanel name="general">This is the general tab panel.</StTabPanel>
      <StTabPanel name="closable-1">This is the first closable tab panel.</StTabPanel>
      <StTabPanel name="closable-2">This is the second closable tab panel.</StTabPanel>
      <StTabPanel name="closable-3">This is the third closable tab panel.</StTabPanel>
    </StTabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html:preview
<st-tab-group>
  <st-tab slot="nav" panel="tab-1">Tab 1</st-tab>
  <st-tab slot="nav" panel="tab-2">Tab 2</st-tab>
  <st-tab slot="nav" panel="tab-3">Tab 3</st-tab>
  <st-tab slot="nav" panel="tab-4">Tab 4</st-tab>
  <st-tab slot="nav" panel="tab-5">Tab 5</st-tab>
  <st-tab slot="nav" panel="tab-6">Tab 6</st-tab>
  <st-tab slot="nav" panel="tab-7">Tab 7</st-tab>
  <st-tab slot="nav" panel="tab-8">Tab 8</st-tab>
  <st-tab slot="nav" panel="tab-9">Tab 9</st-tab>
  <st-tab slot="nav" panel="tab-10">Tab 10</st-tab>
  <st-tab slot="nav" panel="tab-11">Tab 11</st-tab>
  <st-tab slot="nav" panel="tab-12">Tab 12</st-tab>
  <st-tab slot="nav" panel="tab-13">Tab 13</st-tab>
  <st-tab slot="nav" panel="tab-14">Tab 14</st-tab>
  <st-tab slot="nav" panel="tab-15">Tab 15</st-tab>
  <st-tab slot="nav" panel="tab-16">Tab 16</st-tab>
  <st-tab slot="nav" panel="tab-17">Tab 17</st-tab>
  <st-tab slot="nav" panel="tab-18">Tab 18</st-tab>
  <st-tab slot="nav" panel="tab-19">Tab 19</st-tab>
  <st-tab slot="nav" panel="tab-20">Tab 20</st-tab>

  <st-tab-panel name="tab-1">Tab panel 1</st-tab-panel>
  <st-tab-panel name="tab-2">Tab panel 2</st-tab-panel>
  <st-tab-panel name="tab-3">Tab panel 3</st-tab-panel>
  <st-tab-panel name="tab-4">Tab panel 4</st-tab-panel>
  <st-tab-panel name="tab-5">Tab panel 5</st-tab-panel>
  <st-tab-panel name="tab-6">Tab panel 6</st-tab-panel>
  <st-tab-panel name="tab-7">Tab panel 7</st-tab-panel>
  <st-tab-panel name="tab-8">Tab panel 8</st-tab-panel>
  <st-tab-panel name="tab-9">Tab panel 9</st-tab-panel>
  <st-tab-panel name="tab-10">Tab panel 10</st-tab-panel>
  <st-tab-panel name="tab-11">Tab panel 11</st-tab-panel>
  <st-tab-panel name="tab-12">Tab panel 12</st-tab-panel>
  <st-tab-panel name="tab-13">Tab panel 13</st-tab-panel>
  <st-tab-panel name="tab-14">Tab panel 14</st-tab-panel>
  <st-tab-panel name="tab-15">Tab panel 15</st-tab-panel>
  <st-tab-panel name="tab-16">Tab panel 16</st-tab-panel>
  <st-tab-panel name="tab-17">Tab panel 17</st-tab-panel>
  <st-tab-panel name="tab-18">Tab panel 18</st-tab-panel>
  <st-tab-panel name="tab-19">Tab panel 19</st-tab-panel>
  <st-tab-panel name="tab-20">Tab panel 20</st-tab-panel>
</st-tab-group>
```

```jsx:react
import StTab from '@shoelace-style/shoelace/dist/react/tab';
import StTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import StTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';

const App = () => (
  <StTabGroup>
    <StTab slot="nav" panel="tab-1">
      Tab 1
    </StTab>
    <StTab slot="nav" panel="tab-2">
      Tab 2
    </StTab>
    <StTab slot="nav" panel="tab-3">
      Tab 3
    </StTab>
    <StTab slot="nav" panel="tab-4">
      Tab 4
    </StTab>
    <StTab slot="nav" panel="tab-5">
      Tab 5
    </StTab>
    <StTab slot="nav" panel="tab-6">
      Tab 6
    </StTab>
    <StTab slot="nav" panel="tab-7">
      Tab 7
    </StTab>
    <StTab slot="nav" panel="tab-8">
      Tab 8
    </StTab>
    <StTab slot="nav" panel="tab-9">
      Tab 9
    </StTab>
    <StTab slot="nav" panel="tab-10">
      Tab 10
    </StTab>
    <StTab slot="nav" panel="tab-11">
      Tab 11
    </StTab>
    <StTab slot="nav" panel="tab-12">
      Tab 12
    </StTab>
    <StTab slot="nav" panel="tab-13">
      Tab 13
    </StTab>
    <StTab slot="nav" panel="tab-14">
      Tab 14
    </StTab>
    <StTab slot="nav" panel="tab-15">
      Tab 15
    </StTab>
    <StTab slot="nav" panel="tab-16">
      Tab 16
    </StTab>
    <StTab slot="nav" panel="tab-17">
      Tab 17
    </StTab>
    <StTab slot="nav" panel="tab-18">
      Tab 18
    </StTab>
    <StTab slot="nav" panel="tab-19">
      Tab 19
    </StTab>
    <StTab slot="nav" panel="tab-20">
      Tab 20
    </StTab>

    <StTabPanel name="tab-1">Tab panel 1</StTabPanel>
    <StTabPanel name="tab-2">Tab panel 2</StTabPanel>
    <StTabPanel name="tab-3">Tab panel 3</StTabPanel>
    <StTabPanel name="tab-4">Tab panel 4</StTabPanel>
    <StTabPanel name="tab-5">Tab panel 5</StTabPanel>
    <StTabPanel name="tab-6">Tab panel 6</StTabPanel>
    <StTabPanel name="tab-7">Tab panel 7</StTabPanel>
    <StTabPanel name="tab-8">Tab panel 8</StTabPanel>
    <StTabPanel name="tab-9">Tab panel 9</StTabPanel>
    <StTabPanel name="tab-10">Tab panel 10</StTabPanel>
    <StTabPanel name="tab-11">Tab panel 11</StTabPanel>
    <StTabPanel name="tab-12">Tab panel 12</StTabPanel>
    <StTabPanel name="tab-13">Tab panel 13</StTabPanel>
    <StTabPanel name="tab-14">Tab panel 14</StTabPanel>
    <StTabPanel name="tab-15">Tab panel 15</StTabPanel>
    <StTabPanel name="tab-16">Tab panel 16</StTabPanel>
    <StTabPanel name="tab-17">Tab panel 17</StTabPanel>
    <StTabPanel name="tab-18">Tab panel 18</StTabPanel>
    <StTabPanel name="tab-19">Tab panel 19</StTabPanel>
    <StTabPanel name="tab-20">Tab panel 20</StTabPanel>
  </StTabGroup>
);
```

### Fixed scroll controls

When tabs are scrolled all the way to one side, the scroll button on that side can't be clicked. Set the `fixed-scroll-controls` attribute to keep the effected button visible in that case.

```html:preview
<st-tab-group fixed-scroll-controls>
  <st-tab slot="nav" panel="tab-1">Tab 1</st-tab>
  <st-tab slot="nav" panel="tab-2">Tab 2</st-tab>
  <st-tab slot="nav" panel="tab-3">Tab 3</st-tab>
  <st-tab slot="nav" panel="tab-4">Tab 4</st-tab>
  <st-tab slot="nav" panel="tab-5">Tab 5</st-tab>
  <st-tab slot="nav" panel="tab-6">Tab 6</st-tab>
  <st-tab slot="nav" panel="tab-7">Tab 7</st-tab>
  <st-tab slot="nav" panel="tab-8">Tab 8</st-tab>
  <st-tab slot="nav" panel="tab-9">Tab 9</st-tab>
  <st-tab slot="nav" panel="tab-10">Tab 10</st-tab>
  <st-tab slot="nav" panel="tab-11">Tab 11</st-tab>
  <st-tab slot="nav" panel="tab-12">Tab 12</st-tab>
  <st-tab slot="nav" panel="tab-13">Tab 13</st-tab>
  <st-tab slot="nav" panel="tab-14">Tab 14</st-tab>
  <st-tab slot="nav" panel="tab-15">Tab 15</st-tab>
  <st-tab slot="nav" panel="tab-16">Tab 16</st-tab>
  <st-tab slot="nav" panel="tab-17">Tab 17</st-tab>
  <st-tab slot="nav" panel="tab-18">Tab 18</st-tab>
  <st-tab slot="nav" panel="tab-19">Tab 19</st-tab>
  <st-tab slot="nav" panel="tab-20">Tab 20</st-tab>

  <st-tab-panel name="tab-1">Tab panel 1</st-tab-panel>
  <st-tab-panel name="tab-2">Tab panel 2</st-tab-panel>
  <st-tab-panel name="tab-3">Tab panel 3</st-tab-panel>
  <st-tab-panel name="tab-4">Tab panel 4</st-tab-panel>
  <st-tab-panel name="tab-5">Tab panel 5</st-tab-panel>
  <st-tab-panel name="tab-6">Tab panel 6</st-tab-panel>
  <st-tab-panel name="tab-7">Tab panel 7</st-tab-panel>
  <st-tab-panel name="tab-8">Tab panel 8</st-tab-panel>
  <st-tab-panel name="tab-9">Tab panel 9</st-tab-panel>
  <st-tab-panel name="tab-10">Tab panel 10</st-tab-panel>
  <st-tab-panel name="tab-11">Tab panel 11</st-tab-panel>
  <st-tab-panel name="tab-12">Tab panel 12</st-tab-panel>
  <st-tab-panel name="tab-13">Tab panel 13</st-tab-panel>
  <st-tab-panel name="tab-14">Tab panel 14</st-tab-panel>
  <st-tab-panel name="tab-15">Tab panel 15</st-tab-panel>
  <st-tab-panel name="tab-16">Tab panel 16</st-tab-panel>
  <st-tab-panel name="tab-17">Tab panel 17</st-tab-panel>
  <st-tab-panel name="tab-18">Tab panel 18</st-tab-panel>
  <st-tab-panel name="tab-19">Tab panel 19</st-tab-panel>
  <st-tab-panel name="tab-20">Tab panel 20</st-tab-panel>
</st-tab-group>
```

```jsx:react
import StTab from '@shoelace-style/shoelace/dist/react/tab';
import StTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import StTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';

const App = () => (
  <StTabGroup auto-hide-scroll-buttons>
    <StTab slot="nav" panel="tab-1">
      Tab 1
    </StTab>
    <StTab slot="nav" panel="tab-2">
      Tab 2
    </StTab>
    <StTab slot="nav" panel="tab-3">
      Tab 3
    </StTab>
    <StTab slot="nav" panel="tab-4">
      Tab 4
    </StTab>
    <StTab slot="nav" panel="tab-5">
      Tab 5
    </StTab>
    <StTab slot="nav" panel="tab-6">
      Tab 6
    </StTab>
    <StTab slot="nav" panel="tab-7">
      Tab 7
    </StTab>
    <StTab slot="nav" panel="tab-8">
      Tab 8
    </StTab>
    <StTab slot="nav" panel="tab-9">
      Tab 9
    </StTab>
    <StTab slot="nav" panel="tab-10">
      Tab 10
    </StTab>
    <StTab slot="nav" panel="tab-11">
      Tab 11
    </StTab>
    <StTab slot="nav" panel="tab-12">
      Tab 12
    </StTab>
    <StTab slot="nav" panel="tab-13">
      Tab 13
    </StTab>
    <StTab slot="nav" panel="tab-14">
      Tab 14
    </StTab>
    <StTab slot="nav" panel="tab-15">
      Tab 15
    </StTab>
    <StTab slot="nav" panel="tab-16">
      Tab 16
    </StTab>
    <StTab slot="nav" panel="tab-17">
      Tab 17
    </StTab>
    <StTab slot="nav" panel="tab-18">
      Tab 18
    </StTab>
    <StTab slot="nav" panel="tab-19">
      Tab 19
    </StTab>
    <StTab slot="nav" panel="tab-20">
      Tab 20
    </StTab>

    <StTabPanel name="tab-1">Tab panel 1</StTabPanel>
    <StTabPanel name="tab-2">Tab panel 2</StTabPanel>
    <StTabPanel name="tab-3">Tab panel 3</StTabPanel>
    <StTabPanel name="tab-4">Tab panel 4</StTabPanel>
    <StTabPanel name="tab-5">Tab panel 5</StTabPanel>
    <StTabPanel name="tab-6">Tab panel 6</StTabPanel>
    <StTabPanel name="tab-7">Tab panel 7</StTabPanel>
    <StTabPanel name="tab-8">Tab panel 8</StTabPanel>
    <StTabPanel name="tab-9">Tab panel 9</StTabPanel>
    <StTabPanel name="tab-10">Tab panel 10</StTabPanel>
    <StTabPanel name="tab-11">Tab panel 11</StTabPanel>
    <StTabPanel name="tab-12">Tab panel 12</StTabPanel>
    <StTabPanel name="tab-13">Tab panel 13</StTabPanel>
    <StTabPanel name="tab-14">Tab panel 14</StTabPanel>
    <StTabPanel name="tab-15">Tab panel 15</StTabPanel>
    <StTabPanel name="tab-16">Tab panel 16</StTabPanel>
    <StTabPanel name="tab-17">Tab panel 17</StTabPanel>
    <StTabPanel name="tab-18">Tab panel 18</StTabPanel>
    <StTabPanel name="tab-19">Tab panel 19</StTabPanel>
    <StTabPanel name="tab-20">Tab panel 20</StTabPanel>
  </StTabGroup>
);
```

### Manual Activation

When focused, keyboard users can press [[Left]] or [[Right]] to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press [[Space]] or [[Enter]] before showing the tab panel (manual activation).

```html:preview
<st-tab-group activation="manual">
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
  <StTabGroup activation="manual">
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
