// Zadatak 1. 
// Napisi program koji ovisno o varijabli time mogucih vrijednosti ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, PREDVECER, 
// NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. Unos time varijable neka bude preko konzole, te ako korisnik nije unio 
// ni jednu od mogucnosti neka ispis bude: Koje je to doba dana? Program napisi uz pomoc if-a i switch case-a. 


var time = process.argv[2]

if (time === "zora" || time === "jutro" || time === "prijepodne"){
    console.log("Dobro jutro!");
} else if (time === "popodne" || time === "poslijepodne"){
    console.log("Dobar dan!");
} else if (time === "predvečer" || time === "noć"){
    console.log("Dobra večer!");
} else {
    console.log("Koje je to doba dana?");
}

switch (time) {
    case "zora":
    case "jutro":
    case "prijepodne":
        console.log("Dobro jutro!");
        break
    case "popodne":
    case "poslijepodne":
        console.log("Dobar dan!");
        break
    case "predvečer":
    case "noć":
        console.log("Dobra večer!");
        break
    default:
        console.log("Koje je to doba dana?");
}


// Zadatak 2. 
// Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, te napisi ternarni izraz koji bira vrijednosti MALOLJETAN 
// i PUNOLJETAN. Potom za MALOLJETAN ispisi "Korisnik je maloljentan", a za punoljetan "Korisnik je punoljetan". 
// Ako korisnik nije unio broj napisi "Pogresan unos!". 

var dob = +process.argv[2];
var punoljetnost = dob >= 18 ? "Korisnik je punoljetan." : "Korisnik je maloljetan.";
var dobnaSkupina = !dob ? "Pogrešan unos." : punoljetnost;
console.log(dobnaSkupina);


// Zadatak 3.
// Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, program racuna da je korisnik unio broj 7. 
// Program zatim ispisuje "Tvoj sretni broj je ___" i potom preko Math.random funkcije izvlaci cijeli broj od 0 do 9. 
// Ukoliko je izvuceni broj identican korisnikovom sretnom broju ispisi "Jackpot!", a u suprotnom "Vise srece drugi put!". 
// Napomena: Ukoliko ne znate koristiti Math.random pokusajte guglati kako se koristi.

var chosenNumber = +process.argv[2] || 7;
var randomNumber = Math.floor(Math.random() * 10);
console.log(`Tvoj sretni broj je ${randomNumber}`);

if (chosenNumber === randomNumber) {
    console.log("Jackpot!");
} else {
    console.log("Više sreće drugi put!");
}

switch (true) {
    case chosenNumber === randomNumber:
        console.log("Jackpot!");
        break
    default:
        console.log("Više sreće drugi put!");
}

