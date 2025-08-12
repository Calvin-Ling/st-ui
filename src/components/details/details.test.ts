import '../../../dist/shoelace.js';
// cspell:dictionaries lorem-ipsum
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import type { SlHideEvent } from '../../events/st-hide.js';
import type { SlShowEvent } from '../../events/st-show.js';
import type StDetails from './details.js';

describe('<st-details>', () => {
  describe('accessibility', () => {
    it('should be accessible when closed', async () => {
      const details = await fixture<StDetails>(html`<st-details summary="Test"> Test text </st-details>`);

      await expect(details).to.be.accessible();
    });

    it('should be accessible when open', async () => {
      const details = await fixture<StDetails>(html`<st-details open summary="Test">Test text</st-details>`);

      await expect(details).to.be.accessible();
    });
  });

  it('should be visible with the open attribute', async () => {
    const el = await fixture<StDetails>(html`
      <st-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;

    expect(parseInt(getComputedStyle(body).height)).to.be.greaterThan(0);
  });

  it('should not be visible without the open attribute', async () => {
    const el = await fixture<StDetails>(html`
      <st-details summary="click me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    expect(parseInt(getComputedStyle(body).height)).to.equal(0);
  });

  it('should emit st-show and st-after-show when calling show()', async () => {
    const el = await fixture<StDetails>(html`
      <st-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('st-show', showHandler);
    el.addEventListener('st-after-show', afterShowHandler);
    el.show();

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
  });

  it('should emit st-hide and st-after-hide when calling hide()', async () => {
    const el = await fixture<StDetails>(html`
      <st-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('st-hide', hideHandler);
    el.addEventListener('st-after-hide', afterHideHandler);
    el.hide();

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should emit st-show and st-after-show when setting open = true', async () => {
    const el = await fixture<StDetails>(html`
      <st-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const body = el.shadowRoot!.querySelector<HTMLElement>('.details__body')!;
    const showHandler = sinon.spy();
    const afterShowHandler = sinon.spy();

    el.addEventListener('st-show', showHandler);
    el.addEventListener('st-after-show', afterShowHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);
    await waitUntil(() => afterShowHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(afterShowHandler).to.have.been.calledOnce;
    expect(body.hidden).to.be.false;
  });

  it('should emit st-hide and st-after-hide when setting open = false', async () => {
    const el = await fixture<StDetails>(html`
      <st-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const hideHandler = sinon.spy();
    const afterHideHandler = sinon.spy();

    el.addEventListener('st-hide', hideHandler);
    el.addEventListener('st-after-hide', afterHideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);
    await waitUntil(() => afterHideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(afterHideHandler).to.have.been.calledOnce;
  });

  it('should not open when preventing st-show', async () => {
    const el = await fixture<StDetails>(html`
      <st-details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const showHandler = sinon.spy((event: SlShowEvent) => event.preventDefault());

    el.addEventListener('st-show', showHandler);
    el.open = true;

    await waitUntil(() => showHandler.calledOnce);

    expect(showHandler).to.have.been.calledOnce;
    expect(el.open).to.be.false;
  });

  it('should not close when preventing st-hide', async () => {
    const el = await fixture<StDetails>(html`
      <st-details open>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </st-details>
    `);
    const hideHandler = sinon.spy((event: SlHideEvent) => event.preventDefault());

    el.addEventListener('st-hide', hideHandler);
    el.open = false;

    await waitUntil(() => hideHandler.calledOnce);

    expect(hideHandler).to.have.been.calledOnce;
    expect(el.open).to.be.true;
  });

  it('should be the correct size after opening more than one instance', async () => {
    const el = await fixture<StDetails>(html`
      <div>
        <st-details>
          <div style="height: 200px;"></div>
        </st-details>
        <st-details>
          <div style="height: 400px;"></div>
        </st-details>
      </div>
    `);
    const first = el.querySelectorAll('st-details')[0];
    const second = el.querySelectorAll('st-details')[1];
    const firstBody = first.shadowRoot!.querySelector('.details__body')!;
    const secondBody = second.shadowRoot!.querySelector('.details__body')!;

    await first.show();
    await second.show();

    expect(firstBody.clientHeight).to.equal(232); // 200 + 16px + 16px (vertical padding)
    expect(secondBody.clientHeight).to.equal(432); // 400 + 16px + 16px (vertical padding)
  });
});
