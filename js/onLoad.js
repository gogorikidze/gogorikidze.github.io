var link = document.querySelector("link[rel~='icon']");

if (!link) {

    link = document.createElement('link');

    link.rel = 'icon';

    document.getElementsByTagName('head')[0].appendChild(link);

}

link.href = 'img/favicon.ico';

console.time('now');
document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded')
    console.timeEnd('now');
    document.getElementsByTagName('body')[0].style.display = 'block';
}, false);