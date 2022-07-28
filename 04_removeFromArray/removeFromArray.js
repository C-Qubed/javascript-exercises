const removeFromArray = function(...args) {
  const array = args[0];
  const NewArray = [];
  array.forEach(el => {
    if (!args.includes(el)) {
        NewArray.push(el);
    }
  });
  return NewArray
};

// Do not edit below this line
module.exports = removeFromArray;
