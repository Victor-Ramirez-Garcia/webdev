let result = {};

const insertItem = (key, value) => {
  // insertItem the property with key and value into result
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  let val = null;
  Object.entries(result).forEach(([key1, value]) => {
    if (key == key1) {
      val = value;
    }
  });

  if (val == null) {
    val = "Item does not exist";
  }
  return val;
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  let arr = [];
  Object.entries(result).forEach(([key]) => {
    arr.push(key);
  });
  return arr.join(", ");
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
