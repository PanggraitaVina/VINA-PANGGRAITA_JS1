// Contoh program JavaScript dengan if, else, dan nested if

// Deklarasi variabel
var nilai = 20;

// Menggunakan if, else untuk mengecek apakah nilai lebih besar atau sama dengan 70
if (nilai >= 100) {
    console.log("Anda lulus!"); // Jika kondisi terpenuhi
} else {
    console.log("Anda tidak lulus."); // Jika kondisi tidak terpenuhi
}


// Menggunakan nested if untuk mengecek tingkatan nilai
if (nilai >= 100) {
    console.log("Anda mendapatkan A"); // Jika nilai lebih besar atau sama dengan 90
} else if (nilai >= 80) {
    console.log("Anda mendapatkan B"); // Jika nilai lebih besar atau sama dengan 80, tetapi kurang dari 90
} else if (nilai >= 60) {
    console.log("Anda mendapatkan C"); // Jika nilai lebih besar atau sama dengan 70, tetapi kurang dari 80
} else {
    console.log("Anda mendapatkan D"); // Jika nilai kurang dari 70
}


// Contoh program JavaScript dengan switch case

// Fungsi ini mengambil nilai dari user untuk hari dalam seminggu
var hari = (2);

// Pernyataan switch case untuk mengevaluasi nilai 'hari'
switch (hari) {
  case "1":
    console.log("Hari ini adalah Senin.");
    break;
  case "2":
    console.log("Hari ini adalah Selasa.");
    break;
  case "3":
    console.log("Hari ini adalah Rabu.");
    break;
  case "4":
    console.log("Hari ini adalah Kamis.");
    break;
  case "5":
   console.log("Hari ini adalah Jumat.");
    break;
  case "6":
    console.log("Hari ini adalah Sabtu.");
    break;
  case "7":
    console.log("Hari ini adalah Minggu.");
    break;
  default:
    console.log("Anda memasukkan input yang tidak valid.");
    break;
}


for (let i = 1; i <= 12; i++) {
    console.log(i);
  }
  
// Menggunakan perulangan for untuk mencetak angka dari 10 hingga 15
for (let i = 10; i <= 15; i++) {
    console.log(i);
  }

// Menggunakan perulangan while untuk mencetak angka dari 10 hingga 15
let j = 10;
while (j <= 15) {
  console.log(j);
  j++;
}

// Menggunakan perulangan do-while untuk mencetak angka dari 10 hingga 15
let k = 10;
do {
  console.log(k);
  k++;
} while (k <= 15);

// Definisikan sebuah fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    var luas = (alas * tinggi) / 2;
    return luas;
  }
  
// Gunakan fungsi untuk menghitung luas segitiga dengan alas 7 dan tinggi 12
  var alasSegitiga = 7;
  var tinggiSegitiga = 12;
  var hasilLuas = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  
// Tampilkan hasilnya ke konsol
  console.log("Luas segitiga dengan alas", alasSegitiga, "dan tinggi", tinggiSegitiga, "adalah:", hasilLuas);

  