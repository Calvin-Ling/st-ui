---
meta:
  title: Icon
  description: Icons are symbols that can be used to represent various options within an application.
layout: component
---

Shoelace comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

:::tip
Depending on how you're loading Shoelace, you may need to copy icon assets and/or [set the base path](/getting-started/installation/#setting-the-base-path) so Shoelace knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.
:::

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<st-icon name="icon-name-here"></st-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <st-input placeholder="Search Icons" clearable>
      <st-icon slot="prefix" name="search"></st-icon>
    </st-input>
    <st-select value="outline">
      <st-option value="outline">Outlined</st-option>
      <st-option value="fill">Filled</st-option>
      <st-option value="all">All icons</st-option>
    </st-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<st-icon>` element or an ancestor to change the color.

```html:preview
<div style="color: #4a90e2;">
  <st-icon name="exclamation-triangle"></st-icon>
  <st-icon name="archive"></st-icon>
  <st-icon name="battery-charging"></st-icon>
  <st-icon name="bell"></st-icon>
</div>
<div style="color: #9013fe;">
  <st-icon name="clock"></st-icon>
  <st-icon name="cloud"></st-icon>
  <st-icon name="download"></st-icon>
  <st-icon name="file-earmark"></st-icon>
</div>
<div style="color: #417505;">
  <st-icon name="flag"></st-icon>
  <st-icon name="heart"></st-icon>
  <st-icon name="image"></st-icon>
  <st-icon name="lightning"></st-icon>
</div>
<div style="color: #f5a623;">
  <st-icon name="mic"></st-icon>
  <st-icon name="search"></st-icon>
  <st-icon name="star"></st-icon>
  <st-icon name="trash"></st-icon>
</div>
```

{% raw %}

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <StIcon name="exclamation-triangle"></StIcon>
      <StIcon name="archive"></StIcon>
      <StIcon name="battery-charging"></StIcon>
      <StIcon name="bell"></StIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <StIcon name="clock"></StIcon>
      <StIcon name="cloud"></StIcon>
      <StIcon name="download"></StIcon>
      <StIcon name="file-earmark"></StIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <StIcon name="flag"></StIcon>
      <StIcon name="heart"></StIcon>
      <StIcon name="image"></StIcon>
      <StIcon name="lightning"></StIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <StIcon name="mic"></StIcon>
      <StIcon name="search"></StIcon>
      <StIcon name="star"></StIcon>
      <StIcon name="trash"></StIcon>
    </div>
  </>
);
```

{% endraw %}

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html:preview
<div style="font-size: 32px;">
  <st-icon name="exclamation-triangle"></st-icon>
  <st-icon name="archive"></st-icon>
  <st-icon name="battery-charging"></st-icon>
  <st-icon name="bell"></st-icon>
  <st-icon name="clock"></st-icon>
  <st-icon name="cloud"></st-icon>
  <st-icon name="download"></st-icon>
  <st-icon name="file-earmark"></st-icon>
  <st-icon name="flag"></st-icon>
  <st-icon name="heart"></st-icon>
  <st-icon name="image"></st-icon>
  <st-icon name="lightning"></st-icon>
  <st-icon name="mic"></st-icon>
  <st-icon name="search"></st-icon>
  <st-icon name="star"></st-icon>
  <st-icon name="trash"></st-icon>
</div>
```

{% raw %}

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <StIcon name="exclamation-triangle" />
    <StIcon name="archive" />
    <StIcon name="battery-charging" />
    <StIcon name="bell" />
    <StIcon name="clock" />
    <StIcon name="cloud" />
    <StIcon name="download" />
    <StIcon name="file-earmark" />
    <StIcon name="flag" />
    <StIcon name="heart" />
    <StIcon name="image" />
    <StIcon name="lightning" />
    <StIcon name="mic" />
    <StIcon name="search" />
    <StIcon name="star" />
    <StIcon name="trash" />
  </div>
);
```

{% endraw %}

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html:preview
<st-icon name="star-fill" label="Add to favorites"></st-icon>
```

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => <StIcon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html:preview
<st-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 8rem;"></st-icon>
```

{% raw %}

