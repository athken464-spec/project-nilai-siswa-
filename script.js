let nilaiSiswa = [
  { nama: "Andi", nilai: 60 },
  { nama: "Budi", nilai: 70},
  { nama: "Chandra", nilai: 80 },
  { nama: "Dina", nilai: 90 },
  { nama: "Eka", nilai: 95 }
];


console.log("\n ----foreach----");
nilaiSiswa.forEach((siswa) => {
  console.log(`nama: ${siswa.name}, nilai: ${siswa.nilai}`);
});


console.log("\n ----filter----");

let nilailulus = nilaiSiswa.filter((nilaiSiswa) => nilaiSiswa.nilai >= 75);
console.log(nilailulus)

console.log("\n ---- map ----");
let namaSiswa = nilaiSiswa.map((nilaiSiswa) => {
     return nilaiSiswa.nama;
  
});
console.log(namaSiswa);

console.log("\n---- find ----");

let nilaiFind = nilaiSiswa.find((nilaiSiswa) => nilaiSiswa.nilai >= 90);
console.log(nilaiFind);


