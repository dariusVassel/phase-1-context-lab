/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord([str1, str2, str3, num]){
    let obj = {
        firstName : str1,
        familyName : str2,
        title : str3,
        payPerHour : num,
        timeInEvents : [],
        timeOutEvents : []
    }
    return obj
}

function createEmployeeRecords(arrayOfArray){
    let returnArr = []
	for (const array of arrayOfArray) {
        returnArr.push((createEmployeeRecord(array)));
      } 
	return returnArr
}

function createTimeInEvent(dateStamp){
    const words = dateStamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(words[1]),
        date: words[0]
    })
    return this
}

function createTimeOutEvent(dateStamp){
    const words = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(words[1]),
        date: words[0]
    })
    return this
}

function hoursWorkedOnDate(dateStamp){
    
	let timeOut = this.timeOutEvents.find(e =>
		e.date === dateStamp)
	let timeOutHour = (timeOut.hour)
													
    let timeIn = this.timeInEvents.find(e =>
		e.date === dateStamp)
	let timeInHour = (timeIn.hour)

	return((timeOutHour - timeInHour)/100)
}

function wagesEarnedOnDate(dateStamp){
	let hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
    let salary = this.payPerHour
    return (hoursWorked * salary)
}

function calculatePayroll(employeeRecordArr){
    let payable = employeeRecordArr.reduce((acc, employeeRecord) => {
        return acc + allWagesFor(employeeRecord)
    }, 0)

    return payable
}

function findEmployeeByFirstName(employeeRecordArr, firstName) {
    return employeeRecordArr.find(rec => rec.firstName === firstName)
  }


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


