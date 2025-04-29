const holidays = require('poland-public-holidays');

export default function handler(req, res) {
  const today = new Date();
  const result = holidays.IsHoliday(today);

  res.status(200).json({
    isHoliday: !!result,
    name: result ? result.Name : ''
  });
}
