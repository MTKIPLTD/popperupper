import tingle from 'tingle.js';
import { iframeResizer } from 'iframe-resizer';
import './style.css';

// Find script
const script = document.currentScript;
const url = script.getAttribute('data-url') || '';

// Generate id for this modal
const id = `widget-${Date.now()}`;

// Create modal
const modal = new tingle.modal({
  closeMethods: [],
  cssClass: ['mtk-widget'],
});
modal.setContent(`<iframe id="${id}" src="${url}" style="width: 100%"></iframe>`);

// Set up iframe resizer
iframeResizer({
  minHeight: 200,
  checkOrigin: false,
  heightCalculationMethod: 'taggedElement',
  messageCallback: ({ iframe, message }) => {
    if (message === 'MTK_SB_CLOSE') {
      modal.close();
    }
  },
}, `#${id}`);

// Create button
const button = document.createElement('button');
button.innerText = 'Open widget';
button.onclick = () => {
  modal.open();
};

// Add button to the page
script.parentNode.insertBefore(button, script);
