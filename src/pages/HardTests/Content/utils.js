const formatTime = (time) => {
  if (time < 60) {
    return time + " sekund";
  } else {
    return Math.floor(time / 60) + " min " + (time % 60) + " sek";
  }
};

export { formatTime };
