import faker from "faker";
import times from "lodash/times";

const CATEGORIES = ["Breakfast", "Lunch", "Vegan", "Bar", "Snacks"];

const getRandomCategory = arr => {
  let random = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
  return arr[random];
};

const data = times(15, i => ({
  email: faker.internet.email(),
  id: i,
  image: faker.image.avatar(),
  name: faker.internet.userName(),
  category: getRandomCategory(CATEGORIES),
  city: faker.address.city(),
  color: faker.commerce.color(),
  price: faker.commerce.price()
}));

export { data, CATEGORIES };
