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
    //     const binObject = {
    //         // Initialized : "initialized",
    //         // Pending : "pending",
    //         // Complete : "complete",
    //     };
    //     const statuses = Object.values(Status);
    //     statuses.forEach((element) => {
    //         // myObject[newKey] = 'this is value';
    //         // @ts-ignore
    //         binObject[element] = element.toLowerCase();
    //     });
    //     console.log(statuses);
    //     console.log(binObject);
    //     return binObject;
    // }

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

// 반환 타입                   number는 맞는데 정적타입이 아닌 아래 함수작업에 따라 바뀌는 동적타입으로서
//                          []로 동적타입임을, 아래의 length에 연결돼있다는 뜻으로 length:를 덧붙임
type TProgrammingLanguages = {[length: number]: ProgrammingLanguage};
// 여기서는 언어들 : 스트링 형태로 타입 지정 됨!

export function getProgrammingLanguages(): TProgrammingLanguages {
    // 1. 구하는 반환값: key는 글자수, value는 프로그래밍랭귀지
    const binObject1 = {} as TProgrammingLanguages;
    let myLanguages = Object.entries(ProgrammingLanguage);
    // {[자바스크립트 , 자바스크립트],[타입스크립트 , 타입스크립트], [고랭 , 고랭]}
    myLanguages.forEach((element) => {
        const langueage = element[1];
        binObject1[langueage.length] = langueage;
    });
    return binObject1;

    // forEach((element)=> {}) 에서 배열 순회하면서 뽑아져 나온 element는 배열 안의 원소를 가리킴
    // ex. element[0] 은 0번째 배열을 말하는 것이 아닌 각각 배열의 0번째 인덱스에 있는 원소를 뜻함

    // 2. value 생성 - 위의 Enum에서 가져오기
    // 3. 윗 배열의 글자수를 저장해주는 객체를 만들어서 key 생성
    // const
    // 4. 객체 생성하면서 위의 키, 밸류를 각각 지정해줌 글자수: 프로그램언어
    // 5. 해당 객체 리턴

    //     const statuses = Object.values(Status);
    //     statuses.forEach((element) => {
    //         // myObject[newKey] = 'this is value';
    //         // @ts-ignore
    //         binObject[element] = element.toLowerCase();
    //     });

    //

    // key 생성

    // let myLanguages : TProgrammingLanguages  =  Object.entries(ProgrammingLanguage);
    //     console.log(myLanguages);
    //     return myLanguages;
}

// Object.entries 쓰면 /string(key), 해당 타입/<-으로 타입이 지정됨
// key는 string 인데.. number로 바꿀 방법이 없나 ..?
//

/*
9. TOrder를 작성하고 orders 객체에 반영하세요 
*/

type TOrder = {
    [key: string]: {
        // 아래 orders에 할당된 firstCar, secondCar를 동적으로 연결해주기 위해
        // [] 대괄호로 묶어주고, orders 안의 키값이 스트링타입이라는 것을 알려줌.
        // 따라서 같은 타입을 두번 작성할 필요 없이 한번으로 정리 완료!
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

// Status, Color, Customer을 TOrder의 타입으로 지정해준다.
// Customer의
// TOrder를 orders의 타입으로 지정해준다.

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
