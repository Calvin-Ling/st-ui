import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse } from '@web/test-runner-commands';
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import sinon from 'sinon';
import '../../../dist/shoelace.js';
import { clickOnElement } from '../../internal/test.js';
import type StDropdown from './dropdown.js';

describe('<st-dropdown>', () => {
  it('should be visible with the open attribute', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown open>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.false;
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;

    expect(panel.hidden).to.be.true;
  });

  it('should emit st-show and st-after-show when calling show()', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('st-show', showHandler);
    el.addEventListener('st-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit st-hide and st-after-hide when calling hide()', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown open>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('st-hide', hideHandler);
    el.addEventListener('st-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should emit st-show and st-after-show when setting open = true', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('st-show', showHandler);
    el.addEventListener('st-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.false;
  });

  it('should emit st-hide and st-after-hide when setting open = false', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown open>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const panel = el.shadowRoot!.querySelector<HTMLElement>('[part~="panel"]')!;
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('st-hide', hideHandler);
    el.addEventListener('st-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
    expect(panel.hidden).to.be.true;
  });

  it('should still open on arrow navigation when no menu items', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu> </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should open on arrow down navigation', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;
    const firstMenuItem = el.querySelectorAll('st-menu-item')[0];

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.true;
    expect(document.activeElement).to.equal(firstMenuItem);
  });

  it('should open on arrow up navigation', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;
    const secondMenuItem = el.querySelectorAll('st-menu-item')[1];

    trigger.focus();
    await sendKeys({ press: 'ArrowUp' });
    await el.updateComplete;

    expect(el.open).to.be.true;
    expect(document.activeElement).to.equal(secondMenuItem);
  });

  it('should navigate to first focusable item on arrow navigation', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-label>Top Label</st-menu-label>
          <st-menu-item>Item 1</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;
    const item = el.querySelector('st-menu-item')!;

    await clickOnElement(trigger);
    await trigger.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(document.activeElement).to.equal(item);
  });

  it('should close on escape key', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown open>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;

    trigger.focus();
    await sendKeys({ press: 'Escape' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should not open on arrow navigation when no menu exists', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <div>Some custom content</div>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;

    trigger.focus();
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should open on enter key', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should focus on menu items when clicking the trigger and arrowing through options', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
          <st-menu-item>Item 2</st-menu-item>
          <st-menu-item>Item 3</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;
    const secondMenuItem = el.querySelectorAll('st-menu-item')[1];

    await clickOnElement(trigger);
    await trigger.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;
    await sendKeys({ press: 'ArrowDown' });
    await el.updateComplete;

    expect(document.activeElement).to.equal(secondMenuItem);
  });

  it('should open on enter key when no menu exists', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <div>Some custom content</div>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;

    trigger.focus();
    await el.updateComplete;
    await sendKeys({ press: 'Enter' });
    await el.updateComplete;

    expect(el.open).to.be.true;
  });

  it('should hide when clicked outside container and initially open', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown open>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);

    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  it('should hide when clicked outside container', async () => {
    const el = await fixture<StDropdown>(html`
      <st-dropdown>
        <st-button slot="trigger" caret>Toggle</st-button>
        <st-menu>
          <st-menu-item>Item 1</st-menu-item>
        </st-menu>
      </st-dropdown>
    `);
    const trigger = el.querySelector('st-button')!;

    trigger.click();
    await el.updateComplete;
    await sendMouse({ type: 'click', position: [0, 0] });
    await el.updateComplete;

    expect(el.open).to.be.false;
  });

  describe('when a st-menu is provided and the dropdown is opened', () => {
    before(() => {
      @customElement('custom-wrapper')
      class Wrapper extends LitElement {
        render() {
          return html`<nested-dropdown></nested-dropdown>`;
        }
      }
      // eslint-disable-next-line chai-friendly/no-unused-expressions
      Wrapper;

      @customElement('nested-dropdown')
      class NestedDropdown extends LitElement {
        render() {
          return html`
            <st-dropdown>
              <st-button slot="trigger" caret>Toggle</st-button>
              <st-menu>
                <st-menu-item>Item 1</st-menu-item>
              </st-menu>
            </st-dropdown>
          `;
        }
      }
      // eslint-disable-next-line chai-friendly/no-unused-expressions
      NestedDropdown;
    });

    it('should remain open on tab key', async () => {
      const el = await fixture<StDropdown>(html`<custom-wrapper></custom-wrapper>`);

      const dropdown = el.shadowRoot!.querySelector('nested-dropdown')!.shadowRoot!.querySelector('st-dropdown')!;

      const trigger = dropdown.querySelector('st-button')!;

      trigger.focus();
      await dropdown.updateComplete;
      await sendKeys({ press: 'Enter' });
      await dropdown.updateComplete;
      await sendKeys({ press: 'Tab' });
      await dropdown.updateComplete;

      expect(dropdown.open).to.be.true;
    });
  });

  describe('when arbitrary content is provided and the dropdown is opened', () => {
    before(() => {
      @customElement('custom-wrapper-arbitrary')
      class WrapperArbitrary extends LitElement {
        render() {
          return html`<nested-dropdown-arbitrary></nested-dropdown-arbitrary>`;
        }
      }
      // eslint-disable-next-line chai-friendly/no-unused-expressions
      WrapperArbitrary;

      @customElement('nested-dropdown-arbitrary')
      class NestedDropdownArbitrary extends LitElement {
        render() {
          return html`
            <st-dropdown>
              <st-button slot="trigger" caret>Toggle</st-button>
              <ul>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/profile">Profile</a></li>
              </ul>
            </st-dropdown>
          `;
        }
      }
      // eslint-disable-next-line chai-friendly/no-unused-expressions
      NestedDropdownArbitrary;
    });

    it('should remain open on tab key', async () => {
      const el = await fixture<StDropdown>(html`<custom-wrapper-arbitrary></custom-wrapper-arbitrary>`);

      const dropdown = el
        .shadowRoot!.querySelector('nested-dropdown-arbitrary')!
        .shadowRoot!.querySelector('st-dropdown')!;

      const trigger = dropdown.querySelector('st-button')!;

      trigger.focus();
      await dropdown.updateComplete;
      await sendKeys({ press: 'Enter' });
      await dropdown.updateComplete;
      await sendKeys({ press: 'Tab' });
      await dropdown.updateComplete;

      expect(dropdown.open).to.be.true;
    });
  });
});
