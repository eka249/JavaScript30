// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter((vent) => {
  vent.year >= 1500 && vent.year <= 1599;
});

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
let fullNames = [];
inventors.map((p) => {
  fullNames.push(`${p.first} ${p.last}`);
});

console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let ordered = inventors.sort((a, b) => {
  return b.year - a.year;
});

console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYearsReduce = inventors.reduce((total, inv) => {
  return total + (inv.passed - inv.year);
}, 0);
console.log("total using reduce", totalYearsReduce);

let totalFor = 0;
for (let i = 0; i <= inventors.length - 1; i++) {
  let life = inventors[i].passed - inventors[i].year;
  totalFor += life;
}

console.log("total using for loop", totalFor);

// 5. Sort the inventors by years lived
let oldest = inventors.sort((first, next) => {
  let firstage = first.passed - first.year;
  let nextage = next.passed - next.year(firstage > nextage) ? 1 : -2;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name

let alpha = people.sort((first, next) => {
  let [LnameF, FnameF] = first.split(", ");
  let [LnameN, FnameN] = next.split(", ");
  return LnameF > LnameN ? 1 : -1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

var transportation = data
  .map((trans) => {
    return {
      count: 1,
      string: trans,
    };
  })

  .reduce((a, b) => {
    a[b.trans] = (a[b.trans] || 0) + b.count;
    return a;
  }, {});

// var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1)

console.log(transportation);
