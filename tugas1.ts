// 1. Buatlah 25 variable dalam Typescript beserta tipe variable nya dan harus mencakup semua tipe data primitif pada typescript
// Tipe data primitif dalam Typescript:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// String
let myName: string = "Danendra Dipa Dananjaya";
console.log(myName);

let myHobby: string = "Menonton Film";
console.log(myHobby);

let myJob: string = "Mahasiswa";
console.log(myJob);

let planet: string = "Earth";
console.log(planet);

let country: string = "Indonesia";
console.log(country);

let city: string = "Yogyakarta";
console.log(city);

// Number
let myAge: number = 20;
console.log(myAge);

let year: number = 2024;
console.log(year);

let temperature: number = 36;
console.log(temperature);

let salary: number = 200000000;
console.log(salary);

// Boolean
let isMarried: boolean = false;
console.log(isMarried);

let isStudent: boolean = true;
console.log(isStudent);

let isOwner: boolean = true;
console.log(isOwner);

let isAdmin: boolean = false;
console.log(isAdmin);

let isPresident: boolean = false;
console.log(isPresident);

let isPolice: boolean = false;
console.log(isPolice);

// Null
let selectedItem: null = null;
console.log(selectedItem);

let userProfile: null = null;
console.log(userProfile);

let cart: null = null;
console.log(cart);

let student: null = null;
console.log(student);

// Undefined
let locationRightNow: undefined = undefined;
console.log(locationRightNow);

let userHeight: undefined = undefined;
console.log(userHeight);

let userWeight: undefined = undefined;
console.log(userWeight);

// Symbol
let key1: symbol = Symbol("key1");
console.log(key1);

let key2: symbol = Symbol("key2");
console.log(key2);

// BigInt
// (Karena BigInt dalam dokumentasinya harus ES versi 2020, maka dalam file ini tidak bisa digunakan karena menggunakan ES versi 2016 maka saya comment kodenya)

// let bigInt1: bigint = 921939123122399233n;
// console.log(bigInt1);

console.log("===============");
console.log("Fungsi Matematika");
// 2. Buatlah method untuk melakukan:
// Penjumlahan
const penjumlahan = (jumlah1: number, jumlah2: number): number => {
  return jumlah1 + jumlah2;
};

const hasilPenjumlahan = penjumlahan(5, 20);
console.log(`Hasil Operasi Penjumlahan: ${hasilPenjumlahan}`);

// Pengurangan
const pengurangan = (kurang1: number, kurang2: number): number => {
  return kurang1 - kurang2;
};

const hasilPengurangan = pengurangan(100, 50);
console.log(`Hasil Operasi Pengurangan: ${hasilPengurangan}`);

// Perkalian
const perkalian = (kali1: number, kali2: number): number => {
  return kali1 * kali2;
};

const hasilPerkalian = perkalian(5, 4);
console.log(`Hasil Operasi Perkalian: ${hasilPerkalian}`);


// Pembagian
const pembagian = (bagi1: number, bagi2: number): number => {
  return bagi1 / bagi2;
};

const hasilPembagian = pembagian(10, 2);
console.log(`Hasil Operasi Pembagian: ${hasilPembagian}`);

