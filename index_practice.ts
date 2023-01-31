/*
  Do not change
*/

// enums
export enum Status {
  Initialized = "Initialized",
  Pending = "Pending",
  Complete = "Complete",
}

enum Color {
  Red,
  Blue,
  Black,
}

enum Car {
  Sedan,
  Truck,
  Coupe,
}

enum ProgrammingLanguage {
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Python = "Python",
  Golang = "Golang",
}

type Customer = {
  firstName: string;
  lastName: string;
};

// ------------

/*
1. 다음을 충족하는 타입을 완성하고 inventory 객체에 타입을 반영하세요.
  Car enum 사용 필수.
  string 키 사용 금지.
*/

type Inventory = {
  [key in keyof typeof Car]?: keyof typeof Color;
}
// type Inventory = Partial<Car>

const inventory: Inventory = {
  Sedan: "Red",
  Truck: "Black",
};

/*
2. 다음을 충족하는 타입을 완성하고 colors 객체에 타입을 반영하세요.
  Color enum 사용 필수.
  모든 키 필수.
*/

type TColor = {
  [key in keyof typeof Color]: string[];
}

const colors: TColor = {
  Red: ["red"],
  Blue: [],
  Black: ["obsidian", "ink"],
};

/*
3. 다음을 충족하는 타입을 완성하시오.
  Color enum 사용 필수.
  "Red" | "Blue" | "Black" 사용 금지.
*/

type ColorKey = keyof typeof Color;

const someRose: ColorKey = "Red";
const someSky: ColorKey = "Blue";
const someTerminal: ColorKey = "Black";

// 함수 & enum

/*
4. 다음 함수를 완성하세요.
  인자에 적절한 타입 반영.
  반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

export function getSum(number1: number, number2: number): number {
  return number1 + number2;
}

/*
5. 다음 두 함수를 완성하세요.
  인자에 적절한 타입 반영.
  함수이름을 읽고 적절한 반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

export function isStatusPending(status: Status): boolean {
  return status === Status.Pending;
}

export function isStatusComplete(status: Status): boolean {
  return status === Status.Complete;
}


/*
6. 다음 함수를 완성하세요
  반환 타입 작성 후 함수에 적용.
  in 키워드 사용 필수.
  typecasting 금지.
  string 키 사용 금지.
  무엇을 반환하는지 test spec 확인해보기.
보너스: .reduce 함수를 사용하기.

예: { Initialized: "initialized" }
*/

// 반환 타입
type StatusObject = { [status in Status]?: string };

export function getStatusObject0(): StatusObject {
  return {
    Initialized: "initialized",
    Pending: "pending",
    Complete: "complete",
  }
}

// 왜 안되지... 됐다아아!
export function getStatusObject(): StatusObject {
  return Object.values(Status).reduce((resultStatus, value) => {
    resultStatus[value] = value.toLowerCase();
    return resultStatus;
  }, {} as StatusObject)
}

// 튜터님의 클린코드 .reduce() :
export function getStatusObject3(): StatusObject {
  return Object.values(Status).reduce((statusObject, status) => {
    return Object.assign(statusObject, { [status]: status.toLowerCase() });
  }, {});
}

console.log("#6 getStatusObject(): ", getStatusObject())
console.log("#6 getStatusObject3(): ", getStatusObject3())


/*
7. 반환 타입을 반환하는 함수를 작성하세요.
  typecasting 사용해보기.
*/

// 내가 푼 것:
export function getCars0(): Car[] {
  const car: Car = 3 as Car;
  return [car]
}
// 다른 해답:
export function getCars(): Car[] {
    return Object.values(Car) as Car[];
}

/*
8. 다음 함수를 완성하세요.
  반환 타입 작성 후 함수에 적용.
  Object.entries 사용 필수.
  무엇을 반환하는지 test spec 확인해보기.

예: { 10: TypeScript } | key는 value의 length
*/

// 반환 타입
type TProgrammingLanguages = {
  // [key: number]: string
  [key: number]: keyof typeof ProgrammingLanguage;
};
// const example: TProgrammingLanguages = {
//   0: ProgrammingLanguage.Golang,
//   1: ProgrammingLanguage.JavaScript,
// }
// console.log(example)
export function getProgrammingLanguages(): TProgrammingLanguages[] {
  return Object.entries(ProgrammingLanguage).reduce((resultArray: TProgrammingLanguages[], value, index) => {
    // resultArray.push({ value[0].length: value[0] });
    // resultArray.push({ value[0].length as string: value[0] });
    // resultArray.push({ String(value[0].length): value[0] });
    resultArray.push({ [value[0].length]: value[1] });
    
    const key = value[0].length;
    const val = value[1]
    const resultObject: TProgrammingLanguages = { [key]: val }
    // resultArray.push(resultObject);
    return resultArray;
  }, [])
}

// 다른 해답:
export function getProgrammingLanguages2(): TProgrammingLanguages[] {
    return Object.entries(ProgrammingLanguage).map((data) => {
        return { [data[0].length]: data[1] };
    });
}

// 튜터 해답: "데이터 구조를 분해 할당 할 수 있으면 가급적 하고, 읽기 쉬운 코드를 써봅니다."
export function getProgrammingLanguages3(): TProgrammingLanguages[] {
  return Object.entries(ProgrammingLanguage).map(([_, language]) => {
    return {
      [language.length]: language,
    };
  });
}

