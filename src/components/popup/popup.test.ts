import { expect, fixture, html } from '@open-wc/testing';
import '../../../dist/shoelace.js';
import type StPopup from './popup.js';

describe('<st-popup>', () => {
  let element: StPopup;

  it('should render a component', async () => {
    const el = await fixture(html` <st-popup></st-popup> `);

    expect(el).to.exist;
  });

  it('should properly handle positioning when active changes', async () => {
    element = await fixture('<st-popup></st-popup>');

    element.active = true;
    await element.updateComplete;

    // SImulate a scroll event
    const event = new Event('scroll');
    window.dispatchEvent(event);

    element.active = false;
    await element.updateComplete;

    // The component should not throw an error when the window is scrolled
    expect(() => {
      element.active = true;
      window.dispatchEvent(event);
    }).not.to.throw();
  });
});
