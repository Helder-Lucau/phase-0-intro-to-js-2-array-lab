// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// add new cat name at the end of the array
function destructivelyAppendCat() {
    cats.push('Ralph');
    return cats;
}
// add new cat name at the beginning of the array
function destructivelyPrependCat() {
    cats.unshift('Bob')
    return cats;
}
// remove last cat name 
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
// remove first cat name
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
// add a new cat name to the front of the new array leaving the cats array unchanged
function appendCat(){
    const newCatsName = [...cats, "Broom"];
    return newCatsName;
}
// add a new cat name to the end of the new array leaving the cats array unchanged
function prependCat(){
    const newCats = ["Arnold", ...cats];
    return newCats;
}
// remove last cat leaving the cats array unchanged
function removeLastCat(){
    const lastCats = cats.slice(0, cats.length -1);
    return lastCats;
}
// remove first cat leaving the cats array unchanged
function removeFirstCat(){
    const firstCats = cats.slice(1);
    return firstCats;
}

