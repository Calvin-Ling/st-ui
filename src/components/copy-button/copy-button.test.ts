import { expect, fixture, html } from '@open-wc/testing';
import '../../../dist/shoelace.js';
import type StCopyButton from './copy-button.js';

// We use aria-live to announce labels via tooltips
const ignoredRules = ['button-name'];

describe('<st-copy-button>', () => {
  let el: StCopyButton;

  describe('when provided no parameters', () => {
    before(async () => {
      el = await fixture(html`<st-copy-button value="something"></st-copy-button> `);
    });

    it('should pass accessibility tests', async () => {
      await expect(el).to.be.accessible({ ignoredRules });
    });
  });
});
