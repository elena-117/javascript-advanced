  /* Задание 1. Создайте функцию конструктор, которая создает объект со свойством экземпляра, свойством функции-конструктора, с методом экземпляра и методом функции-конструктора. Имена выберите произвольно.*/

  console.log("Задание 1");

  // Функция-конструктор
  function SomeObject(prop) {
     this.prop = prop;
  }

  // Свойство функции-конструктора
  SomeObject.staticProp = 123;

  // Метод экземпляра
  SomeObject.prototype.someMethod = function () {
     console.log(`${this.prop}`);
  }

  // Метод функции-конструктора
  SomeObject.anotherMetod = function () {
     console.log(`${SomeObject.staticProp}`);
  }

  let test = new SomeObject("test");

  test.someMethod();
  SomeObject.anotherMetod();

  /* Задание 2. Разработайте функцию-конструктор, которая будет создавать объект Human (человек). Создайте массив объектов и реализуйте функцию, которая будет сортировать элементы массива по значению свойства Age по возрастанию или по убыванию. */

  console.log("Задание 2");

  function Human(name, age) {
     this.name = name;
     this.age = age;
  }

  Human.prototype.toString = function () {
     return (`name: ${this.name}, age: ${this.age}`);
  }

  let humans = [new Human("Anna", 24), new Human("Dmitry", 20), new Human("Alexey", 37), new Human("Olga", 18), new Human("Victor", 34), new Human("Darya", 30)];

  console.log(humans);

  humans.sort(function (a, b) {
     let previous = a.age;
     let next = b.age;
     if (previous < next) {
        return -1;
     } else if (previous > next) {
        return 1;
     } else {
        return 0;
     }
  });

  console.log(humans);

  /* Задание 3. Разработайте функцию-конструктор, которая будет создавать объект Human (человек), добавьте на свое усмотрение свойства и методы в этот объект. Подумайте, какие методы и свойства следует сделать уровня экземпляра, а какие уровня функции-конструктора. */

  console.log("Задание 3");

  function Human2(name, height) {
     this.name = name;
     this.height = height;

     this.sortHeight = function () {
        if (this.height > 180) {
           console.log(`${this.name}, your sport is basketball`);
        } else console.log(`${this.name}, your sport is running`);
     };
     return;
  }

  let Katya = new Human2("Katya", 168);
  let Dima = new Human2("Dima", 184);

  Katya.sortHeight();
  Dima.sortHeight();