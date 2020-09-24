export class Person {
  constructor(name) {
    this.name = name;

    // TODO feedback: 把方法定义在constructor里面，不是很好的practice
    this.move = () => console.log(`${this.name} is moving`);
  }
}
