function timeDifference(previous) {
  let current = new Date().getTime();
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    let time = Math.round(elapsed / 1000);
    return time.toString() + (time > 1 ? " seconds ago" : " second ago");
  } else if (elapsed < msPerHour) {
    let time = Math.round(elapsed / msPerMinute);
    return time.toString() + (time > 1 ? " minutes ago" : " minute ago");
  } else if (elapsed < msPerDay) {
    let time = Math.round(elapsed / msPerHour);
    return time.toString() + (time > 1 ? " hours ago" : " hour ago");
  } else if (elapsed < msPerMonth) {
    let time = Math.round(elapsed / msPerDay);
    return (
      "approximately " + time.toString() + (time > 1 ? " days ago" : " day ago")
    );
  } else if (elapsed < msPerYear) {
    let time = Math.round(elapsed / msPerMonth);
    return (
      "approximately " +
      time.toString() +
      (time > 1 ? " months ago" : " month ago")
    );
  } else {
    let time = Math.round(elapsed / msPerYear);
    return (
      "approximately " +
      time.toString() +
      (time > 1 ? " years ago" : " year ago")
    );
  }
}

export { timeDifference };
