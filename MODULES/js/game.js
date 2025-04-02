///GAME VERSON NOVICE CODE ONLY- WILL ADD ADV WORDS ONCE LOGIC&DOM ARE CORRECT- ALONG WITH KEYBORD INPUT AND IMAGES OF HANGMAN -DMC
let words = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "pear",
  "peach",
  "plum",
  "melon",
  "lemon",
  "pineapple",
  "mango",
  "papaya",
  "coconut",
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "cherry",
  "apricot",
  "tomato",
  "carrot",
  "potato",
  "onion",
  "garlic",
  "pepper",
  "lettuce",
  "broccoli",
  "spinach",
  "zucchini",
  "cucumber",
  "celery",
  "cauliflower",
  "asparagus",
  "mushroom",
  "pumpkin",
  "radish",
  "beetroot",
  "turnip",
  "parsnip",
  "elephant",
  "giraffe",
  "tiger",
  "lion",
  "cheetah",
  "leopard",
  "zebra",
  "rhino",
  "hippo",
  "buffalo",
  "kangaroo",
  "koala",
  "panda",
  "sloth",
  "chimpanzee",
  "gorilla",
  "orangutan",
  "lemur",
  "meerkat",
  "otter",
  "shark",
  "whale",
  "dolphin",
  "seal",
  "octopus",
  "jellyfish",
  "lobster",
  "crab",
  "shrimp",
  "starfish",
  "eagle",
  "sparrow",
  "parrot",
  "penguin",
  "ostrich",
  "flamingo",
  "peacock",
  "hummingbird",
  "owl",
  "falcon",
  "house",
  "apartment",
  "mansion",
  "cottage",
  "bungalow",
  "castle",
  "villa",
  "shack",
  "chalet",
  "palace",
  "bed",
  "chair",
  "table",
  "desk",
  "sofa",
  "couch",
  "cabinet",
  "wardrobe",
  "bookshelf",
  "dresser",
  "car",
  "bicycle",
  "motorcycle",
  "scooter",
  "truck",
  "bus",
  "train",
  "airplane",
  "helicopter",
  "boat",
  "submarine",
  "rocket",
  "spaceship",
  "hovercraft",
  "tram",
  "trolley",
  "taxi",
  "ferry",
  "yacht",
  "canoe",
  "violin",
  "guitar",
  "piano",
  "trumpet",
  "flute",
  "drums",
  "clarinet",
  "saxophone",
  "cello",
  "harp",
  "concert",
  "symphony",
  "melody",
  "harmony",
  "rhythm",
  "tempo",
  "note",
  "scale",
  "chord",
  "tune",
  "dog",
  "cat",
  "rabbit",
  "hamster",
  "goldfish",
  "parakeet",
  "ferret",
  "guinea",
  "chinchilla",
  "gerbil",
  "winter",
  "spring",
  "summer",
  "autumn",
  "snow",
  "rain",
  "hail",
  "sleet",
  "fog",
  "storm",
  "mountain",
  "river",
  "lake",
  "ocean",
  "forest",
  "desert",
  "valley",
  "canyon",
  "island",
  "waterfall",
  "kitchen",
  "bathroom",
  "bedroom",
  "livingroom",
  "garage",
  "basement",
  "attic",
  "hallway",
  "balcony",
  "patio",
  "science",
  "history",
  "math",
  "geography",
  "chemistry",
  "biology",
  "physics",
  "astronomy",
  "literature",
  "philosophy",
  "football",
  "basketball",
  "tennis",
  "golf",
  "soccer",
  "baseball",
  "hockey",
  "cricket",
  "rugby",
  "volleyball",
];

