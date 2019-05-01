"use strict";
let play = prompt("Do you want to play?");
let userHealth = 40;
let grantsHealth = 10;
let userWins = 0;
let grantsWins = 0;
let grantsDamage = 0;
let userDamage = 0;
let userChoice;
let name;

function startGame () {
    if (play === "yes") {
        name = prompt("Enter your character name");
        console.log("The user said yes");
        startCombat();
    } else {
        return;
    }
}

     function startCombat () {
    while (userWins < 3 && grantsWins < 1) {
        userChoice = prompt("Would you like to attack or quit?")
        if (userChoice === "attack") {
            getDamage();
            userHealth = userHealth - userDamage;
            grantsHealth = grantsHealth - grantsDamage;
            console.log(`${name} has ${userHealth} health left.`);
            console.log(`Grant has ${grantsHealth} health left.`);

            if (grantsHealth <= 0) {
                userWins++;
                grantsHealth = 10;
                console.log(`user has ${userWins} wins`)
            } else if (userHealth <= 0) {
                grantsWins++;
                console.log("Grant wins! You lose!");
                break;
            }
            if (userWins === 3) {
                console.log("You win!")
                break;
            }
        } else {
            return;

    }
} 
 
    function getDamage () {
            userDamage = Math.floor((Math.random() * 5) + 1);
            grantsDamage = Math.floor((Math.random() * 5) + 1);
    }

}
    startGame();
