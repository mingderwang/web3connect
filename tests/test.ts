import test from 'ava';

import {sum, subtract} from '../dist/main';

test('sum', (t) => {
  t.is(sum(0, 0), 0);
  t.is(sum(2, 2), 4);
  t.is(sum(2, 3), 5);
});

test('subtract', (t) => {
  t.is(subtract(0, 0), 0);
  t.is(subtract(4, 2), 2);
  t.is(subtract(5, 2), 3);
});
