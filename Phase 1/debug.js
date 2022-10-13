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

// const moveX = (element, amount, delay) => {
//   setTimeout(() => {
//     element.style.transform = `translateX${amount}px`;
//   }, delay);
// };

// moveX(button, 600, 2000);

// if a function starts with uppercase letters it is a constructor function

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this); // this is now referring to this function
}

// this method is now defined in the prototype
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};
// this method is now defined in the prototype

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;
};

const color1 = new Color(56, 75, 21);

const color2 = new Color(0, 0, 0);

color1.hex();

// Classes
