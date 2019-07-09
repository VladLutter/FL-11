let min = 0,
	max = 8,
	maxValue = '',
	attemptCount = 3,
	attemptValue = '',
	countPrize = 0,
	countPossible = 100,
	possibleValue = '',
	start,
	gameCycle = true,
	i = 1,
	multiplifer = 2,
	splitTwo = 2,
	splitThree = 3,
	splitFour = 4,

	messagePlay = 'Do you want to play a game?',
	play = confirm(messagePlay);

switch (play) {
	case false:
		alert('You did not become a billionaire, but can');
	break;

	default:

		while (play) {

			maxValue = max + 1;
			let random = Math.floor(Math.random() * (maxValue - min) + min);
			console.log('random' + ' ' + random); //вывод значения RANDOM
			
			if (gameCycle) {
		
			
				for (i; i <= attemptCount; i++) {
					
					attemptValue = attemptCount - i + 1;

					if (i===1) {
						possibleValue = countPossible;
					} else if (i===splitTwo) {
						possibleValue = countPossible/splitTwo;
					} else if (i===splitThree) {
						possibleValue = countPossible/splitFour;
					}

					start = prompt('Choose a roulette pocket number from 0 to ' + max + 
						'\nAttempts left: ' + attemptValue + '\nTotal prize: ' + countPrize + '$' + 
						'\nPossible prize on current attempt: ' + possibleValue + '$');
					start = parseInt(start);
					console.log(i);
						
						if (start===random && i===1) {
							countPrize = countPrize + countPossible;
							break;
						} else if (start===random && i===splitTwo) {
							countPrize = countPrize + countPossible/splitTwo;
							break;
						} else if (start===random && i===splitThree) {
							countPrize = countPrize + countPossible/splitFour;
							break;
						} else if (start!==random) {
							countPrize = countPrize * 1;
						}
				}
			
				if (countPrize > 0) {
					gameCycle = confirm('Congratulation, you won! Your prize is: ' 
						+ countPrize + '$. Do you want to continue?');

				} else {
					break;
				}

				if (countPrize !== 0) {
					max = max + splitFour;
					attemptValue = splitThree;
					countPossible = countPossible * multiplifer;
					possibleValue = possibleValue * multiplifer;
				} else {
					break;
				}
			}
			
		}	
		alert('Thank you for your participation. Your prize is: ' + countPrize + '$');
		play = confirm(messagePlay);
}