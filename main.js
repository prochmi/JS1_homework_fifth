

const parseDate = (date) => {
    return {
    day: Number(date.slice (0,2)),
    month: Number (date.slice (3,5)),
    year: Number (date.slice (6 ))  
    }
}

console.log(parseDate('08.03.2023'))

const formatDate = (dateTwo) => {
    let {day , month, year} = dateTwo

    return String(day).padStart(2,'0')+ '.' + String(month).padStart(2,'0') + '.' + String(year).padStart(4,'0')

}

console.log(formatDate({ day: 6, month: 4, year: 2021 }))


const  round = (number) => {
const celaCisla = Math.trunc(number)
const necelaCisla = number - celaCisla

if (Math.abs(necelaCisla === 0.5)) {
    if(celaCisla % 2 === 0) {
        return celaCisla
    }else {
        return celaCisla +1
    }

}else{
    return Math.round(number) 
}
}

console.log(round(2.3))