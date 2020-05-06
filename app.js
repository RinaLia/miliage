console.log("Cari total Jarak dari jam 10.12.21 sampai 12.00.00");

// Menentukan Awal dan Akhir
const startDate = new Date(2020, 05, 21, 10, 12, 21).getTime() / 1000;
const endDate = new Date(2020, 05, 21, 12, 0, 0).getTime() / 1000;

// Mencari perbedaan waktu total
const diffSecond = endDate - startDate;

// Inisiasi result
let totalDistance = 0;
let speed = 6;

// Perulangan
for (var i = 1; i <= diffSecond; i++) {
  // Cek 5 Menit pertama
  if (i === 300) {
    speed += 2;
  }
  // Cek setiap 10 Menit
  else if (i % 600 === 0) {
    speed += 1;
  }

  totalDistance += speed;
}

console.log("Total Jarak yang di tempuh adalah: ", totalDistance, "m");
