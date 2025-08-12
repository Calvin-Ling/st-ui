import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import '../../../dist/shoelace.js';
import type { StSelectEvent } from '../../events/st-select.js';
import type StMenuItem from './menu-item.js';

describe('<st-menu-item>', () => {
  it('should pass accessibility tests', async () => {
    const el = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item>Item 1</st-menu-item>
        <st-menu-item>Item 2</st-menu-item>
        <st-menu-item>Item 3</st-menu-item>
        <st-divider></st-divider>
        <st-menu-item type="checkbox" checked>Checked</st-menu-item>
        <st-menu-item type="checkbox">Unchecked</st-menu-item>
      </st-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should pass accessibility tests when using a submenu', async () => {
    const el = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item>
          Submenu
          <st-menu slot="submenu">
            <st-menu-item>Submenu Item 1</st-menu-item>
            <st-menu-item>Submenu Item 2</st-menu-item>
          </st-menu>
        </st-menu-item>
      </st-menu>
    `);
    await expect(el).to.be.accessible();
  });

  it('should have the correct default properties', async () => {
    const el = await fixture<StMenuItem>(html` <st-menu-item>Test</st-menu-item> `);

    expect(el.value).to.equal('');
    expect(el.disabled).to.be.false;
    expect(el.loading).to.equal(false);
    expect(el.getAttribute('aria-disabled')).to.equal('false');
  });

  it('should render the correct aria attributes when disabled', async () => {
    const el = await fixture<StMenuItem>(html` <st-menu-item disabled>Test</st-menu-item> `);
    expect(el.getAttribute('aria-disabled')).to.equal('true');
  });

  describe('when loading', () => {
    it('should have a spinner present', async () => {
      const el = await fixture<StMenuItem>(html` <st-menu-item loading>Menu Item Label</st-menu-item> `);
      expect(el.shadowRoot!.querySelector('st-spinner')).to.exist;
    });
  });

  it('should return a text label when calling getTextLabel()', async () => {
    const el = await fixture<StMenuItem>(html` <st-menu-item>Test</st-menu-item> `);
    expect(el.getTextLabel()).to.equal('Test');
  });

  it('should emit the slotchange event when the label changes', async () => {
    const el = await fixture<StMenuItem>(html` <st-menu-item>Text</st-menu-item> `);
    const slotChangeHandler = sinon.spy();

    el.addEventListener('slotchange', slotChangeHandler);
    el.textContent = 'New Text';
    await waitUntil(() => slotChangeHandler.calledOnce);

    expect(slotChangeHandler).to.have.been.calledOnce;
  });

  it('should render a hidden menu item when the inert attribute is used', async () => {
    const menu = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item inert>Item 1</st-menu-item>
        <st-menu-item>Item 2</st-menu-item>
        <st-menu-item>Item 3</st-menu-item>
      </st-menu>
    `);
    const item1 = menu.querySelector('st-menu-item')!;

    expect(getComputedStyle(item1).display).to.equal('none');
  });

  it('should not render a st-popup if the slot="submenu" attribute is missing, but the slot should exist in the component and be hidden.', async () => {
    const menu = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item>
          Item 1
          <st-menu>
            <st-menu-item> Nested Item 1 </st-menu-item>
          </st-menu>
        </st-menu-item>
      </st-menu>
    `);

    const menuItem: HTMLElement = menu.querySelector('st-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('st-popup')).to.be.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.true;
  });

  it('should render an st-popup if the slot="submenu" attribute is present', async () => {
    const menu = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item id="test">
          Item 1
          <st-menu slot="submenu">
            <st-menu-item> Nested Item 1 </st-menu-item>
          </st-menu>
        </st-menu-item>
      </st-menu>
    `);

    const menuItem = menu.querySelector('st-menu-item')!;
    expect(menuItem.shadowRoot!.querySelector('st-popup')).to.be.not.null;
    const submenuSlot: HTMLElement = menuItem.shadowRoot!.querySelector('slot[name="submenu"]')!;
    expect(submenuSlot.hidden).to.be.false;
  });

  it('should focus on first menuitem of submenu if ArrowRight is pressed on parent menuitem', async () => {
    const menu = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item id="item-1">
          Submenu
          <st-menu slot="submenu">
            <st-menu-item value="submenu-item-1"> Nested Item 1 </st-menu-item>
          </st-menu>
        </st-menu-item>
      </st-menu>
    `);

    const selectHandler = sinon.spy((event: StSelectEvent) => {
      const item = event.detail.item;
      expect(item.value).to.equal('submenu-item-1');
    });
    menu.addEventListener('st-select', selectHandler);

    const submenu = menu.querySelector('st-menu-item');
    submenu!.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });
    await menu.updateComplete;
    await sendKeys({ press: 'Enter' });
    await menu.updateComplete;
    expect(selectHandler).to.have.been.calledOnce;
  });

  it('should focus on outer menu if ArrowRight is pressed on nested menuitem', async () => {
    const menu = await fixture<StMenuItem>(html`
      <st-menu>
        <st-menu-item value="outer-item-1">
          Submenu
          <st-menu slot="submenu">
            <st-menu-item value="inner-item-1"> Nested Item 1 </st-menu-item>
          </st-menu>
        </st-menu-item>
      </st-menu>
    `);

    const focusHandler = sinon.spy((event: FocusEvent) => {
      expect(event.target.value).to.equal('outer-item-1');
      expect(event.relatedTarget.value).to.equal('inner-item-1');
    });

    const outerItem = menu.querySelector('st-menu-item');
    outerItem!.focus();
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowRight' });

    outerItem.addEventListener('focus', focusHandler);
    await menu.updateComplete;
    await sendKeys({ press: 'ArrowLeft' });
    await menu.updateComplete;
    expect(focusHandler).to.have.been.calledOnce;
  });
});
