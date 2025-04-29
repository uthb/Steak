const express = require("express");
const app = express();
const cors = require("cors");
const holidays = require("poland-public-holidays");
const port = 3000;

app.use(cors());

app.get("/isHolidayToday", (req, res) => {
    const today = new Date();
    const result = holidays.isHoliday(today);

    if (result) {
        res.json({isHoliday: true, name: result.name});
    } else {
        res.json({IsHoliday: false});
    }
});

app.listen(port, () => {
    console.log(`HolidayAPI running at http://localhost:${port}`);
});