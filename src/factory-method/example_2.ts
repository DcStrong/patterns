//Некий интерфейс транспорт, который описывает что у каждого транспорда должен быть метод движения
interface Transport {
  move(): string;
}

// Класс для конкретного продукта - автомобиля который реализует наш метод
class Car implements Transport {
  move(): string {
    return "Автомобиль двигается по дороге.";
  }
}

// Класс для конкретного продукта - велосипеда
class Bicycle implements Transport {
  move(): string {
    return "Велосипед двигается по дорожке.";
  }
}

/* Так мы получаем два класса (продукта) которые описывают наш метод,
   то есть, нам не важно какой конкретно это продукт наша оснавная цель это вызвать метод move()
*/

class TransportFactory {
  createTransport(transportType?: string): Transport {
    if (transportType === 'bicycle') {
      return new Bicycle();
    }

    return new Car();
  }
}

const transportFactory = new TransportFactory();

const bicycle = transportFactory.createTransport('bicycle');
const car = transportFactory.createTransport();

console.log(bicycle.move())
console.log(car.move())