// console.log("Object.entries(ProgrammingLanguage): ", Object.entries(ProgrammingLanguage))
// Object.entries(ProgrammingLanguage).forEach((value, index) => {
//     console.log("index #", index)
//     console.log("value[0]: ", value[0])
//     console.log("value[1]: ", value[1])
// })
// console.log("Object.entries(ProgrammingLanguage)[0]: ", Object.entries(ProgrammingLanguage)[0])
// console.log("Object.entries(ProgrammingLanguage)[1]: ", Object.entries(ProgrammingLanguage)[1])
console.log("#8. getProgrammingLanguages(): ", getProgrammingLanguages())
console.log("#8. getProgrammingLanguages2(): ", getProgrammingLanguages2())
console.log("#8. getProgrammingLanguages3(): ", getProgrammingLanguages3())



/*
9. TOrder를 작성하고 orders 객체에 반영하세요 
*/

type TOrder = {
    [key: string]: {
        status: Status,
        color: Color,
        availableColors: Color[],
        orderedBy: Customer,
    }
};

const orders: TOrder = {
  firstCar: {
    status: Status.Initialized,
    color: Color.Black,
    availableColors: [Color.Red],
    orderedBy: {
      firstName: "jane",
      lastName: "doe",
    },
  },
  secondCar: {
    status: Status.Complete,
    color: Color.Blue,
    availableColors: [Color.Black],
    orderedBy: {
      firstName: "john",
      lastName: "doe",
    },
  },
};
console.log('#9 orders: ', orders)

/* 연습용 끄적거림

const ODirection = {
   Up: 0,
   Down: 1,
   Left: 2,
   Right: 3,
} as const;

type TODirection = typeof ODirection
// const TOD: TODirection = {};
console.log()
type KTODirection = keyof typeof ODirection
const KTOD: KTODirection = "Down"
console.log(KTOD)
console.log(typeof ODirection["Down"])
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {
   console.log(typeof dir);
}
function jog(dir: KTODirection) {
    console.log(dir)
}
run(ODirection.Down)
// jog(ODirection.Down)

enum EDirection {
   Up,
   Down,
   Left,
   Right,
}

function walk(dir: EDirection) {
   console.log(dir);
}
walk(EDirection.Left); // 2
// walk(keyof EDirection);
type newType = keyof EDirection;
const newCon: newType = "toExponential"


class ClassExample {
	constructor(public name: string, public age: number) {}
}

type ClassExample_Type = ClassExample;
// = type ClassExample_type = { name: string, age: number }
const 용례: ClassExample_Type = {
	name: '마실',
	age: 99,
}
type ClassTypeToKeys = keyof ClassExample_Type;
type ClassToKeys = keyof ClassExample;

interface IDirection {
   Up: number,
   Down?: number,
   Left?: number,
   Right: number,
}
const testInterface: IDirection = {
    Up: 3,
    Right: 4
}
console.log("interface implementation: ", testInterface.Down);
type InterfaceToKeys = keyof IDirection;


function original(num: number, str: string): string {
	return num.toString();
}
type FunctionType = typeof original;
type FunctionToKeys = keyof FunctionType
const neverFunc: FunctionType = (num: number, str: string) => {
    return str;
}

const obj = { red: 'apple', yellow: 'banana', green: 'cucumber' } as const;

type Values = typeof obj[keyof typeof obj];
// type Values =

let ob2: Values = obj.red // 'apple';
let ob3: Values = 'banana';
let ob4: Values = 'cucumber';

interface CraftBeer { // 클래스 형식
  beerName: string,
  nameBeer(beer: string): void,
}
class MyBeer implements CraftBeer {
  beerName: string = "Baby Guinness";
  beerCC: number = 0;
  nameBeer(b: string) {
    this.beerName = b;
  }
  pourBeer(p: number) {
      this.beerCC = p;
  }
  // constructor() {}
}
const myBeer: MyBeer = new MyBeer()
console.log(myBeer);
myBeer.nameBeer("Jeans")
console.log(myBeer);

interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

type Common = {
  name: string,
  age: number,
  gender: string
}

type Animal = {
  howl: string
}

type Cat = Common & Animal;
type Dog = Common | Animal;

let dog: Dog = {
  howl: 'dogggg',
    age: 1,
}
console.log(dog)
let cat: Cat = {
  age: 3,
  gender: 'C',
  name: 'CC',
  howl: 'cattttt'
}
console.log(cat)
*/

/*
10. TCustomerCar를 작성하고 customerCars 객체에 반영하세요
string 타입 사용 금지
*/

type TCustomerCar = {
    [key: number]: { // 사실상 프로퍼티 키에 해당하는 자리에는 number라고 지정해봤자 소용 없겠네?
        customerLastName: Customer["lastName"], // 이렇게만 해도 'type'이 추출된다고?
        // => 'type'의 속성에 접근하는 방법:
        car: Car,
        carColor: keyof typeof Color;
    }
};

const customerCars: TCustomerCar = {
  1: {
    customerLastName: "skywalker",
    car: Car.Coupe,
    carColor: "Red",
  },
  2: {
    customerLastName: "jedi",
    car: Car.Sedan,
    carColor: "Blue",
  },
};
console.log('#10 customerCars: ', customerCars)

