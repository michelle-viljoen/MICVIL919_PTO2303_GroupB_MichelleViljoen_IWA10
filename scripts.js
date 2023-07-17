const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || `ID ${futureId} not created yet`)

copied = holidays[6].name
copied = {name: 'X-Mas', id: 6, date: new Date (`25 December ${currentYear}`)}
correctDate = copied.date
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) holidays[6].date = correctDate
if (holidays[6].id === copied.id) {
console.log (holidays[6].id), console.log(copied.id) }
else {console.log(false)}
console.log('ID change:', holidays[6].id != copied.id || copied.id)
console.log('Name change: ', holidays[6].name != copied.name || copied.name)
console.log('Date change:', holidays[6].date != correctDate || (`${correctDate.getDate()}/${correctDate.getMonth()}/${correctDate.getFullYear()}`))



// finding the time stamp of the first holiday
    const firstHolidayTimestamp = [
     new Date(holidays[0].date).getTime(),
     new Date(holidays[1].date).getTime(),
     new Date(holidays[2].date).getTime(),
     new Date(holidays[3].date).getTime(),
     new Date(holidays[4].date).getTime(),
     new Date(holidays[5].date).getTime(),
     new Date(holidays[6].date).getTime(),
     new Date(holidays[7].date).getTime(),
     new Date(holidays[8].date).getTime(),
    ]
    console.log(Math.min.apply(Math, firstHolidayTimestamp))

// finding the time stamp of the last holiday
    const lastHolidayTimestamp = [
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
   ]
   console.log(Math.max.apply(Math, lastHolidayTimestamp))

 // finding the day and month belonging to the first holiday  
let firstDay = (new Date (Math.min.apply(Math, firstHolidayTimestamp)).getDate())
if (firstDay <10) firstDay = '0' + firstDay 

let firstMonth = (new Date (Math.min.apply(Math, firstHolidayTimestamp)).getMonth()+1)
if (firstMonth <10) firstMonth = '0' + firstMonth

// finding the day and month belonging to the last holiday 
let lastDay = (new Date (Math.max.apply(Math, lastHolidayTimestamp)).getDate())
if (lastDay <10) lastDay = '0' + lastDay

let lastMonth = (new Date (Math.max.apply(Math, lastHolidayTimestamp)).getMonth()+1)
if (lastMonth <10) lastMonth = '0' + lastMonth

// outputs first and last holidays as dd/mm/yyyy
console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

// selects a random holiday with a date not exceeding an ID no. already created
const randomHoliday = Math.round(Math.random()*futureId)
console.log(holidays[randomHoliday].name)