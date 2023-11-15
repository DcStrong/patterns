//Класс продукта
class ChocoPie {
  taste: string;

  color: string;

  constructor(
    taste: string,
    color: string,
  ) {
    this.color = color;
    this.taste = taste;
  }
}

//Фабрика создающая нам один и тот же продукт с разными значениями для свойств
class ChocoPieFactory {
  create(type: string) {
    if (type === 'classic') {
      return new ChocoPie('classic', 'red');
    }

    if (type === 'new_year') {
      return new ChocoPie('Viennese cake', 'yellow');
    }
  }
}

const factory = new ChocoPieFactory();

const chocoClassic = factory.create('classic');
const chocoNewYear = factory.create('new_year');

console.log(chocoClassic);
console.log(chocoNewYear);