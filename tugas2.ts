/* Karakter Utama Kerajaan Fantasia
Nama pahlawan: "Arion"
Umur: 30 tahun
Status apakah pahlawan siap bertarung: true (ya) */

let pahlawan: string = "Arion";
let umur: number = 30;
let siapBertarung: boolean = true;

// Sumber daya kerajaan
let emas: number = 5000;
let persediaanMakanan: number = 120;
let prajurit: number = 200;

// Buat operasi matematika untuk menambah emas kerajaan dari hasil petualangan
let emasDikumpulkanArion: number = 1500;
emas = emas + emasDikumpulkanArion;
console.log(`Total emas kerajaan sekarang: ${emas}`);

// Mendapatkan 75 poin pengalaman dan diminta membuat variable
let poinPengalamanBertarung: number = 75;

console.log("===========================");

// Membuat sebuah fungsi(Procedure) mengurangi kesehatan prajurit
// Karena perintahnya prosedur, maka fungsi ini tidak mengembalikan nilai (void)
const kurangiKesehatan = (jumlahPrajurit: number, poinKesehatanHilang: number): void => {
  let poinKesehatan = 100;
  let sisaPoinKesehatan = poinKesehatan - poinKesehatanHilang;
  
  if (sisaPoinKesehatan === 0) {
    console.log(`Semua ${jumlahPrajurit} prajurit tidak bisa bertarung!`);
  } else {
    console.log(`Sisa poin kesehatan tiap prajurit adalah ${sisaPoinKesehatan} dan masih bisa bertarung`);
  }
}

// Bisa bertarung
kurangiKesehatan(prajurit, 10);
// Tidak bisa bertarung
kurangiKesehatan(prajurit, 100);

console.log("===========================");

// Fungsi rangkuman Misi Arion (tidak mengembalikan nilai yaitu prosedur)
// Karena ini rangkuman misi Arion, maka emas yang dikumpulkan bukan total emas kerajaan tetapi emas yang didapatkan Arion
const rangkumanMisiArion = ():void => {
  console.log(`Nama Pahlawan: ${pahlawan}`);
  console.log(`Emas yang dikumpulkan Arion: ${emasDikumpulkanArion}`);
  console.log(`Poin pengalaman yang didapatkan: ${poinPengalamanBertarung}`);
}

rangkumanMisiArion();








