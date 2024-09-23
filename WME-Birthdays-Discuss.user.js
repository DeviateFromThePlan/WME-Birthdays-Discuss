// ==UserScript==
// @name         WME Birthdays (Discuss)
// @namespace    DeviateFromThePlan
// @version      2024.09.16.01
// @description  Extract birthdays from Discuss & copy them to clipboard.
// @author       DeviateFromThePlan
// @match        https://www.waze.com/discuss/cakeday/birthdays*
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
