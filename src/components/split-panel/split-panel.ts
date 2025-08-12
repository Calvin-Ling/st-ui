import StSplitPanel from './split-panel.component.js';

export * from './split-panel.component.js';
export default StSplitPanel;

StSplitPanel.define('st-split-panel');

declare global {
  interface HTMLElementTagNameMap {
    'st-split-panel': StSplitPanel;
  }
}
