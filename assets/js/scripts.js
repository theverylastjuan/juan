// Theme Switcher
const themes = ['dieci', 'dracula', 'gotham', 'panic'];
const themeSwitcher = document.querySelectorAll('#theme-switcher');
const body = document.querySelector("body");
for (let button of themeSwitcher) {
  button.onclick = () => {
    body.className = themes[Math.floor(Math.random() * themes.length)];
  }
}
// SW
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" });
  navigator.serviceWorker.ready.then(registration => {
    console.log("Service Worker Ready");
  });
  window.addEventListener("load", () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ command: "trimCaches" });
    }
  });
}
// Console Crap
function isIE() {
  ua = navigator.userAgent;
  const is_ie = ua.includes("MSIE ") || ua.includes("Trident/");
  return is_ie;
}
if (isIE()){
  console.log('Fuck yeah it works on IE 11.');
}
console.log('I love to sleep because in my dreams I can finally get revenge on the stingray that strangled Steve Irwin.');