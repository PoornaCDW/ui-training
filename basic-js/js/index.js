// Section 1: Play with Variables 

console.log("Section - 1");
console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

//Section 2: Play with Arrays

cricketPlayers = ["Kiran", "Shri", "Charan", "Ram", "Sam", "Hari", "Krishna", "James", "Abdul", "Gokul", "Arjun"];
console.log("Cricket Players: ", cricketPlayers);

var removedPlayer = cricketPlayers.shift();
console.log("Removed Player: ", removedPlayer);
console.log("Cricket Players: ", cricketPlayers);

console.log("Number of players: ", cricketPlayers.length);

cricketPlayers.push("Hareesh");
console.log("Cricket Players: ", cricketPlayers);

cricketPlayers.sort();
console.log("Cricket Players after sorting: ", cricketPlayers);

var jersyNumber;
for(let players of cricketPlayers) {
    jersyNumber = Math.floor(Math.random() * 100);
    console.log(players, "-", jersyNumber);
}

var upperCasePlayers = cricketPlayers.map(player => player.toUpperCase());

console.log("Cricket Players: ", upperCasePlayers);

//Section 3: Play with Functions

function displayNumbers() {
    for(let i=1; i <= 100; i++)
        console.log(i);
}
displayNumbers();

function displayDate() {
    let currentDate = new Date();
    let currentDay = currentDate.getDate().toString().padStart(2, 0);
    let currentMonth = (currentDate.getMonth()+1).toString().padStart(2, 0);
    let currentYear = currentDate.getFullYear();
    console.log("Today's date: ", currentDay, "/", currentMonth, "/", currentYear);
}
displayDate();

convertToFahrenheit = (celsius) => {
    return celsius* 9 / 5 + 32;
}
console.log("Fahrenheit - ", convertToFahrenheit(25));

var array = [10, 89, 67, 12, 44];
averageOfArray = (array) => { return array.reduce((a, b) => a + b) / array.length };
console.log("Average of the array - ", averageOfArray(array));

stringReverse = (str) => {
    return str.split("").reverse().join("").toString();
}
console.log("Reverse of 'engine' is ",stringReverse("engine"));