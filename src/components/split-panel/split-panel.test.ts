import { expect, fixture, html, oneEvent } from '@open-wc/testing';
import { resetMouse } from '@web/test-runner-commands';
import '../../../dist/shoelace.js';
import { dragElement } from '../../internal/test.js';
import { queryByTestId } from '../../internal/test/data-testid-helpers.js';
import type StSplitPanel from './split-panel.js';

const DIVIDER_WIDTH_IN_PX = 4;

const getPanel = (splitPanel: StSplitPanel, testid: string): HTMLElement => {
  const startPanel = queryByTestId<HTMLElement>(splitPanel, testid);
  expect(startPanel).not.to.be.null;
  return startPanel!;
};

const getPanelWidth = (splitPanel: StSplitPanel, testid: string) => {
  const panel = getPanel(splitPanel, testid);
  const { width } = panel.getBoundingClientRect();
  return width;
};

const getPanelHeight = (splitPanel: StSplitPanel, testid: string) => {
  const panel = getPanel(splitPanel, testid);
  const { height } = panel.getBoundingClientRect();
  return height;
};

const getDivider = (splitPanel: StSplitPanel): Element => {
  const divider = splitPanel.shadowRoot?.querySelector('[part="divider"]');
  expect(divider).not.to.be.null;
  return divider!;
};

