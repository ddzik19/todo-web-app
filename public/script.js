function burger() {
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.links');
    var quit = document.querySelector('.quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
}

function quit() {
    var burger = document.querySelector('.burger');
    var links = document.querySelector('.links');
    var quit = document.querySelector('.quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
}