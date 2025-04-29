const holidays = require('poland-public-holidays');

const today = new Date();
const result = holidays.IsHoliday(today);

const response = {
    isHoliday: result ? true : false,
    name: result ? result.Name : ''
};

console.log(JSON.stringify(response));