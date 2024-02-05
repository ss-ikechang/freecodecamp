const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// この行の下にあるコードのみを変更

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;


const { today: { low: lowToday, high:highToday }} = LOCAL_FORECAST;
// この行の上にあるコードのみを変更