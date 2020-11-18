import Cart from '../service/Cart';
import Movie from "../domain/Movie";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('card should be filled', () => {
  const cart = new Cart();
  cart.add(new Movie(
    9999,
    'Мстители',
    'The Avengers',
    100,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боек', 'фэнтези', 'приключения'],
    '137'));
  expect(cart.items).toEqual([
    {"author": "The Avengers",
      "city": "США",
      "genre": ["фантастика", "боек", "фэнтези", "приключения"],
      "id": 9999,
      "name": "Мстители",
      "price": 100,
      "tagline": "Avengers Assemble",
      "time": "137 мин. /2:17", "year": 2012
    }
    ]);
});