describe('<st-split-panel>', () => {
  afterEach(async () => {
    await resetMouse();
  });

  it('should render a component', async () => {
    const splitPanel = await fixture(html` <st-split-panel></st-split-panel> `);

    expect(splitPanel).to.exist;
  });

  it('should be accessible', async () => {
    const splitPanel = await fixture(
      html`<st-split-panel>
        <div slot="start">Start</div>
        <div slot="end">End</div>
      </st-split-panel>`
    );

    await expect(splitPanel).to.be.accessible();
  });

  it('should show both panels', async () => {
    const splitPanel = await fixture(
      html`<st-split-panel>
        <div slot="start">Start</div>
        <div slot="end">End</div>
      </st-split-panel>`
    );

    expect(splitPanel).to.contain.text('Start');
    expect(splitPanel).to.contain.text('End');
  });

  describe('panel sizing horizontal', () => {
    it('has two evenly sized panels by default', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel>
          <div slot="start" data-testid="start-panel">Start</div>
          <div slot="end" data-testid="end-panel">End</div>
        </st-split-panel>`
      );

      const startPanelWidth = getPanelWidth(splitPanel, 'start-panel');
      const endPanelWidth = getPanelWidth(splitPanel, 'end-panel');

      expect(startPanelWidth).to.be.equal(endPanelWidth);
    });

    it('changes the sizing of the panels based on the position attribute', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel position="25">
          <div slot="start" data-testid="start-panel">Start</div>
          <div slot="end" data-testid="end-panel">End</div>
        </st-split-panel>`
      );

      const startPanelWidth = getPanelWidth(splitPanel, 'start-panel');
      const endPanelWidth = getPanelWidth(splitPanel, 'end-panel');

      expect(startPanelWidth * 3).to.be.equal(endPanelWidth - DIVIDER_WIDTH_IN_PX);
    });

    it('updates the position in pixels to the correct result', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel position="25">
          <div slot="start" data-testid="start-panel">Start</div>
          <div slot="end" data-testid="end-panel">End</div>
        </st-split-panel>`
      );

      splitPanel.position = 10;

      const startPanelWidth = getPanelWidth(splitPanel, 'start-panel');

      expect(startPanelWidth).to.be.equal(splitPanel.positionInPixels - DIVIDER_WIDTH_IN_PX / 2);
    });

    it('emits the st-reposition	event on position change', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const repositionPromise = oneEvent(splitPanel, 'st-reposition');
      splitPanel.position = 10;
      return repositionPromise;
    });

    it('can be resized using the mouse', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const positionInPixels = splitPanel.positionInPixels;

      const divider = getDivider(splitPanel);

      await dragElement(divider, -30);

      const positionInPixelsAfterDrag = splitPanel.positionInPixels;
      expect(positionInPixelsAfterDrag).to.be.equal(positionInPixels - 30);
    });

    it('cannot be resized if disabled', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel disabled>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const positionInPixels = splitPanel.positionInPixels;

      const divider = getDivider(splitPanel);

      await dragElement(divider, -30);

      const positionInPixelsAfterDrag = splitPanel.positionInPixels;
      expect(positionInPixelsAfterDrag).to.be.equal(positionInPixels);
    });

    it('snaps to predefined positions', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel>
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const positionInPixels = splitPanel.positionInPixels;
      splitPanel.snap = `${positionInPixels - 40}px`;

      const divider = getDivider(splitPanel);

      await dragElement(divider, -30);

      const positionInPixelsAfterDrag = splitPanel.positionInPixels;
      expect(positionInPixelsAfterDrag).to.be.equal(positionInPixels - 40);
    });
  });

  describe('panel sizing vertical', () => {
    it('has two evenly sized panels by default', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel vertical style="height: 400px;">
          <div slot="start" data-testid="start-panel">Start</div>
          <div slot="end" data-testid="end-panel">End</div>
        </st-split-panel>`
      );

      const startPanelHeight = getPanelHeight(splitPanel, 'start-panel');
      const endPanelHeight = getPanelHeight(splitPanel, 'end-panel');

      expect(startPanelHeight).to.be.equal(endPanelHeight);
    });

    it('changes the sizing of the panels based on the position attribute', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel position="25" vertical style="height: 400px;">
          <div slot="start" data-testid="start-panel">Start</div>
          <div slot="end" data-testid="end-panel">End</div>
        </st-split-panel>`
      );

      const startPanelHeight = getPanelHeight(splitPanel, 'start-panel');
      const endPanelHeight = getPanelHeight(splitPanel, 'end-panel');

      expect(startPanelHeight * 3).to.be.equal(endPanelHeight - DIVIDER_WIDTH_IN_PX);
    });

    it('updates the position in pixels to the correct result', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel position="25" vertical style="height: 400px;">
          <div slot="start" data-testid="start-panel">Start</div>
          <div slot="end" data-testid="end-panel">End</div>
        </st-split-panel>`
      );

      splitPanel.position = 10;

      const startPanelHeight = getPanelHeight(splitPanel, 'start-panel');

      expect(startPanelHeight).to.be.equal(splitPanel.positionInPixels - DIVIDER_WIDTH_IN_PX / 2);
    });

    it('emits the st-reposition	event on position change ', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel vertical style="height: 400px;">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const repositionPromise = oneEvent(splitPanel, 'st-reposition');
      splitPanel.position = 10;
      return repositionPromise;
    });

    it('can be resized using the mouse ', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel vertical style="height: 400px;">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const positionInPixels = splitPanel.positionInPixels;

      const divider = getDivider(splitPanel);

      await dragElement(divider, 0, -30);

      const positionInPixelsAfterDrag = splitPanel.positionInPixels;
      expect(positionInPixelsAfterDrag).to.be.equal(positionInPixels - 30);
    });

    it('cannot be resized if disabled', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel disabled vertical style="height: 400px;">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const positionInPixels = splitPanel.positionInPixels;

      const divider = getDivider(splitPanel);

      await dragElement(divider, 0, -30);

      const positionInPixelsAfterDrag = splitPanel.positionInPixels;
      expect(positionInPixelsAfterDrag).to.be.equal(positionInPixels);
    });

    it('snaps to predefined positions', async () => {
      const splitPanel = await fixture<StSplitPanel>(
        html`<st-split-panel vertical style="height: 400px;">
          <div slot="start">Start</div>
          <div slot="end">End</div>
        </st-split-panel>`
      );

      const positionInPixels = splitPanel.positionInPixels;
      splitPanel.snap = `${positionInPixels - 40}px`;

      const divider = getDivider(splitPanel);

      await dragElement(divider, 0, -30);

      const positionInPixelsAfterDrag = splitPanel.positionInPixels;
      expect(positionInPixelsAfterDrag).to.be.equal(positionInPixels - 40);
    });
  });
});
