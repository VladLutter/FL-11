class Fighter {
	constructor ({name: inpName, damage: inpDamage, hp: inpHealth, agility: inpAgility}) {

		this.name = inpName || 'No name!';
		this.damage = inpDamage || 0;
		this.health = inpHealth || 0;
		this.agility = inpAgility || 0;
		this.win = 0;
		this.loss = 0;
	}

	getName() {			
		return this.name;
	}

	getDamage() {
		return this.damage;		
	}

	getHealth() {
		return this.health;		
	}

	getAgility() {
		return this.agility;	
	}


	logCombatHistory() {
		let mess = `Name ${this.getName()}, Wins: ${this.win}, Losses: ${this.loss}`;
		return console.log(mess);
	}

	heal(healCount) {
		let maxHp = 100;
		if (this.health + healCount > maxHp) {
			this.health = maxHp;
		} else {
			this.health = this.health + healCount;
		}
	}

	dealDamage(damage) {
		this.health -= damage;
		if (this.health < 0) {
			this.health = 0;
		}
	}

	addWins() {
		this.win += 1;
	}

	addLoss() {
		this.loss += 1;
	}

	attack(person) {
		let maxChanceAttack = 100;
		let probabilityAttack = Math.floor(Math.random() * (maxChanceAttack - person.getAgility()));

		if (person.getAgility() <= probabilityAttack) {
			person.dealDamage(this.getDamage());
			console.log(`${this.getName()} make ${this.getDamage()} damage to ${person.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	}
}


function battle(fighter1, fighter2) {
	if (fighter1.getHealth() === 0) {
		return console.log(`${fighter1.getName()} is dead and can't fight.`);
	} else if (fighter2.getHealth() === 0) {
		return console.log(`${fighter2.getName()} is dead and can't fight.`);
	}
	
	fighter1.attack(fighter2);
	if (fighter2.getHealth() === 0) {
		fighter2.addLoss();
		fighter1.addWins();
		return console.log(`${fighter2.getName()} is dead and can't fight.`);
	}
	
	fighter2.attack(fighter1);
	if (fighter1.getHealth() === 0) {
		fighter1.addLoss();
		fighter2.addWins();
		return console.log(`${fighter1.getName()} is dead and can't fight.`);
	}
	
	return battle(fighter1, fighter2);
}

const myFighter1 = new Fighter({name: 'Paul', damage: 15, hp: 80, agility: 27});
const myFighter2 = new Fighter({name: 'Georg', damage: 25, hp: 90, agility: 36});

battle(myFighter1, myFighter2);