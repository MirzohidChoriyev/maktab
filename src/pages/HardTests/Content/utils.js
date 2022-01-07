const formatTime = (time) => {
  if (time < 60) {
    return time + " sekund";
  } else {
    return Math.floor(time / 60) + " minut" + (time % 60) + " sekund";
  }
};

export { formatTime };
