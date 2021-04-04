// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     //name: "Penguin"
//   }
// };
//
// const { name: publisherName = "Self-Published" } = book.publisher;
//
// console.log(publisherName);

const item = ["Coffee Hot", "$2.00", "$2.50", "$2.75"];

// A medium coffee costs 2.50

const [product, , medium] = item;

console.log(`A ${product} costs ${medium}`);
