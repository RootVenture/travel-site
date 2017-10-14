class Person {
  constructor(name, favColor) {
    this.name = name;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log(
      "Hi there, my name is " +
        this.name +
        " and my favorite color is " +
        this.favoriteColor +
        "."
    );
  }
}

// module.exports = Person;

// NodeJS way to export:
export default Person;
