/*
  Do not change
*/

import { isTemplateElement } from "@babel/types";
import { xdescribe } from "@jest/globals";

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
  [x in keyof typeof Car]?: keyof typeof Color;
};

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
  [x in keyof typeof Color]: string[]
};

const colors:TColor = {
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

export function getSum(a:number, b:number):number {
  return a + b
}

/*
5. 다음 두 함수를 완성하세요.
  인자에 적절한 타입 반영.
  함수이름을 읽고 적절한 반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

export function isStatusPending(status:Status.Initialized | Status.Pending): boolean | undefined{
  if (status === "Initialized") {
    return false
  } else if (status === "Pending") return true
}

export function isStatusComplete(status: Status.Pending | Status.Complete): boolean | undefined {
  if (status === "Pending") {
    return false
  } else if (status === "Complete") return true
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
type StatusObject = {
  [k in Status]?: keyof typeof Status
};

export function getStatusObject(): StatusObject {
  const result =  Object.entries(Status).reduce((accu, curr) => ({...accu, [curr[0]]: curr[1].toLocaleLowerCase() }), {}
  );
  // reduce와 spread operator 같이 쓰면 시간복잡도가 두배 늘어나는데, 본 케이스의 키, 벨류에는 어떻게 다르게 적용하지?
  return result
  }

/*
7. 반환 타입을 반환하는 함수를 작성하세요.
  typecasting 사용해보기.
*/

export function getCars(): Car[] {
  return Object.values(Car) as Car[]

}

/*
8. 다음 함수를 완성하세요.
  반환 타입 작성 후 함수에 적용.
  in 키워드 사용 필수.
  Object.entries 사용 필수.
  무엇을 반환하는지 test spec 확인해보기.

예: { 10: TypeScript } | key는 value의 length
*/

// { 10: "TypeScript" },
// { 10: "JavaScript" },
// { 6: "Python" },
// { 6: "Golang" }

// 반환 타입
type TProgrammingLanguages = {
  [k: number]: keyof typeof ProgrammingLanguage
};

export function getProgrammingLanguages(): TProgrammingLanguages[] {
  const result: TProgrammingLanguages[] = Object.entries(ProgrammingLanguage).map((program) => {
    return { [program[0].length]: program[1]}
  })
  return result
  }


/*
9. TOrder를 작성하고 orders 객체에 반영하세요 
*/

type TOrder = {
  [k: string]: {
    [x: string]: Status | Color | Color[] | Customer
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

/*
10. TCustomerCar를 작성하고 customerCars 객체에 반영하세요
string 타입 사용 금지
*/

type TCustomerCar = {
  [k: number]: {
    customerLastName: "skywalker" | "jedi"
    car?: Car
    carColor?: keyof typeof Color
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
