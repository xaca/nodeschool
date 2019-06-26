var pets = ["cat","dog","rat"];
for (const key in pets) {
    pets[key] =  pets[key] + "s";
}
console.log(pets);