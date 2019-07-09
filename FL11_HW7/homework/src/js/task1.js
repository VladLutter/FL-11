let user = 'user@gmail.com',
	admin = 'admin@gmail.com',
	passwordUser = 'UserPass',
	passwordAdmin = 'AdminPass',
	inputEmail = 'Please input email',
	inputPass = 'Please input password',
	inputOldPass = 'Please input old password',
	inputNewPass = 'Please input new password',
	inputAgainPass = 'Please input new password again',
	messageEmpty = 'Canceled',
	messageLessEmail = 'I don\'t know any emails having name length less than 6 symbols',
	messegeWrongEmail = 'I don’t know you',
	messageWrongPass = 'Wrong password',
	messageChangePass = 'Do you want to change your password?',
	messageCancelChange = 'You have failed the change',
	messageShortPass = 'It\'s too short password. Sorry',
	messageWrongNewPass = 'You wrote the wrong password',
	messageCorrectNewPass = 'You have successfully changed your password',
	minEmailLength = 6,
	minPassLength = 5,
	verifyEmail = false,
	email = '',
	pass = '',
	change = '',
	oldpass = '',
	newpass = '',
	againpass = '';

email = prompt(inputEmail, '');
console.log(email);

if (email===null || email==='') {
	alert(messageEmpty)
} else {
	if (email.length<minEmailLength) {
		alert(messageLessEmail)
		} else {
			if (email===user || email===admin) {
				verifyEmail = true

				pass = prompt(inputPass, '');
				if (pass===null || pass==='') {
						alert(messageEmpty)
				} else {
					if (pass===passwordUser || pass===passwordAdmin) {
					change = confirm(messageChangePass)
					if (change===true) {
						oldpass = prompt(inputOldPass, '')
						if (oldpass===pass) {
							newpass = prompt(inputNewPass, '')
								if (newpass.length<minPassLength) {
									alert(messageShortPass)
									} else {
										againpass = prompt(inputAgainPass, '')
										if (againpass===newpass) {
												alert(messageCorrectNewPass)
											} else {
												alert(messageWrongNewPass)
											}
									}
							} else {
								alert(messageWrongPass)
							}
						} else {
							alert(messageCancelChange)
						}					
					} else {
						alert(messageWrongPass)
					} 
				}
			} else {
				alert(messegeWrongEmail)
			}
		}
}