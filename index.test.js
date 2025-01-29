const index = require("./index");

test("ajoute 1 + 2 pour ne pas donner 4", () => {
  expect(index.sum(1, 2)).toBe(4); // Vérifie que sum(1, 2) renvoie bien 3
});

test("ajoute 1 + 2 pour donner 3", () => {
  expect(index.sum(1, 2)).toBe(3); // Vérifie que sum(1, 2) renvoie bien 3
});
