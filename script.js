// JavaScript
//console.log('Hello world!');

const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

//ボタンがクリックされたら、動作される
btn.addEventListener('click', () => {
    //bodyにクラス名を付ける、または外す
    document.body.classList.toggle('black');
    //テキストを書き換える
    text.textContent = 'Dark mode';
});