```jsx:react
import StIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => <StIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></StIcon>;
```

{% endraw %}

## Icon Libraries

You can register additional icons to use with the `<st-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Shoelace ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Shoelace components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<st-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<st-icon library="my-icons" name="smile"></st-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="boxicons" name="bx-bot"></st-icon>
  <st-icon library="boxicons" name="bx-cookie"></st-icon>
  <st-icon library="boxicons" name="bx-joystick"></st-icon>
  <st-icon library="boxicons" name="bx-save"></st-icon>
  <st-icon library="boxicons" name="bx-server"></st-icon>
  <st-icon library="boxicons" name="bx-wine"></st-icon>
  <br />
  <st-icon library="boxicons" name="bxs-bot"></st-icon>
  <st-icon library="boxicons" name="bxs-cookie"></st-icon>
  <st-icon library="boxicons" name="bxs-joystick"></st-icon>
  <st-icon library="boxicons" name="bxs-save"></st-icon>
  <st-icon library="boxicons" name="bxs-server"></st-icon>
  <st-icon library="boxicons" name="bxs-wine"></st-icon>
  <br />
  <st-icon library="boxicons" name="bxl-apple"></st-icon>
  <st-icon library="boxicons" name="bxl-chrome"></st-icon>
  <st-icon library="boxicons" name="bxl-edge"></st-icon>
  <st-icon library="boxicons" name="bxl-firefox"></st-icon>
  <st-icon library="boxicons" name="bxl-opera"></st-icon>
  <st-icon library="boxicons" name="bxl-microsoft"></st-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html:preview
<div style="font-size: 24px;">
  <st-icon library="lucide" name="feather"></st-icon>
  <st-icon library="lucide" name="pie-chart"></st-icon>
  <st-icon library="lucide" name="settings"></st-icon>
  <st-icon library="lucide" name="map-pin"></st-icon>
  <st-icon library="lucide" name="printer"></st-icon>
  <st-icon library="lucide" name="shopping-cart"></st-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="fa" name="far-bell"></st-icon>
  <st-icon library="fa" name="far-comment"></st-icon>
  <st-icon library="fa" name="far-hand-point-right"></st-icon>
  <st-icon library="fa" name="far-hdd"></st-icon>
  <st-icon library="fa" name="far-heart"></st-icon>
  <st-icon library="fa" name="far-star"></st-icon>
  <br />
  <st-icon library="fa" name="fas-archive"></st-icon>
  <st-icon library="fa" name="fas-book"></st-icon>
  <st-icon library="fa" name="fas-chess-knight"></st-icon>
  <st-icon library="fa" name="fas-dice"></st-icon>
  <st-icon library="fa" name="fas-pizza-slice"></st-icon>
  <st-icon library="fa" name="fas-scroll"></st-icon>
  <br />
  <st-icon library="fa" name="fab-apple"></st-icon>
  <st-icon library="fa" name="fab-chrome"></st-icon>
  <st-icon library="fa" name="fab-edge"></st-icon>
  <st-icon library="fa" name="fab-firefox"></st-icon>
  <st-icon library="fa" name="fab-opera"></st-icon>
  <st-icon library="fa" name="fab-microsoft"></st-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="heroicons" name="chat-bubble-left"></st-icon>
  <st-icon library="heroicons" name="cloud"></st-icon>
  <st-icon library="heroicons" name="cog"></st-icon>
  <st-icon library="heroicons" name="document-text"></st-icon>
  <st-icon library="heroicons" name="gift"></st-icon>
  <st-icon library="heroicons" name="speaker-wave"></st-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="iconoir" name="check-circled-outline"></st-icon>
  <st-icon library="iconoir" name="drawer"></st-icon>
  <st-icon library="iconoir" name="keyframes"></st-icon>
  <st-icon library="iconoir" name="headset-help"></st-icon>
  <st-icon library="iconoir" name="color-picker"></st-icon>
  <st-icon library="iconoir" name="wifi"></st-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="ionicons" name="alarm"></st-icon>
  <st-icon library="ionicons" name="american-football"></st-icon>
  <st-icon library="ionicons" name="bug"></st-icon>
  <st-icon library="ionicons" name="chatbubble"></st-icon>
  <st-icon library="ionicons" name="settings"></st-icon>
  <st-icon library="ionicons" name="warning"></st-icon>
  <br />
  <st-icon library="ionicons" name="alarm-outline"></st-icon>
  <st-icon library="ionicons" name="american-football-outline"></st-icon>
  <st-icon library="ionicons" name="bug-outline"></st-icon>
  <st-icon library="ionicons" name="chatbubble-outline"></st-icon>
  <st-icon library="ionicons" name="settings-outline"></st-icon>
  <st-icon library="ionicons" name="warning-outline"></st-icon>
  <br />
  <st-icon library="ionicons" name="alarm-sharp"></st-icon>
  <st-icon library="ionicons" name="american-football-sharp"></st-icon>
  <st-icon library="ionicons" name="bug-sharp"></st-icon>
  <st-icon library="ionicons" name="chatbubble-sharp"></st-icon>
  <st-icon library="ionicons" name="settings-sharp"></st-icon>
  <st-icon library="ionicons" name="warning-sharp"></st-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="jam" name="calendar"></st-icon>
  <st-icon library="jam" name="camera"></st-icon>
  <st-icon library="jam" name="filter"></st-icon>
  <st-icon library="jam" name="leaf"></st-icon>
  <st-icon library="jam" name="picture"></st-icon>
  <st-icon library="jam" name="set-square"></st-icon>
  <br />
  <st-icon library="jam" name="calendar-f"></st-icon>
  <st-icon library="jam" name="camera-f"></st-icon>
  <st-icon library="jam" name="filter-f"></st-icon>
  <st-icon library="jam" name="leaf-f"></st-icon>
  <st-icon library="jam" name="picture-f"></st-icon>
  <st-icon library="jam" name="set-square-f"></st-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="material" name="notifications"></st-icon>
  <st-icon library="material" name="email"></st-icon>
  <st-icon library="material" name="delete"></st-icon>
  <st-icon library="material" name="volume_up"></st-icon>
  <st-icon library="material" name="settings"></st-icon>
  <st-icon library="material" name="shopping_basket"></st-icon>
  <br />
  <st-icon library="material" name="notifications_round"></st-icon>
  <st-icon library="material" name="email_round"></st-icon>
  <st-icon library="material" name="delete_round"></st-icon>
  <st-icon library="material" name="volume_up_round"></st-icon>
  <st-icon library="material" name="settings_round"></st-icon>
  <st-icon library="material" name="shopping_basket_round"></st-icon>
  <br />
  <st-icon library="material" name="notifications_sharp"></st-icon>
  <st-icon library="material" name="email_sharp"></st-icon>
  <st-icon library="material" name="delete_sharp"></st-icon>
  <st-icon library="material" name="volume_up_sharp"></st-icon>
  <st-icon library="material" name="settings_sharp"></st-icon>
  <st-icon library="material" name="shopping_basket_sharp"></st-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="remixicon" name="business/cloud-line"></st-icon>
  <st-icon library="remixicon" name="design/brush-line"></st-icon>
  <st-icon library="remixicon" name="business/pie-chart-line"></st-icon>
  <st-icon library="remixicon" name="development/bug-line"></st-icon>
  <st-icon library="remixicon" name="media/image-line"></st-icon>
  <st-icon library="remixicon" name="system/alert-line"></st-icon>
  <br />
  <st-icon library="remixicon" name="business/cloud-fill"></st-icon>
  <st-icon library="remixicon" name="design/brush-fill"></st-icon>
  <st-icon library="remixicon" name="business/pie-chart-fill"></st-icon>
  <st-icon library="remixicon" name="development/bug-fill"></st-icon>
  <st-icon library="remixicon" name="media/image-fill"></st-icon>
  <st-icon library="remixicon" name="system/alert-fill"></st-icon>
</div>
```

### Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="tabler" name="alert-triangle"></st-icon>
  <st-icon library="tabler" name="arrow-back"></st-icon>
  <st-icon library="tabler" name="at"></st-icon>
  <st-icon library="tabler" name="ball-baseball"></st-icon>
  <st-icon library="tabler" name="cake"></st-icon>
  <st-icon library="tabler" name="files"></st-icon>
  <br />
  <st-icon library="tabler" name="keyboard"></st-icon>
  <st-icon library="tabler" name="moon"></st-icon>
  <st-icon library="tabler" name="pig"></st-icon>
  <st-icon library="tabler" name="printer"></st-icon>
  <st-icon library="tabler" name="ship"></st-icon>
  <st-icon library="tabler" name="toilet-paper"></st-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="unicons" name="clock"></st-icon>
  <st-icon library="unicons" name="graph-bar"></st-icon>
  <st-icon library="unicons" name="padlock"></st-icon>
  <st-icon library="unicons" name="polygon"></st-icon>
  <st-icon library="unicons" name="rocket"></st-icon>
  <st-icon library="unicons" name="star"></st-icon>
  <br />
  <st-icon library="unicons" name="clock-s"></st-icon>
  <st-icon library="unicons" name="graph-bar-s"></st-icon>
  <st-icon library="unicons" name="padlock-s"></st-icon>
  <st-icon library="unicons" name="polygon-s"></st-icon>
  <st-icon library="unicons" name="rocket-s"></st-icon>
  <st-icon library="unicons" name="star-s"></st-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<st-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

