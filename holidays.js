const express = require('express');
const holidays = require('poland-public-holidays');
const app = express();

app.get('/is-holiday', (req, res) => {
    const today = new Date();
    const result = holidays.IsHoliday(today);

    res.json({
        isHoliday: !!result,
        name: result ? result.Name : ''
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