function sortByLength(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const gameWordsEasy = words;
console.log(sortByLength(words)); ////simplier way is

let easyGameWords = gameWordsEasy;
let easy = words.slice(0, 99);
console.log({ easy });

const easyShuffle = ({ easy }) => {
  for (let i = easy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [easy[i], easy[j]] = [easy[j], easy[i]];
  }
  return easy;
};
const myEasyArray = { easy };
const shuffledEasyArray = easyShuffle(myEasyArray);

console.log(shuffledEasyArray);
const shuffledEasyArray2 = { easy };

console.log(easy.length);
console.log(easy[0]);

const generateWordBtn = document.getElementById("generateWordBtn");
generateWordBtn.addEventListener("click", generateRandomWord);

function generateRandomWord() {
  let gameWordEasy = easy[0]; // from function on  line...
  //  && "_".repeat(gameWordEasy.length);
  let gameWordEasyDis =
    // easy[0] && // from function on  line...
    "_".repeat(gameWordEasy.length);
  document.getElementById("random-word").innerText = gameWordEasyDis; // Display it on DOM
}

// ///snipped from ABs example---DOM Class-file
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = document.querySelector("input");
//   const value = input.value.trim();
//   console.log(value);
//   if (!value) {
//     input.style.border = "1px solid red";
//     alert("input can not be empty");
//     return;
//   }

//   const newLetter = document.createElement("li");
//   const liText = document.createTextNode(value);
//   newLetter.appendChild(liText);
//   document.querySelector("ul").appendChild(newLetter);
//   input.style.border = "";
//   e.target.reset();
// });

// const refreshBtn = document.getElementById("btnRefresh");
// function handleClick() {
//   window.location.reload();
// }
// refreshBtn.addEventListener("click", handleClick);

// let words = [
//   "apple",
//   "banana",
//   "orange",
//   "grape",
//   "kiwi",
//   "pear",
//   "peach",
//   "plum",
//   "melon",
//   "lemon",
//   "pineapple",
//   "mango",
//   "papaya",
//   "coconut",
//   "strawberry",
//   "blueberry",
//   "raspberry",
//   "blackberry",
//   "cherry",
//   "apricot",
//   "tomato",
//   "carrot",
//   "potato",
//   "onion",
//   "garlic",
//   "pepper",
//   "lettuce",
//   "broccoli",
//   "spinach",
//   "zucchini",
//   "cucumber",
//   "celery",
//   "cauliflower",
//   "asparagus",
//   "mushroom",
//   "pumpkin",
//   "radish",
//   "beetroot",
//   "turnip",
//   "parsnip",
//   "elephant",
//   "giraffe",
//   "tiger",
//   "lion",
//   "cheetah",
//   "leopard",
//   "zebra",
//   "rhino",
//   "hippo",
//   "buffalo",
//   "kangaroo",
//   "koala",
//   "panda",
//   "sloth",
//   "chimpanzee",
//   "gorilla",
//   "orangutan",
//   "lemur",
//   "meerkat",
//   "otter",
//   "shark",
//   "whale",
//   "dolphin",
//   "seal",
//   "octopus",
//   "jellyfish",
//   "lobster",
//   "crab",
//   "shrimp",
//   "starfish",
//   "eagle",
//   "sparrow",
//   "parrot",
//   "penguin",
//   "ostrich",
//   "flamingo",
//   "peacock",
//   "hummingbird",
//   "owl",
//   "falcon",
//   "house",
//   "apartment",
//   "mansion",
//   "cottage",
//   "bungalow",
//   "castle",
//   "villa",
//   "shack",
//   "chalet",
//   "palace",
//   "bed",
//   "chair",
//   "table",
//   "desk",
//   "sofa",
//   "couch",
//   "cabinet",
//   "wardrobe",
//   "bookshelf",
//   "dresser",
//   "car",
//   "bicycle",
//   "motorcycle",
//   "scooter",
//   "truck",
//   "bus",
//   "train",
//   "airplane",
//   "helicopter",
//   "boat",
//   "submarine",
//   "rocket",
//   "spaceship",
//   "hovercraft",
//   "tram",
//   "trolley",
//   "taxi",
//   "ferry",
//   "yacht",
//   "canoe",
//   "violin",
//   "guitar",
//   "piano",
//   "trumpet",
//   "flute",
//   "drums",
//   "clarinet",
//   "saxophone",
//   "cello",
//   "harp",
//   "concert",
//   "symphony",
//   "melody",
//   "harmony",
//   "rhythm",
//   "tempo",
//   "note",
//   "scale",
//   "chord",
//   "tune",
//   "dog",
//   "cat",
//   "rabbit",
//   "hamster",
//   "goldfish",
//   "parakeet",
//   "ferret",
//   "guinea",
//   "chinchilla",
//   "gerbil",
//   "winter",
//   "spring",
//   "summer",
//   "autumn",
//   "snow",
//   "rain",
//   "hail",
//   "sleet",
//   "fog",
//   "storm",
//   "mountain",
//   "river",
//   "lake",
//   "ocean",
//   "forest",
//   "desert",
//   "valley",
//   "canyon",
//   "island",
//   "waterfall",
//   "kitchen",
//   "bathroom",
//   "bedroom",
//   "livingroom",
//   "garage",
//   "basement",
//   "attic",
//   "hallway",
//   "balcony",
//   "patio",
//   "science",
//   "history",
//   "math",
//   "geography",
//   "chemistry",
//   "biology",
//   "physics",
//   "astronomy",
//   "literature",
//   "philosophy",
//   "football",
//   "basketball",
//   "tennis",
//   "golf",
//   "soccer",
//   "baseball",
//   "hockey",
//   "cricket",
//   "rugby",
//   "volleyball",
// ];

// function bubbleSortByLength(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (arr[j].length > arr[j + 1].length) {
//         // Swap elements
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const gameWords = words;
// console.log(bubbleSortByLength(words)); ////simplier way is

// let easyGameWords = gameWords;
// let easy = words.slice(0, 99);
// console.log({ easy });

// const easyShuffle = ({ easy }) => {
//   for (let i = easy.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [easy[i], easy[j]] = [easy[j], easy[i]];
//   }
//   return easy;
// };
// const myArray = { easy };
// const shuffledArray = easyShuffle(myArray);

// console.log(shuffledArray);
// const shuffledArray2 = { easy };

// console.log(easy.length);
// console.log(easy[0]);
// document.write(easy[0]); to see output in DOM
// const shuffledArray2 =(easy[]);
// console.log(easy[0].includes("r")); //need to link to word generated for given game-TEST
//////hoorah!!  //REF:Array literal notation -taken from MDN

// const myArraY = ["r","a","b", "b", "i", "t"];
//     char[] letter = "r".ToCharArray();
// console.log char[] characters
///Letters repition-// const fruits = ["apple", "apple", "pear", "orange", "apple", "pear"];
// // countOccurances(fruits)
// let gameWord = easy[0];
// const letterGuessed = easy[0].includes("r");
// console.log(lettersGuessed);
// countOccurrences(letterGuessed);
// console.log(lettersGuessed);
///used chat gpt to see what issue was- mis-spelled a varible- why it wasnt showing---
/// set aside let letterGuessed = easy[0];
// const letterGuessed = easy[0];
// countOccurances(letterGuessed);

// let gameWord = easy[0].includes("r");
// const letterGuessed = easy[0];
// countOccurrences(letterGuessed);
// console.log(countOccurrences);

let chkLetterBtn = document.getElementById("letterChk");
let letterInputText = document.getElementById("inputText");

chkLetterBtn.addEventListener("click", function () {
  //  event.preventDefault();
  let letterGuessed = letterInputText.value;
  // let easyLetterGuessed = gameWordEasyDis;
  // let letterGuessed = easyLetterGuessed.includes(" /[a-z]/"); //need to link to word generated for given game
  // document.appendChild("random-word").innerText = gameWordEasyDis;
  // document.getElementById(" /[a-z]/").innerText = gameWordEasyDis;
  console.log(letterGuessed);
});

// function countOccurrences(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// const occurrences = countOccurrences(letterInputText.value); //need to link to word generated for given game
// console.log(occurrences);

//Entry of letters in game mode
// const array1 = ["r", "a", "b", "b", "i", "t"];

// console.log(array1.includes("r")); //UI needs to register letter enteries as str TEST LOGIC
///snipped from ABs example---DOM Class-file
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const value = input.value.trim();
  console.log(value);
  if (!value) {
    input.style.border = "1px solid red";
    alert("input can not be empty");
    return;
  }

  const newLetter = document.createElement("li");
  const liText = document.createTextNode(value);
  newLetter.appendChild(liText);
  document.querySelector("ul").appendChild(newLetter);
  input.style.border = "";
  e.target.reset();
});

const refreshBtn = document.getElementById("btnRefresh");
function handleClick() {
  window.location.reload();
}
refreshBtn.addEventListener("click", handleClick);
