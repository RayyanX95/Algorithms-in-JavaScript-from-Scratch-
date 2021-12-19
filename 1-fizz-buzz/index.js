const fizzBuzz = (num) => {
  for (let i = 0; i < array.length; i++) {
    if( i % 15 === 0 ) console.log('FizzBuzz');
    else if( i % 5 === 0 ) console.log('Buzz');
    else if( i % 3 === 0 ) console.log('Fizz');
    else console.log(i);
  }
}