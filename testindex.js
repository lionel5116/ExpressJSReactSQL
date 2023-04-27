function sayHi (name = 'there') {
	return `Hi ${name}!`;
}

const addNumbers = (num1,num2) => {
  return num1 + num2;
}

module.exports = {
	sayHi:sayHi,
	addNumbers:addNumbers
}