// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<any>): number {
  // console.log(nums)
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return nums.reduce((acc, el) => acc + el, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      return '10'
    }
    if (a === b || b === c || a === c) {
      return '01'
    } else {
      return "11"
    }
  } else {
    return '00'
  }
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = (number - number % 10) / 10;
  }
  return sum
}

// 2 вариант
// return (String(number)
//   .split('')
//   .reduce((acc, el) => acc + Number(el), 0))

// 3 вариант
// export function getSum(number: number){
//   let sum = 0;
//   for(  ; number > 0; number = Math.trunc(number/10)){
//     sum += number % 10
//   }
//   return sum
// }

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

// export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
//   let sumOfEven = 0;
//   let sumOfOdd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//       sumOfEven += arr[i]
//     } else {
//       sumOfOdd += arr[i]
//     }
//   }
//   return sumOfEven > sumOfOdd
//
// // вариант 2
// //   return arr.reduce((acc,elm, i) => i % 2 ? acc-elm : acc + elm ) > 0
// }
export const isEvenIndexSumGreater = (arr: Array<number>) => {

  let y = 0
  let r = 0
  for (let i = 0; i < arr.length; i += 2) {
    y += arr[i]
  }
  for (let i = 1; i < arr.length; i += 2) {
    r += arr[i]
  }
  return y > r
}


// вариант 3
// export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
//   const sums: Array<number> = arr.reduce((acc, el, i) => {
//     acc[i % 2] += el
//     return acc
//   }, [0, 0])
//   return sums[0] > sums[1]
// }


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return array
    .filter(f => f > 0 && Number.isInteger(f))
    .map(m => m ** 2)
  // return array.filter(f => f > 0 && f % 1 === 0).map(m => m ** 2)


}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
  // let sum = 0;
  // for (let i = 0; i <= N; i ++) {
  //     sum +=i;
  // }
  // return sum;
  if (N === 0) {
    return 0
  }
  return sumFirstNumbers(N - 1) + N
}
// 2 вариант (формула арифметической прогрессии)
// export function sumFirstNumbers(N: number): number {
//   if (N === 0) {
//     return 0;
//   } else {
//     return (N * (N + 1) / 2)
//   }
// }



// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
  let result = [];
  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

  for (let i = 0; i < banknotes.length; i++) {
    while (amountOfMoney >= banknotes[i]) {
      result.push(banknotes[i])
      amountOfMoney -= banknotes[i]
    }
  }
  //...здесь пишем код.
  // В return стоит "заглушка", чтоб typescript не ругался
  return result
}