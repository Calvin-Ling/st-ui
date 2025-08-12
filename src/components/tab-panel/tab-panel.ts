import StTabPanel from './tab-panel.component.js';

export * from './tab-panel.component.js';
export default StTabPanel;

StTabPanel.define('st-tab-panel');

declare global {
  interface HTMLElementTagNameMap {
    'st-tab-panel': StTabPanel;
  }
}
