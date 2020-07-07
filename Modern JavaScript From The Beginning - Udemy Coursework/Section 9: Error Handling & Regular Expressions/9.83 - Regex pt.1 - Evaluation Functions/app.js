let re;

// Regex Literal
re = /hello/;
re = /hello/g;  // Global search - will return all instances of hello
re = /hello/i;  // i = case insensitive

// console.log(re);
// console.log(re.source);


// exec() - Return result in an array or null ********************************
  // const result = re.exec('hello world');


  // console.log(result);
  // console.log(result[0]);
  // console.log(result.index);
  // console.log(result.input);


// test() - Returns true or false ********************************
  // const result = re.test('Hello');

  // console.log(result);


// match() - Return result array or null  ********************************
  // const str = 'Hello There';
  // const result = str.match(re);

  // console.log(result);


// search() - Returns the index of the first match or -1  ********************************
  // const str = 'Ben Hello There'
  // const result = str.search(re);

  // console.log(result);


// replace() - Returns a new string with some or all matches of a pattern **********************
const str = 'Hello There'
const newStr = str.replace(re, 'hiii');

console.log(newStr);