// ==UserScript==
// @name         WME Birthdays (Discuss)
// @namespace    DeviateFromThePlan
// @version      2024.09.16.01
// @description  Extract birthdays from Discuss & copy them to clipboard.
// @author       DeviateFromThePlan
// @match        https://www.waze.com/discuss/cakeday/birthdays*
// @icon         data:image/png;base64,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
// @grant        GM_setClipboard
// @run-at       document-end
// @downloadURL  https://github.com/DeviateFromThePlan/WME-Birthdays-Discuss/releases/latest/download/WME-Birthdays-Discuss.user.js
// @updateURL    https://github.com/DeviateFromThePlan/WME-Birthdays-Discuss/releases/latest/download/WME-Birthdays-Discuss.user.js
// ==/UserScript==

(function() {
    'use strict';

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let button;

    // Function to extract usernames and copy to clipboard
    function copyUsernamesToClipboard() {
        const userElements = document.querySelectorAll('[data-username]');
        const usernames = Array.from(userElements).map(el => `@${el.getAttribute('data-username')}`).join('\n');

        GM_setClipboard(':tada: Birthdays for ' + months[d.getMonth()] + ' ***' + d.getDate() + '***, ' + d.getFullYear() + ':\n\n' + usernames + '\n\nHappy Birthday everyone! :partying_face:');
        alert('Birthdays copied to clipboard!');
    }

    function createCopyButton() {
        if (button) {
            button.remove();
        }
        button = document.createElement('button');
        button.textContent = 'Copy Birthdays';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.padding = '10px';
        button.style.backgroundColor = '#007bff';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', copyUsernamesToClipboard);

        document.body.appendChild(button);
    }

    function checkUrl() {
        if (window.location.href.startsWith("https://www.waze.com/discuss/cakeday/birthdays")) {
            createCopyButton();
        } else {
            if (button) {
                button.remove();
                button = null;
            }
        }
    }

    // Initial check
    checkUrl();

    window.addEventListener('popstate', checkUrl);

    setInterval(checkUrl, 1000);

})();
