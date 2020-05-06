const totalDistance = require("./src/function");
const total = totalDistance("10.12.21", "12.00.00");

console.log({
  totalDistance: {
    meter: total,
  },
});
