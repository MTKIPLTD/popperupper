import tingle from 'tingle.js';
import { iframeResizer } from 'iframe-resizer';
import './style.css';

export default function generateModal(url) {
  // Generate id for this modal
  const id = `widget-${Date.now()}`;

  // Create modal
  const Modal = tingle.modal;
  const modal = new Modal({
    closeMethods: [],
    cssClass: ['mtk-widget'],
  });
  modal.setContent(
    `<iframe id="${id}" src="${url}" style="width: 100%"></iframe>`,
  );

  // Set up iframe resizer
  iframeResizer(
    {
      minHeight: 200,
      checkOrigin: false,
      heightCalculationMethod: 'taggedElement',
      resizeFrom: 'child',
      resizedCallback: () => {
        modal.checkOverflow();
      },
      messageCallback: ({ message }) => {
        if (message === 'MTK_SB_CLOSE') {
          modal.close();
        }
      },
    },
    `#${id}`,
  );

  return modal;
}
