// const repeat = (str, times) => {
//   let result = '';
//   for (let i = 0; i < times; i++) {
//     result += str;
//   }
//   return result;
// };
// const scream = str => {
//   return str.toUpperCase() + '!!!!';
// };

// const getSomeText = phrase => {
//   let text = scream(phrase);
//   let some = repeat(text, 4);
//   return some;
// };

// const makeSome = (phrase, el) => {
//   const h1 = document.createElement('h1');
//   h1.innerText = getSomeText(phrase);
//   el.appendChild(h1);
// };
// console.log('HELLO!');
// makeSome('I LOVE PIZZA', document.body);

const moveX = (element, amount, delay) => {
  setTimeout(() => {
    element.style.transform = `translateX${amount}px`;
  }, delay);
};

moveX(button, 600, 2000);
