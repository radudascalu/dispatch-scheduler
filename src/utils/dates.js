const weekendDays = [0, 6];
const holidays = [
  {
    day: 25,
    month: 12,
  },
  {
    day: 1,
    month: 1,
  },
];
const utcCutoffTime = 13;

export const isNotValidDispatchDate = function(date) {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isWeekendDate = weekendDays.includes(date.getDay());
  const isHoliday = holidays.find(
    (h) => h.day == date.getDate() && h.month == date.getMonth() + 1
  );
  const isInThePast = date < today;
  const isPastCutoffTime =
    date.toDateString() == today.toDateString() &&
    utcCutoffTime <= now.getUTCHours();

  return isWeekendDate || isHoliday || isInThePast || isPastCutoffTime;
};

export const getFirstAvailableDispatchDate = function() {
  const date = new Date();
  while (isNotValidDispatchDate(date)) {
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 1);
  }
  return date;
};
