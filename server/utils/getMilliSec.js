const milliseconds = (string) => {
  const regex = /([0-9])h([0-9])m([0-9])s/;
  const match = regex.exec(string);
  const timeVal = (match[1] * 60 * 60 + match[2] * 60 + match[3]) * 1000;
  return timeVal;
};
module.exports = milliseconds;
