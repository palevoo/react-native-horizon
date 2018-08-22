import faker from 'faker'
import times from 'lodash/times'

const CATEGORIES = [
  'Autobots',
  'Desipticons',
  'MetalDaunitos',
  'IronAAAs',
  'Droids',
  'Fartmakers',
  'QWERTYs'
]

const getRandomCategory = categories => {
  let random = Math.floor(Math.random() * (categories.length + 1))
  return categories[random]
}

const data = times(20, i => ({
  email: faker.internet.email(),
  id: i,
  image: `https://robohash.org/${Math.floor(Math.random() * 100000)}`,
  name: faker.internet.userName(),
  category: getRandomCategory(CATEGORIES),
  city: faker.address.city(),
  color: faker.commerce.color(),
  price: faker.commerce.price()
}))

const APP_NAME = 'React Native Horizon'

export { data, CATEGORIES, APP_NAME }
