
// ==UserScript==
// @name         Setting btn - [ X ]
// @namespace    http://tampermonkey.net/
// @version      2.9
// @description  Add custom btn for setting menubar
// @copyright    2022, terifash (https://openuserjs.org/users/teri.fash)
// @author       Teri Fash <teri.fash@gmail.com>
// @license      MIT
// @match        *://*.xvideos.com/video*
// @icon         https://www.xvideos.com/favicon-32x32.png
// @run-at       document-start
// ==/UserScript==

(()=> {
  const styles = {
    zIndex: 1000,
  }

  function setingsUpinit(seti) {
    let position = window.localStorage.getItem(`video-menu-position`);

		// maybe need added class "init-ok"
    seti.addClass(`btn-settings-top btn-settings-top--${position === 'left' ? 'right' : 'left'}`).css(styles);

    $('body').prepend(seti);
  }

  function init() {
    const settings = $('#site-settings').clone();

    setingsUpinit(settings);
  }

   window.addEventListener('DOMContentLoaded', init);
})();