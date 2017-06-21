/* eslint-env browser */
import tingle from 'tingle.js';
import { iframeResizer } from 'iframe-resizer';
import './style.css';

export default function generateModal(url) {
  // Generate id for this modal
  const id = `popperupper-${Date.now()}`;

  // Create modal
  const Modal = tingle.modal;
  const modal = new Modal({
    closeMethods: [],
    cssClass: ['popperupper'],
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
      resizedCallback: ({ iframe }) => {
        const mobile = !!window.matchMedia('(max-width: 768px)').matches;
        const message = mobile ? 'POPPERUPPER_MOBILE' : 'POPPUERUPPER_DESKTOP';
        iframe.iFrameResizer.sendMessage(message);

        modal.checkOverflow();
      },
      messageCallback: ({ message }) => {
        if (message === 'POPPERUPPER_CLOSE') {
          modal.close();
        }
      },
    },
    `#${id}`,
  );

  return modal;
}
