/* eslint-env browser */

import generateModal from "./index";

// Find script
const script = document.currentScript;

// Extract parameters
const url = script.getAttribute("data-url") || "";
const buttonLabel = script.getAttribute("data-label") || "Open widget";

// Generate modal
const modal = generateModal(url);

// Create button
const button = document.createElement("button");
button.innerText = buttonLabel;
button.onclick = () => {
  modal.open();
};

// Add button to the page
script.parentNode.insertBefore(button, script);
