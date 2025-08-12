---
meta:
  title: Visually Hidden
  description: The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
layout: component
---

According to [The A11Y Project](https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/), "there are real world situations where visually hiding content may be appropriate, while the content should remain available to assistive technologies, such as screen readers. For instance, hiding a search field's label as a common magnifying glass icon is used in its stead."

Since visually hidden content can receive focus when tabbing, the element will become visible when something inside receives focus. This behavior is intentional, as sighted keyboard user won't be able to determine where the focus indicator is without it.

```html:preview
<div style="min-height: 1.875rem;">
  <st-visually-hidden>
    <a href="#">Skip to main content</a>
  </st-visually-hidden>
</div>
```

## Examples

### Links That Open in New Windows

In this example, the link will open a new window. Screen readers will announce "opens in a new window" even though the text content isn't visible to sighted users.

```html:preview
<a href="https://example.com/" target="_blank">
  Visit External Page
  <st-icon name="box-arrow-up-right"></st-icon>
  <st-visually-hidden>opens in a new window</st-visually-hidden>
</a>
```

### Content Conveyed By Context

Adding a label may seem redundant at times, but they're very helpful for unsighted users. Rather than omit them, you can provide context to unsighted users with visually hidden content that will be announced by assistive devices such as screen readers.

```html:preview
<st-card style="width: 100%; max-width: 360px;">
  <header>
    <st-visually-hidden>Personal Info</st-visually-hidden>
  </header>
  <st-input label="Name" style="margin-bottom: .5rem;"></st-input>
  <st-input label="Email" type="email"></st-input>
</st-card>
```
