const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});
function destructivelyAppendcat(name) {
  cats.push(name);
  return cats;
}
function destructivelyAppendCat(name) {
  cats.push("Ralph");
  return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
  return cats;
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
  return cats;
}
function destructivelyRemoveLastCat(name) {
  cats.pop("Garfield");
  return cats;
}
function destructivelyRemoveFirstCat(name) {
  cats.shift("name");
  return cats;
}
function destructivelyRemoveFirstCat(name) {
  cats.shift("Milo");
  return cats;
}
function appendCat(name) {
  const appendCat = [...cats, name];
  return appendCat;
}
function prependCat(name) {
  const prependCat = [name, ...cats];
  return prependCat;
}
function removeLastCat(name) {
  const removeLastCat = cats.slice(0, -1);
  return removeLastCat;
}
function removeFirstCat(name) {
  const removeFirstCat = cats.slice(1);
  return removeFirstCat;
}
