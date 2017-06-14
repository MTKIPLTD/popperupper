import tingle from 'tingle.js';
import { iframeResizer } from 'iframe-resizer';
import 'tingle.js/dist/tingle.css';
import './style.css';

// Find script
const script = document.currentScript;
const url = script.getAttribute('data-url') || '';

// Create modal
const modal = new tingle.modal({
  closeMethods: [],
  cssClass: ['mtk-widget'],
});
modal.setContent(`<iframe src="${url}" style="width: 100%"></iframe>`);

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
});

// Create button
const button = document.createElement('button');
button.innerText = 'Open widget';
button.onclick = function handleButtonClick() {
  modal.open();
};

// Add button to the page
script.parentNode.insertBefore(button, script);
