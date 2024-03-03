function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

export function getFormattedDate() {
  const current = new Date();
  const date =
    pad(current.getMonth() + 1, 2) +
    "%2F" +
    pad(current.getDate(), 2) +
    "%2F" +
    current.getFullYear();
  return date;
}
