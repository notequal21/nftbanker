
// window.addEventListener('load', {

// })
window.onload = () => {
  let iframeLink = document.createElement('link');
  iframeLink.href = 'fileName.css';
  iframeLink.rel = 'stylesheet';
  iframeLink.type = 'text/css';
  frames[0].document.head.appendChild(iframeLink);
}

// window.onload = () => {
//   let iframeName = document.getElementById('iframeLine');
//   let iframeContent = iframeName.contentDocument;
//   iframeContent.body.innerHTML = iframeContent.body.innerHTML + `<style>.dark{color: #fff}</style>`;
// }

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});