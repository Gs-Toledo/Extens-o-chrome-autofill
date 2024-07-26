import { fillInputs } from '../fillInputs.js';

document.getElementById('fillInputs').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: fillInputs
        });
    });
});


