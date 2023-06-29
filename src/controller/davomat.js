function getDaysOddInMonthUTC(month, year) {
  month = month - 1;
  var date = new Date(Date.UTC(year, month, 1));
  var days = {};
  while (date.getUTCMonth() === month) {
    if (
      new Date(date).toUTCString().split(" ").slice(0, 1).toString() === "Mon,"
    ) {
      days[date.toISOString().split("T").slice(0, 1)] = false;
    } else if (
      new Date(date).toUTCString().split(" ").slice(0, 1).toString() === "Wed,"
    ) {
      days[date.toISOString().split("T").slice(0, 1)] = false;
    } else if (
      new Date(date).toUTCString().split(" ").slice(0, 1).toString() === "Fri,"
    ) {
      days[date.toISOString().split("T").slice(0, 1)] = false;
    }
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

function getDaysEvenInMonthUTC(month, year) {
  month = month - 1;
  var date = new Date(Date.UTC(year, month, 1));
  var days = {};
  while (date.getUTCMonth() === month) {
    if (
      new Date(date).toUTCString().split(" ").slice(0, 1).toString() === "Tue,"
    ) {
      days[date.toISOString().split("T").slice(0, 1)] = false;
    } else if (
      new Date(date).toUTCString().split(" ").slice(0, 1).toString() === "Thu,"
    ) {
      days[date.toISOString().split("T").slice(0, 1)] = false;
    } else if (
      new Date(date).toUTCString().split(" ").slice(0, 1).toString() === "Sat,"
    ) {
      days[date.toISOString().split("T").slice(0, 1)] = false;
    }
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return days;
}

export const getFullDaysOdd = function (start, end) {
  const data = [];
  let oldTime = 0
  for (
    var dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    if (dt.getMonth() !== oldTime) {
      data.push(getDaysOddInMonthUTC(
        new Date(dt).getMonth() + 1,
        new Date(dt).getFullYear()
        ));
        oldTime = dt.getMonth();
    }
  }
  return data;
};

export const getFullDaysEven = function (start, end) {
  const data = [];
  let oldTime = 0
  for (
    var dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    if (dt.getMonth() !== oldTime) {
      data.push(getDaysEvenInMonthUTC(
        new Date(dt).getMonth() + 1,
        new Date(dt).getFullYear()
        ));
        oldTime = dt.getMonth();
    }
  }
  return data;
};

// let month = 10, year = 2022;
// var date = new Date(Date.UTC(year, month, 1));
// var days = {};
// while (date.getUTCMonth() === month) {
//   if(new Date(date).toUTCString().split(" ").slice(0,1).toString() === "Tue,"){
//     days[date.toISOString().split("T").slice(0,1)] = false;
//   }
//   date.setUTCDate(date.getUTCDate() +1);
// }
// console.log(days);

// console.log(getFullDaysOdd("2022-10-10", "2023-01-6"));

