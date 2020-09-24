import { Person } from "./Person";

export class Student extends Person {
  constructor(name, className) {
    super(name);
    this.className = className;

    // TODO feedback: 把方法定义在constructor里面，不是很好的practice
    this.study = () => {
      console.log(`${this.move()}`);
      console.log(`${this.name} is studying in ${this.className}`);
    };
  }
}
