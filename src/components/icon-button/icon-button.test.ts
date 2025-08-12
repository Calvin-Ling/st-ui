import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import sinon from 'sinon';
import '../../../dist/shoelace.js';
import type StIconButton from './icon-button.js';

type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

describe('<st-icon-button>', () => {
  describe('defaults ', () => {
    it('default properties', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button></st-icon-button> `);

      expect(el.name).to.be.undefined;
      expect(el.library).to.be.undefined;
      expect(el.src).to.be.undefined;
      expect(el.href).to.be.undefined;
      expect(el.target).to.be.undefined;
      expect(el.download).to.be.undefined;
      expect(el.label).to.equal('');
      expect(el.disabled).to.equal(false);
    });

    it('renders as a button by default', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button></st-icon-button> `);

      expect(el.shadowRoot?.querySelector('button')).to.exist;
      expect(el.shadowRoot?.querySelector('a')).not.to.exist;
    });
  });

  describe('when styling the host element', () => {
    it('renders the correct color and font size', async () => {
      const el = await fixture<StIconButton>(html`
        <st-icon-button
          library="system"
          name="check"
          style="color: rgb(0, 136, 221); font-size: 2rem;"
        ></st-icon-button>
      `);
      const icon = el.shadowRoot!.querySelector('st-icon')!;
      const styles = getComputedStyle(icon);

      expect(styles.color).to.equal('rgb(0, 136, 221)');
      expect(styles.fontSize).to.equal('32px');
    });
  });

  describe('when icon attributes are present', () => {
    it('renders an st-icon from a library', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button library="system" name="check"></st-icon-button> `);
      expect(el.shadowRoot?.querySelector('st-icon')).to.exist;
    });

    it('renders an st-icon from a src', async () => {
      const fakeId = 'test-src';
      const el = await fixture<StIconButton>(html` <st-icon-button></st-icon-button> `);

      el.src = `data:image/svg+xml,${encodeURIComponent(`<svg id="${fakeId}"></svg>`)}`;

      const internalSlIcon = el.shadowRoot?.querySelector('st-icon');

      await waitUntil(() => internalSlIcon?.shadowRoot?.querySelector('svg'), 'SVG not rendered');

      expect(internalSlIcon).to.exist;
      expect(internalSlIcon?.shadowRoot?.querySelector('svg')).to.exist;
      expect(internalSlIcon?.shadowRoot?.querySelector('svg')?.getAttribute('id')).to.equal(fakeId);
    });
  });

  describe('when href is present', () => {
    it('renders as an anchor', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button href="some/path"></st-icon-button> `);

      expect(el.shadowRoot?.querySelector('a')).to.exist;
      expect(el.shadowRoot?.querySelector('button')).not.to.exist;
    });

    it(`the anchor rel is not present`, async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button href="some/path"></st-icon-button> `);
      expect(el.shadowRoot?.querySelector(`a[rel]`)).not.to.exist;
    });

    describe('and target is present', () => {
      ['_blank', '_parent', '_self', '_top'].forEach((target: LinkTarget) => {
        it(`the anchor target is the provided target: ${target}`, async () => {
          const el = await fixture<StIconButton>(html`
            <st-icon-button href="some/path" target="${target}"></st-icon-button>
          `);
          expect(el.shadowRoot?.querySelector(`a[target="${target}"]`)).to.exist;
        });

        it(`the anchor rel is set to 'noreferrer noopener'`, async () => {
          const el = await fixture<StIconButton>(html`
            <st-icon-button href="some/path" target="${target}"></st-icon-button>
          `);
          expect(el.shadowRoot?.querySelector(`a[rel="noreferrer noopener"]`)).to.exist;
        });
      });
    });

    describe('and download is present', () => {
      it(`the anchor download attribute is the provided download`, async () => {
        const fakeDownload = 'some/path';
        const el = await fixture<StIconButton>(html`
          <st-icon-button href="some/path" download="${fakeDownload}"></st-icon-button>
        `);

        expect(el.shadowRoot?.querySelector(`a[download="${fakeDownload}"]`)).to.exist;
      });
    });
  });

  describe('when label is present', () => {
    it('the internal aria-label attribute is set to the provided label when rendering a button', async () => {
      const fakeLabel = 'some label';
      const el = await fixture<StIconButton>(html` <st-icon-button label="${fakeLabel}"></st-icon-button> `);
      expect(el.shadowRoot?.querySelector(`button[aria-label="${fakeLabel}"]`)).to.exist;
    });

    it('the internal aria-label attribute is set to the provided label when rendering an anchor', async () => {
      const fakeLabel = 'some label';
      const el = await fixture<StIconButton>(html`
        <st-icon-button href="some/path" label="${fakeLabel}"></st-icon-button>
      `);
      expect(el.shadowRoot?.querySelector(`a[aria-label="${fakeLabel}"]`)).to.exist;
    });
  });

  describe('when disabled is present', () => {
    it('the internal button has a disabled attribute when rendering a button', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button disabled></st-icon-button> `);
      expect(el.shadowRoot?.querySelector(`button[disabled]`)).to.exist;
    });

    it('the internal anchor has an aria-disabled attribute when rendering an anchor', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button href="some/path" disabled></st-icon-button> `);
      expect(el.shadowRoot?.querySelector(`a[aria-disabled="true"]`)).to.exist;
    });
  });

  describe('when using methods', () => {
    it('should emit st-focus and st-blur when the button is focused and blurred', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button></st-icon-button> `);
      const focusHandler = sinon.spy();
      const blurHandler = sinon.spy();

      el.addEventListener('st-focus', focusHandler);
      el.addEventListener('st-blur', blurHandler);

      el.focus();
      await waitUntil(() => focusHandler.calledOnce);

      el.blur();
      await waitUntil(() => blurHandler.calledOnce);

      expect(focusHandler).to.have.been.calledOnce;
      expect(blurHandler).to.have.been.calledOnce;
    });

    it('should emit a click event when calling click()', async () => {
      const el = await fixture<StIconButton>(html` <st-icon-button></st-icon-button> `);
      const clickHandler = sinon.spy();

      el.addEventListener('click', clickHandler);
      el.click();
      await waitUntil(() => clickHandler.calledOnce);

      expect(clickHandler).to.have.been.calledOnce;
    });
  });
});
