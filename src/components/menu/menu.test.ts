import { expect, fixture } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { html } from 'lit';
import sinon from 'sinon';
import '../../../dist/shoelace.js';
import type { StSelectEvent } from '../../events/st-select.js';
import { clickOnElement } from '../../internal/test.js';
import type StMenuItem from '../menu-item/menu-item.component.js';
import type StMenu from './menu.js';

describe('<st-menu>', () => {
  it('emits st-select with the correct event detail when clicking an item', async () => {
    const menu = await fixture<StMenu>(html`
      <st-menu>
        <st-menu-item value="item-1">Item 1</st-menu-item>
        <st-menu-item value="item-2">Item 2</st-menu-item>
        <st-menu-item value="item-3">Item 3</st-menu-item>
        <st-menu-item value="item-4">Item 4</st-menu-item>
      </st-menu>
    `);
    const item2 = menu.querySelectorAll('st-menu-item')[1];
    const selectHandler = sinon.spy((event: StSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect event detail emitted with st-select');
      }
    });

    menu.addEventListener('st-select', selectHandler);
    await clickOnElement(item2);

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('can be selected via keyboard', async () => {
    const menu = await fixture<StMenu>(html`
      <st-menu>
        <st-menu-item value="item-1">Item 1</st-menu-item>
        <st-menu-item value="item-2">Item 2</st-menu-item>
        <st-menu-item value="item-3">Item 3</st-menu-item>
        <st-menu-item value="item-4">Item 4</st-menu-item>
      </st-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('st-menu-item');
    const selectHandler = sinon.spy((event: StSelectEvent) => {
      const item = event.detail.item;
      if (item !== item2) {
        expect.fail('Incorrect item selected');
      }
    });

    menu.addEventListener('st-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    expect(selectHandler).to.have.been.calledOnce;
  });

  it('does not select disabled items when clicking', async () => {
    const menu = await fixture<StMenu>(html`
      <st-menu>
        <st-menu-item value="item-1">Item 1</st-menu-item>
        <st-menu-item value="item-2" disabled>Item 2</st-menu-item>
        <st-menu-item value="item-3">Item 3</st-menu-item>
        <st-menu-item value="item-4">Item 4</st-menu-item>
      </st-menu>
    `);
    const item2 = menu.querySelectorAll('st-menu-item')[1];
    const selectHandler = sinon.spy();

    menu.addEventListener('st-select', selectHandler);

    await clickOnElement(item2);

    expect(selectHandler).to.not.have.been.calledOnce;
  });

  it('does not select disabled items when pressing enter', async () => {
    const menu = await fixture<StMenu>(html`
      <st-menu>
        <st-menu-item value="item-1">Item 1</st-menu-item>
        <st-menu-item value="item-2" disabled>Item 2</st-menu-item>
        <st-menu-item value="item-3">Item 3</st-menu-item>
        <st-menu-item value="item-4">Item 4</st-menu-item>
      </st-menu>
    `);
    const [item1, item2] = menu.querySelectorAll('st-menu-item');
    const selectHandler = sinon.spy();

    menu.addEventListener('st-select', selectHandler);

    item1.focus();
    await item1.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    expect(document.activeElement).to.equal(item2);
    await sendKeys({ press: 'Enter' });
    await item2.updateComplete;

    expect(selectHandler).to.not.have.been.called;
  });

  // @see https://github.com/shoelace-style/shoelace/issues/1596
  it('Should fire "st-select" when clicking an element within a menu-item', async () => {
    // eslint-disable-next-line
    const selectHandler = sinon.spy(() => { });

    const menu: StMenu = await fixture(html`
      <st-menu>
        <st-menu-item>
          <span>Menu item</span>
        </st-menu-item>
      </st-menu>
    `);

    menu.addEventListener('st-select', selectHandler);
    const span = menu.querySelector('span')!;
    await clickOnElement(span);

    expect(selectHandler).to.have.been.calledOnce;
  });

  // @see https://github.com/shoelace-style/shoelace/issues/2115
  it('Should be able to check a checkbox menu item in a submenu', async () => {
    const menu: StMenu = await fixture(html`
      <st-menu style="max-width: 200px;">
        <st-menu-item>
          <span>Menu item</span>
          <st-menu slot="submenu">
            <st-menu-item type="checkbox" checked>Checkbox</st-menu-item>
          </st-menu>
        </st-menu-item>
      </st-menu>
    `);

    const menuItem = menu.querySelector<StMenuItem>('st-menu-item')!;
    const checkbox = menu.querySelector<StMenuItem>("[type='checkbox']")!;

    expect(checkbox.checked).to.equal(true);
    await clickOnElement(menuItem); // Focus the menu item
    await sendKeys({ press: 'ArrowRight' }); // Open the submenu
    await clickOnElement(checkbox); // Click the checkbox
    await checkbox.updateComplete;
    expect(checkbox.checked).to.equal(false);
  });
});
