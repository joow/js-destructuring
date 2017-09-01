const person = {
  name: "SpongeBob",
  age: 31,
  address: {
    number: 124,
    street: "Conch Street",
    city: "Bikini Bottom",
  },
};

test("extraire des données d'un objet", () => {
  const {name, age} = person;
  expect(name).toBe("SpongeBob");
  expect(age).toBe(31);
});

test("extraire une donnée imbriquée", () => {
  const {address: {city}} = person;
  expect(city).toBe("Bikini Bottom");
});

test("extraire une donnée inexistante", () => {
  const {address: {country}} = person;
  expect(country).toBeUndefined();
});

test("extraire une donnée inexistante avec une valeur par défaut", () => {
  const {address: {country = "Pacific Ocean"}} = person;
  expect(country).toBe("Pacific Ocean");
});

test("extraire une donnée inexistante d'un objet imbriqué inexistant", () => {
  const failure = () => {
    const {adress: {country}} = person; // adress doesn't exist, it is spelled address !
  }

  expect(failure).toThrow(TypeError);
});

test("renommer une donnée", () => {
  const {name:nom, age} = person;
  expect(nom).toBe("SpongeBob");
});

test("décomposer les paramètres d'une fonction", () => {
  const summary = ({name, age}) => `${name} is ${age} years old.`;
  expect(summary(person)).toBe("SpongeBob is 31 years old.");
});