#### Customize the default library to use SVG sprites

To improve performance you can use a SVG sprites to avoid multiple trips for each SVG. The browser will load the sprite sheet once and then you reference the particular SVG within the sprite sheet using hash selector.

As always, make sure to benchmark these changes. When using HTTP/2, it may in fact be more bandwidth-friendly to use multiple small requests instead of 1 large sprite sheet.

:::danger
When using sprite sheets, the `st-load` and `st-error` events will not fire.
:::

:::danger
For security reasons, browsers may apply the same-origin policy on `<use>` elements located in the `<st-icon>` shadow DOM and may refuse to load a cross-origin URL. There is currently no defined way to set a cross-origin policy for `<use>` elements. For this reason, sprite sheets should only be used if you're self-hosting them.
:::

```html:preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('sprite', {
    resolver: name => `/assets/images/sprite.svg#${name}`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
    spriteSheet: true
  });
</script>

<div style="font-size: 24px;">
  <st-icon library="sprite" name="clock"></st-icon>
  <st-icon library="sprite" name="speedometer"></st-icon>
</div>
```

### Customizing the System Library

The system library contains only the icons used internally by Shoelace components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Shoelace uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Shoelace.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  function wrapWithTooltip(item) {
    const tooltip = document.createElement('st-tooltip');
    tooltip.content = item.getAttribute('data-name');

    // Close open tooltips
    document.querySelectorAll('.icon-list st-tooltip[open]').forEach(tooltip => tooltip.hide());

    // Wrap it with a tooltip and trick it into showing up
    item.parentNode.insertBefore(tooltip, item);
    tooltip.appendChild(item);
    requestAnimationFrame(() => tooltip.dispatchEvent(new MouseEvent('mouseover')));
  }

  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('st-input');
      const select = container.querySelector('st-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use href="/assets/images/sprite.svg#${i.name}"></use>
          </svg>
        `;
        list.appendChild(item);

        // Wrap it with a tooltip the first time the mouse lands on it. We do this instead of baking them into the DOM
        // to improve this page's performance. See: https://github.com/shoelace-style/shoelace/issues/1122
        item.addEventListener('mouseover', () => wrapWithTooltip(item), { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('st-tooltip');
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            tooltip.content = 'Copied!';
            setTimeout(() => tooltip.content = i.name, 1000);
          }
        });
      });

      // Filter as the user types
      input.addEventListener('st-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = sessionStorage.getItem('st-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('st-change', () => {
        list.setAttribute('data-type', select.value);
        sessionStorage.setItem('st-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--st-panel-border-color);
    border-radius: var(--st-border-radius-medium);
    padding: var(--st-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls st-input {
    flex: 1 1 auto;
  }

  .icon-search-controls st-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--st-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--st-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--st-color-primary-50);
    color: var(--st-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls st-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
