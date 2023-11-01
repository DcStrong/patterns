/**
 * Абстрактный интерфейс для компьютера,
 * описываем из чего состоит нашь компьютер.
 * То есть другими словами мы описываем общий интерфейс для любого типа нашего компьютера,
 * так мы знаем из чего состоит каждый наш компьютер.
 *
 * Каждый компьютер должен иметь:
 * - процессор
 * - память
 * - какое-то хранилище
 */
interface AbstractComputer {
  getCPU(): string;
  getRAM(): string;
  getStorage(): string;
}

/**
 * :_) представим что наш планшет состоят только из процессора и экрана ))
 */
interface AbstractTable {
  getCPU(): string;
  getDisplay(): string;
}

/**
 * Можно еще сделать как абстрактный класс, тогда классы ноутбук и дэкстоп будут расширяться от данного класса
 * но сделаем тут на интерфейсах, а при реализации другого паттерна попробуем больше использовать классы.
 */
/*
abstract class AbstractComputer {
  abstract getCPU(): string;
  abstract getRAM(): string;
  abstract getStorage(): string;
}
*/
// class Laptop extends AbstractComputer

/**
 * Реализовуем общий интерфейс для нашего компьютера
 */
class LaptopLenova implements AbstractComputer {
  getCPU(): string {
    return 'Intel Core i5';
  }

  getRAM(): string {
    return '8GB DDR4';
  }

  getStorage(): string {
    return '256GB SSD';
  }
}

class LaptopNokia implements AbstractComputer {
  getCPU(): string {
    return 'Intel Core i3';
  }

  getRAM(): string {
    return '16GB DDR5';
  }

  getStorage(): string {
    return '128GB SSD';
  }
}

class IPad implements AbstractTable {
  getCPU(): string {
    return 'Qualcomm Snapdragon 805 APQ8084'
  }

  getDisplay(): string {
    return '10.2'
  }
}


interface AbstractComputerFactory {
  createLaptopLenova(): AbstractComputer;
  createLaptopNokia(): AbstractComputer;
}


class LaptopFactory implements AbstractComputerFactory {
  createLaptopLenova(): AbstractComputer {
    return new LaptopLenova();
  }

  createLaptopNokia(): AbstractComputer {
    return new LaptopNokia();
  }
}


interface AbstractTableFactory {
  createTable(): AbstractTable;
}


class TableFactory implements AbstractTableFactory {
  createTable(): AbstractTable {
    return new IPad();
  }
}

/**
 * Имитируем обращение клиента к фабрике
 *
 * @param factory инстанс нашей фабрики у которой мы можем запросить создать наш компьютер
 */
function clientCode(
  laptopFactory: AbstractComputerFactory,
  tableFactory: AbstractTableFactory,
) {
  //
  const laptopLenova = laptopFactory.createLaptopLenova();
  const laptopNokia = laptopFactory.createLaptopNokia();
  const table = tableFactory.createTable();

  console.log('Laptop lenova:');
  console.log('CPU: ' + laptopLenova.getCPU());
  console.log('RAM: ' + laptopLenova.getRAM());
  console.log('Storage: ' + laptopLenova.getStorage());

  console.log('Laptop nokia:');
  console.log('CPU: ' + laptopNokia.getCPU());
  console.log('RAM: ' + laptopNokia.getRAM());
  console.log('Storage: ' + laptopNokia.getStorage());

  console.log('\nIPad:');
  console.log('CPU: ' + table.getCPU());
  console.log('Display: ' + table.getDisplay());
}

/**
 * Вызываем нашу имитацию, и создаем новый инстанс фабрики.
 */
clientCode(new LaptopFactory(), new TableFactory());
