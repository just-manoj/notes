export const dateFormat = (date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const dayFormat = (date) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === today.toDateString()) return "Today";
  else if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
  else return dateFormat(date);
};

export const timeFormat = (date) => {
  let hour = date.getHours();
  const AmPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;

  let minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;

  return `${hour}:${minute} ${AmPm}`;
};
