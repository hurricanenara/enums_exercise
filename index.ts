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

export function getStatusObject임시(): StatusObject {
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
console.log("#6 getStatusObject(): ", getStatusObject())


/*
7. 반환 타입을 반환하는 함수를 작성하세요.
  typecasting 사용해보기.
*/

export function getCars(): Car[] {
  const car: Car = 3 as Car;
  return [car]
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
  [key: number]: string
};

export function getProgrammingLanguages(): TProgrammingLanguages[] {
  return Object.entries(ProgrammingLanguage).reduce((resultArray: TProgrammingLanguages[], value, index) => {
    resultArray.push({ [value[0].length]: value[1] });
    return resultArray;
  }, [])
}
console.log("#8. getProgrammingLanguages(): ", getProgrammingLanguages())


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


/*
10. TCustomerCar를 작성하고 customerCars 객체에 반영하세요
string 타입 사용 금지
*/

type TCustomerCar = {
    [key: number]: { // 사실상 프로퍼티 키에 해당하는 자리에는 number 타입으로 지정해봤자 소용 없는 것 아닐까요?
        // customerLastName: typeof Customer.lastName, // 이것은 왜 안 되고
        customerLastName: Customer["lastName"], // 이것은 가능한 걸까요..?
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

