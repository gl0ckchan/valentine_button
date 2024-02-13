const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

const btn = document.querySelector('#btn');
const btn1 = document.querySelector('#btn1');

btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

btn1.addEventListener('click', () => {
    document.getElementById("text").src = "./img/text2.png";
    document.getElementById("gif").src = './img/gif2.gif';

    btn.remove();
    btn1.remove();
});






















// // функция рандом
// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1);
//   return Math.floor(rand);
// };

// // убегающая кнопка
// const btn = document.querySelector('#btn');
// btn.addEventListener('mouseenter', () => {
//     btn.style.left = `${random(0, 90)}%`;
//     btn.style.top = `${random(0, 90)}%`;
// });

// // победа
// btn.addEventListener('click',
//   () => alert('Congratulations! You hit the button! What are you doing with your life?')
// );