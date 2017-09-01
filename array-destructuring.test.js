const arr = [1, 2, 3];

test("récupérer le premier élément d'un tableau", () => {
  const [head] = arr;
  expect(head).toBe(1);
});

test("récupérer les deux premiers éléments d'un tableau", () => {
  const [first, second] = arr;
  expect(second).toBe(2);
});

test("récupérer un élément inexistant d'un tableau", () => {
  const [first, second, third, fourth] = arr;
  expect(fourth).toBeUndefined();
});

test("récupérer un élément inexistant avec une valeur par défaut", () => {
  const [first, second, third, fourth = 4] = arr;
  expect(fourth).toBe(4);
});

test("passer un élément", () => {
  const [first,, third] = arr;
  expect(third).toBe(3);
});

test("récupérer la queue d'un tableau", () => {
  const [head, ...tail] = arr;
  expect(tail).toEqual([2, 3]);
});

test("concaténer deux tableaux", () => {
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  first.push(...second);
  expect(first).toEqual([1, 2, 3, 4, 5, 6]);
});

test("trouver le maximum d'un tableau de nombres", () => {
  const numbers = [12, 42, 5, 33, 21];
  const max = Math.max(...numbers);
  expect(max).toBe(42);
});
