const totalDistance = (start, end) => {
  //inisiasi
  let speed = 6;
  let totalDistance = 0;

  //menentukan awal - akhir
  const startDate = new Date(2020, 05, 21, 10, 12, 21).getTime();
  const endDate = new Date(2020, 05, 21, 12, 00, 00).getTime();

  //mencari perbedaan waktu total
  const diffSecond = (endDate - startDate) / 1000;
  const time = (sec) => new Date(startDate + sec * 1000);

  //perulangan
  for (var i = 1; i <= diffSecond; i++) {
    let timeInMinute = i / 60;
    const currentTime = `${time(i).getHours()}:${time(i).getMinutes()}:${time(
      i
    ).getSeconds()}`;

    if (timeInMinute === 5) {
      console.log(currentTime);
      console.log(timeInMinute, "minutes bertamabah 2ms");
      speed += 2;
    }

    if ((timeInMinute - 5) % 10 === 0) {
      if (timeInMinute !== 5) {
        console.log(currentTime);
        console.log(timeInMinute, "minutes bertamabah 2ms");
        speed++;
      }
    }
    totalDistance += speed;
  }
  return totalDistance;
};
module.export = totalDistance;
