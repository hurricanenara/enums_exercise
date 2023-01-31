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

type Inventory = {[key in keyof typeof Car]?: keyof typeof Color};

const inventory: Inventory = {
    Sedan: "Red",
    Truck: "Black",
};

/*
2. 다음을 충족하는 타입을 완성하고 colors 객체에 타입을 반영하세요.
Color enum 사용 필수.
모든 키 필수.
*/

type TColor = {[key in keyof typeof Color]: string[]};
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

console.log(someRose);
console.log(someSky);
console.log(someTerminal);

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
console.log(getSum);

/*
5. 다음 두 함수를 완성하세요.
인자에 적절한 타입 반영. X
함수이름을 읽고 적절한 반환 타입 반영. X
테스트를 패스 할 함수 로직 작성. ?
*/

export function isStatusPending(status: Status): boolean {
    if (status === Status.Pending) {
        return true;
    } else return false;
}
export function isStatusComplete(status: Status): boolean {
    if (status === Status.Complete) {
        return true;
    } else return false;
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

// foreach
// Object.value쓰기,
type StatusObject = {[key in keyof typeof Status]: string};
export function getStatusObject() {
    let resultObject: StatusObject = Object.entries(Status).reduce((acc, [_, curr]) => {
        return {...acc, [curr]: curr.toLowerCase()};
    }, {} as StatusObject);

    console.log(resultObject);
    return resultObject;
}

/*
7. 반환 타입을 반환하는 함수를 작성하세요.
typecasting 사용해보기.
*/
export function getCars(): Car[] {
    const myCar = Object.values(Car) as Car[];
    console.log(myCar);
    return myCar;
}
getCars();

/*
8. 다음 함수를 완성하세요.
반환 타입 작성 후 함수에 적용.
Object.entries 사용 필수.
무엇을 반환하는지 test spec 확인해보기.

예: { 10: TypeScript } | key는 value의 length
*/

type TProgrammingLanguages = {[length: number]: ProgrammingLanguage};
export function getProgrammingLanguages(): TProgrammingLanguages {
    const binObject1 = {} as TProgrammingLanguages;
    let myLanguages = Object.entries(ProgrammingLanguage);
    myLanguages.forEach((element) => {
        const langueage = element[1];
        binObject1[langueage.length] = langueage;
    });
    return binObject1;
}

/*
9. TOrder를 작성하고 orders 객체에 반영하세요 
*/

type TOrder = {
    [key: string]: {
        status: Status;
        color: Color;
        availableColors: Color[];
        orderedBy: Customer;
    };
};
const orders = {
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
    [key: number]: {
        customerLastName: Customer["firstName"];
        // ------- 질문있습니다 -------
        car: Car;
        carColor: keyof typeof Color;
    };
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
