const const2 = 2;
const const100 = 100;
function Fighter(fighter){
  let name = fighter.name;
  let damage = fighter.damage
  let hp = fighter.hp;
  let strength = fighter.strength;
  let agility = fighter.agility;
  let health = hp;
  let wins = 0;
  let losses = 0;
  return {
    getName: function(){
      return name;
    },
    getDamage: function(){
      return damage;
    },
    getHealth: function(){
      return health;
    },
    getStrength: function(){
      return strength;
    },
    getAgility: function(){
      return agility;
    },
    logCombatHistory: function () {
      console.log(`Name: ${this.getName()}, Wins: ${wins},Losses: ${losses}`);
    },
    dealDamage: function(attackersDamage){
      health -= attackersDamage;
    },

    attack: function(defender){
      let attackSuccess = defender.getStrength() + defender.getAgility() < Math.random() * const100;
      if (attackSuccess) {
        defender.dealDamage(this.getDamage());
        console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
      } else {
        console.log(`${this.getName()} attack missed`);
      }

    },

    heal: function(healthPoint){
      health += healthPoint;
      if (health > hp) {
        health = hp;
      }
    },

    addWin: function(){
      wins ++;
    },

    addLoss: function(){
      losses ++;
    }
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() === 0) {
    console.log(`${fighter1.getName()} is dead and can't fight`);
  } else if (fighter2.getHealth() === 0) {
    console.log(`${fighter2.getName()} is dead and can't fight`);
  } else {
    let i = const2;
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      let attackerNumber = i % const2;
      let defenderNumber = (i + 1) % const2;
      arguments[attackerNumber].attack(arguments[defenderNumber]);
      i ++;
    }
    if (fighter1.getHealth()) {
      console.log(`${fighter1.getName()} has won!`);
      fighter1.addWin();
      fighter2.addLoss();
    } else {
      console.log(`${fighter2.getName()} has won!`);
      fighter2.addWin();
      fighter1.addLoss();
    }
  }
 }

 // const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
 // const fighter2 = new Fighter({name: 'Comodus', damage: 25, hp: 100, strength: 30, agility: 25});
