var str = "Banana, Kiwi, Orange, Berries,Apple";
console.log("Length : "+str.length);
console.log("FRom Index 8 to 14 : "+str.slice(8,14));
console.log("Four chars from last : "+str.slice(-5,-2)); //From last - indexes
console.log("From Index 14 to end: "+str.slice(14)); //rest all
console.log("Substring : "+str.substring(14,20));
console.log("Substring without second value : "+str.substring(14));

//Similar to slice(),but the second parameter specifies the length of the extracted part.
console.log("FRom Index 8 with 14 chars : "+str.substr(8,14));
console.log("Substr from -5 last : "+str.substr(-5));

console.log("Replacing : "+str.replace("Berries", "Strawberries"));
console.log("Replacing : "+str.replace("BERRIES", "Strawberries"));
console.log("Replacing : "+str.replace(/BERRIES/i, "Strawberries")); // No Quotes: i - insensitive:
console.log("Find index of Kiwi : "+str.lastIndexOf("Kiwi"));

var s="2"
console.log("Padding : " + s.padStart(4,0));
console.log("Padding : " + s.padEnd(4,0));

