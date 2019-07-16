function getNumbers(args) {
	let arr = [], i;
	for (i = 0; i < args.length; i++) {
		if (args[i] >= 0) {
			arr.push(+args[i])
		}
	}
	
	return;

}

getNumbers('n1um3ber95');





function findTypes(...inp) {
	let i, a = inp, obj = {}, isType;
	for (i = 0; i < a.length; i++) {

		isType = typeof a[i];

		if (obj.hasOwnProperty(isType)) {
			obj[isType] = obj[isType] + 1;
		} else {
			obj[isType] = 1;
		}
	}

	return;
}

findTypes('number')
findTypes(null, true, 'hello')



function executeforEach(arr, func) {
	let i=0;
	for (i; i < arr.length; i++) {
		func(arr[i]);
	}
}



function mapArray(arr, func) {
	let transf = [];
	executeforEach(arr, function(el) {
		transf.push(func(el));
	});

	return transf;
}


function filterArray(arr, func) {
	let filter = [];
	executeforEach(arr, function(el) {
		if (func(el)) {
			filter.push(el);
		}
	});

	return filter;
}



function showFormattedDate (date){
	let inputDate = date,
		day = inputDate.toLocaleString('en-Us', {month: 'short'}),
		month = inputDate.toLocaleString('en-Us', {day: 'numeric'}),
		year = inputDate.getFullYear(),
		strDate = `Date: ${day} ${month} ${year}`;

	return strDate;
}

showFormattedDate(new Date('2019-01-27T01:10:00'))



function canConvertToDate (date){
	let etalonDate = new Date(date),
		isCorrect = !isNaN(Date.parse(etalonDate));

	return isCorrect;
}

canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-01-18T00:00:00');



function daysBetween (date1, date2){
	const msInDay = 8.64e+7;
	let firstDate = date1.getTime(),
		secondDate = date2.getTime(),
		diffDate = Math.round((secondDate - firstDate)/msInDay);

	return diffDate;
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))



let data = [
        {
            '_id': '5b5e3168c6bf40f2c1235cd6',
            'index': 0,
            'birthday': '2016-03-18T00:00:00',
            'eyeColor': 'green',
            'name': 'Stein',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e3168e328c0d72e4f27d8',
            'index': 1,
            'birthday': '1991-02-11T00:00:00',
            'eyeColor': 'blue',
            'name': 'Cortez',
            'favoriteFruit': 'strawberry'
        },
        {
            '_id': '5b5e3168cc79132b631c666a',
            'index': 2,
            'birthday': '1984-04-17T00:00:00',
            'eyeColor': 'blue',
            'name': 'Suzette',
            'favoriteFruit': 'apple'
        },
        {
            '_id': '5b5e31682093adcc6cd0dde5',
            'index': 3,
            'birthday': '1994-04-17T00:00:00',
            'eyeColor': 'green',
            'name': 'George',
            'favoriteFruit': 'banana'
        }
    ];



function getAmountOfAdultPeople(data) {
    let age = 18, days = 365, currentDay = new Date();

    let isAdult = filterArray(data, function (i) {
        let compareDate = new Date(i['birthday']);
        return Math.round(daysBetween(currentDay, compareDate) / days) > age;
    }).length;

    return isAdult;
}

getAmountOfAdultPeople(data);



function keys(obj) {
    let keysArr = [];

    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            keysArr.push(key);
        }
    }

    return keysArr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});



function values(obj) {
    let valuesArr = [];

    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            valuesArr.push(obj[key]);
        }
    }

    return valuesArr;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});