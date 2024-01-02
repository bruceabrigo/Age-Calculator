const calculateAge = () => {
    // select document ids onclick
    let day = document.getElementById('day').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value

    // parse values into an integer
    let dayInt = parseInt(day)
    let monthInt = parseInt(month)
    let yearInt = parseInt(year)

    // get current date
    const currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth() + 1
    let currentDay = currentDate.getDate()

    // are user inputs numbers and are they greater than 0
    if (isNaN(dayInt) || isNaN(monthInt) || isNaN(yearInt) || dayInt <= 0 || monthInt <= 0 || yearInt <= 0) {
        alert('Please enter a valid number greater than 0 for day, month, and year.')
    } else {
        // calculate age in years, months, and days
        let ageYears = currentYear - yearInt
        let ageMonths = currentMonth - monthInt
        let ageDays = currentDay - dayInt

        if (ageDays < 0) {
            ageMonths--
            ageDays += new Date(currentYear, currentMonth, 0).getDate()
        }

        // adjust age if current month is earlier than birth month
        if (ageMonths < 0) {
            ageYears--
            ageMonths += 12
        }

        // select innerHTML and update them to day, month, and year values
        document.getElementById('outputYear').innerHTML = ageYears
        document.getElementById('outputMonth').innerHTML = ageMonths
g    }
}
