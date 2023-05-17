let count = 2;
window.onscroll = function() {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        let toAdd = document.createElement('div');
        toAdd.classList.add('box-scroll');
        toAdd.textContent = `${++count}번째 콘텐츠입니다`
        document.querySelector('.profile').appendChild(toAdd);
    }
}