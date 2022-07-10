const appendZero = (int: number) => {
  return int > 9 ? `${int}` : `0${int}`;
};

const secondsToMinute = (second: number) => {
  const minutes = Math.floor(second / 60);
  const finalSeconds = second - 60 * minutes;

  return `${appendZero(minutes)}:${appendZero(finalSeconds)}`;
};

export { secondsToMinute };
