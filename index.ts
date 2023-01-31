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

// 문제 코드
// type Inventory = {};

// const inventory = {
//   Sedan: "Red",
//   Truck: "Black",
// };

// (이보형) 문제 풀이
type Inventory = {
  [key in keyof typeof Car]?: keyof typeof Color; // Car enum 사용 필수, string 키 사용 금지
};

const inventory: Inventory = {
  Sedan: "Red",
  Truck: "Black",
};

/* (이보형) 컴파일 결과 확인
const inventory = {
    Sedan: "Red",
    Truck: "Black",
};
*/

/* (이보형) 문제 접근방법 / 풀이과정
1. 코드 작성 1차
  1) 수업에서 배운 Less Strict Table Data 사용해 작성
    type Inventory = {
      [key in Car]?: string; // Car enum 사용 필수(O), string 키 사용 금지(X)
    };

    const inventory: Inventory = {
      Sedan: "Red", // 1-2. 에러 발생
      Truck: "Black",
    };

    // 에러1 Type '{ Sedan: string; Truck: string; }' is not assignable to type 'Inventory'.
    // 에러2 Object literal may only specify known properties, and 'Sedan' does not exist in type 'Inventory'.

2. 코드 완성
  1) enum Car에서 숫자형(enum의 기본값)인 key의 value를 string으로 바꾸어야 한다는 것을 확인
  2) 키워드 '타입스크립트 key type enum' 구글링 https://greatpapa.tistory.com/161?category=559680
    - keyof : object의 key 값만 가져오고 싶을 때
    - typeof 값을 type으로 쓰고 싶을 때
    - as const : 고정된 값으로 타입을 지정 (없으면 타입스크립트가 추론을 널널하게 진행)

  3) keyof typeof 확인
    https://kimyk60.tistory.com/47
    https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
    - Literal types : 리터럴 유형은 string, number보다 구체적인 유형(리터럴 유형은 그 자체로는 유용하지 않지만 union types, type aliases, type guards 와 결합하면 강해짐)
    - keyof : 객체 형식을 취하며, 키의 문자열 또는 숫자 리터럴 조합을 생성
    - object에 keyof typeof 쓰기 : 우리가 object의 종류를 모르거나, type이 지정되지 않은 경우

  4) 타입스크립트에서 객체의 key값 혹은 value값만 가져오는 방법 확인
    https://velog.io/@jonghyun3668/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%9D%EC%B2%B4%EC%9D%98-key%EA%B0%92-%ED%98%B9%EC%9D%80-value%EA%B0%92%EB%A7%8C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0

    const Data = {
        1st : 'apple',
        2nd : 'grape',
        3rd : 'banana',
    }

    //key 값으로 정의 => 결과 : "1st" | "2nd" | "3rd"
    type DataKeys = keyof typeof Data

    //typeof Data의 결과 
    {
      1st : 'apple',
      2nd : 'grape',
      3rd : 'banana'
    } 

    // value 값으로 정의 => 결과 : "apple" | "grape" | "banana"
    type DataValues = typeof Data[keyof typeof Data]
*/


/*
2. 다음을 충족하는 타입을 완성하고 colors 객체에 타입을 반영하세요.
  Color enum 사용 필수.
  모든 키 필수.
*/

// 문제 코드
// type TColor = {};

// const colors = {
//   Red: ["red"],
//   Blue: [],
//   Black: ["obsidian", "ink"],
// };

// (이보형) 문제 풀이
type TColor = {
  [key in keyof typeof Color]?: string[]; // readonly로 Array<string>와 차이 / Color enum 사용 필수
};

const colors: TColor = {
  Red: ["red"],
  Blue: [],
  Black: ["obsidian", "ink"],
};

/* (이보형) 컴파일 결과 확인
const colors = {
    Red: ["red"],
    Blue: [],
    Black: ["obsidian", "ink"],
};
*/

/* (이보형) string[] 대신에 keyof typeof Car[]를 넣으면 나는 에러 확인용
type TColor2 = {
  [key in keyof typeof Color]?: keyof typeof Car[]
};

const colors2: TColor2 = { // 
  Red: ["red"], // 에러 Type 'string[]' is not assignable to type 'keyof (typeof Car)[] | undefined'.
  Blue: [], // 에러 Type 'never[]' is not assignable to type 'keyof (typeof Car)[] | undefined'.  
  Black: ["obsidian", "ink"], // 에러 Type 'string[]' is not assignable to type 'keyof (typeof Car)[] | undefined'.
};
*/


/*
3. 다음을 충족하는 타입을 완성하시오.
  Color enum 사용 필수.
  "Red" | "Blue" | "Black" 사용 금지.
*/

// 문제 코드
// type ColorKey = "";

// const someRose: ColorKey = "Red";
// const someSky: ColorKey = "Blue";
// const someTerminal: ColorKey = "Black";


// (이보형) 문제 풀이
type ColorKey = keyof typeof Color; // type ColorKey = "Red" | "Blue" | "Black" / Color enum 사용 필수

const someRose: ColorKey = "Red";
const someSky: ColorKey = "Blue";
const someTerminal: ColorKey = "Black";


/* (이보형) 컴파일 결과 확인
const someRose = "Red";
const someSky = "Blue";
const someTerminal = "Black";
*/


// 함수 & enum

/*
4. 다음 함수를 완성하세요.
  인자에 적절한 타입 반영.
  반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

// 문제 코드
// export function getSum(number1, number2) {}

// (이보형) 문제 풀이
enum noEnum { // 인자(argument)에 적절한 타입 반영
  number1 = 1,
  number2 // (enum member) num.number2 = 2
};

const { number1: no1, number2: no2 } = noEnum; // 코드 목적 : 매개변수명 길이 단축, 구조분해할당 사용

export function getSum(no1: number, no2: number) { // 반환 타입 반영
  return no1 + no2; // 테스트를 패스 할 함수 로직 작성
};

/* (이보형) 컴파일 결과 확인
const { number1: no1, number2: no2 } = noEnum;
export function getSum(no1, no2) {
    return no1 + no2;
};
*/


/*
5. 다음 두 함수를 완성하세요.
  인자에 적절한 타입 반영.
  함수이름을 읽고 적절한 반환 타입 반영.
  테스트를 패스 할 함수 로직 작성.
*/

// 문제 코드
// export function isStatusPending(...args: [status: any]): void { }

// export function isStatusComplete(status) {}

// (이보형) 문제 풀이
const { Complete, Pending } = Status;

export function isStatusPending(status: Status): boolean { // (status: Status) : 인자에 적절한 타입 반영, : boolean : 함수이름을 읽고 적절한 반환 타입 반영
  return status === Pending; // 테스트를 패스 할 함수 로직 작성
};

export function isStatusComplete(status: Status): boolean {
  return status === Complete;
};

/* (이보형) 컴파일 결과 확인
const { Complete, Pending } = Status;
export function isStatusPending(status) {
    return status === Pending;
}
;
export function isStatusComplete(status) {
    return status === Complete;
};
*/


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
// 문제 코드
// type StatusObject = {};

// export function getStatusObject() {}

// (이보형) 문제 풀이
type StatusObject = {
  [key in Status]?: keyof typeof Status; // in 키워드 사용 필수, string 키 사용 금지, 반환 타입 작성 후 함수에 적용
};

export function getStatusObject(): StatusObject { // 반환 타입 작성 후 함수에 적용
  return Object.keys(Status).reduce((next, status) => { // .reduce 함수를 사용하기, typecasting 금지
    return { ...next, [status]: status.toLowerCase() };
  }, {}); // , {} 초기값 생략 가능 
};

/* (이보형) 컴파일 결과 확인
export function getStatusObject() {
    return Object.keys(Status).reduce((next, status) => {
        return Object.assign(Object.assign({}, next), { [status]: status.toLowerCase() });
    }, {});
};
*/

/* (이보형) 문제 접근방법 / 풀이과정
1. reduce 학습 시 참고글
  배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초기값);
  *이전값이 아니라 누적값 (acc(누적값)이 초깃값인 0부터 시작해서 return하는대로 누적)
  https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d

2. reduce 코드 작성 시 참고글
  https://www.redbitdev.com/post/using-array-reduce-with-objects

  const profiles = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
  ];

  const profilesByUserId = profiles.reduce((next, profile) => {
    const { userId } = profile;
    return { ...next, [userId]: profile };
  }, {});

3. 코드 작성 1차
  type StatusObject = {
    [key in Status]?: keyof typeof Status;
  };

  export function getStatusObject() { // : StatusObject로 타입을 지정하면 에러 발생
    const result: StatusObject = Object.keys(Status).reduce((next, status) => {
      return { ...next, [status]: status.toLowerCase() };
    }, {}); // , {} 초기값 생략 가능 
  };

1) 작성 도중 발생한 에러 => 그래서 const result 부분에 : StatusObject 작성함
  export function getStatusObject(): StatusObject에서 : StatusObject로 타입을 지정하면 아래의 에러가 뜸
  *에러 A function whose declared type is neither 'void' nor 'any' must return a value

2) 테스트 실시하고 확인한 에러
  expect(received).toEqual(expected) // deep equality

    Expected: {"Complete": "complete", "Initialized": "initialized", "Pending": "pending"}
    Received: undefined

4. 코드 완성
  1) 작성 도중 발생한 must return a value 에러에서 return을 해야 한다는 것을 확인
  2) return, : StatusObject 코드 추가
    type StatusObject = {
      [key in Status]?: keyof typeof Status;
    };

    export function getStatusObject(): StatusObject { // : StatusObject 코드 추가
      return const result: StatusObject = Object.keys(Status).reduce((next, status) => { // return 코드 추가
        return { ...next, [status]: status.toLowerCase() };
      }, {}); // , {} 초기값 생략 가능 
    };

    2-1) const result: StatusObject = 에서 const 부분에서 에러 발생
      Unreachable code detected.ts(7027)
      Expression expected.ts(1109)

    2-2) const result: StatusObject = 코드 삭제
      type StatusObject = {
        [key in Status]?: keyof typeof Status;
      };

      export function getStatusObject(): StatusObject {
        return Object.keys(Status).reduce((next, status) => { // const result: StatusObject = 코드 삭제
          return { ...next, [status]: status.toLowerCase() };
        }, {}); // , {} 초기값 생략 가능 
      };
*/


/*
7. 반환 타입을 반환하는 함수를 작성하세요.
  typecasting 사용해보기.
*/

// 문제 코드
// export function getCars(): Car[] {}

// (이보형) 문제 풀이
export function getCars(): Car[] {
  return Object.values(Car) as Car[]; // typecasting 사용해보기
};

/* 컴파일 결과 확인
export function getCars() {
    return Object.values(Car);
};
*/


/*
8. 다음 함수를 완성하세요.
  반환 타입 작성 후 함수에 적용.
  Object.entries 사용 필수.
  무엇을 반환하는지 test spec 확인해보기.

예: { 10: TypeScript } | key는 value의 length
*/

// 반환 타입
// 문제 코드
// type TProgrammingLanguages = "";

// export function getProgrammingLanguages() {}

// (이보형) 문제 풀이
type TProgrammingLanguages = {
  [resultLength: number]: ProgrammingLanguage; // 반환 타입 작성 후 함수에 적용
};

export function getProgrammingLanguages(): TProgrammingLanguages[] {
  return Object.entries(ProgrammingLanguage) // 반환 타입 작성 후 함수에 적용, Object.entries 사용 필수
    .map((language) => { // Object.entries 사용 필수
      return { [language[0].length]: language[1] };
  });
};

/* (이보형) 컴파일 결과 확인
export function getProgrammingLanguages() {
    return Object.entries(ProgrammingLanguage)
        .map((language) => {
        return { [language[0].length]: language[1] };
    });
};
*/

/* (이보형) 문제 접근방법 / 풀이과정 
1. Object.entries 반환 형태 확인
  Object.entries의 출력값은 [ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]의 형태로 배열 1번째, 2번째로 작성

2. 코드 작성 1차
  1) 6번 문제와 같은 테스트 에러 발생
    expect(received).toEqual(expected) // deep equality

      Expected: [{"10": "TypeScript"}, {"10": "JavaScript"}, {"6": "Python"}, {"6": "Golang"}]
      Received: undefined

  2) return, : TProgrammingLanguages 코드 추가, const result: TProgrammingLanguages = 코드 삭제
    type TProgrammingLanguages = {
      [resultLength: number]: ProgrammingLanguage; // 반환 타입 작성 후 함수에 적용
    };

    export function getProgrammingLanguages(): TProgrammingLanguages { // : TProgrammingLanguages 코드 추가
      return Object.entries(ProgrammingLanguage) // 반환 타입 작성 후 함수에 적용, Object.entries 사용 필수 // return 코드 추가, const result: TProgrammingLanguages = 코드 삭제
        .reduce((next, language) => { 
          return { ...next, [language[0].length]: language[1] }; // Object.entries 사용 필수
      }, {}); // , {} 초기값 생략 가능 
    };

3. 코드 완성
  1) 테스트 에러 재발생
  ● #getProgrammingLanguages › returns the correct array of objects

      expect(received).toEqual(expected) // deep equality

      Expected: [{"10": "TypeScript"}, {"10": "JavaScript"}, {"6": "Python"}, {"6": "Golang"}]
      Received: {"10": "JavaScript", "6": "Golang"}

  2) reduce 메소드 코드 상의 문제로 판단
    2-1) {}의 형태의 반환이기 때문에 map 메소드를 사용해야 함을 확인
      https://www.redbitdev.com/post/using-array-reduce-with-objects

      // Look up the profiles by id:
      const usersWithProfiles = users.map((user) => {
        return { ...user, profile: profilesByUserId[user.id] };
      });

      // usersWithProfiles:
      // [
      //   { id: 1, email: 'dcontreras@email.tld', profile: { userId: 1, firstName: 'Danielle', lastName: 'Contreras' } },
      //   { id: 2, email: 'afeher@email.tld', profile: { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' } },
      //   { id: 3, email: 'odj@email.tld', profile: { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' } },
      // ]

    2-2) reduce를 map으로 수정, next, ...next, 코드 삭제
      type TProgrammingLanguages = {
        [resultLength: number]: ProgrammingLanguage;
      };

      export function getProgrammingLanguages(): TProgrammingLanguages {
        return Object.entries(ProgrammingLanguage)
          .map((language) => { // reduce를 map으로 수정, next 코드 삭제
            return { [language[0].length]: language[1] }; // ...next, 코드 삭제
        });
      };

    2-3) return Object부터 에러 발생
      Provides functionality common to all JavaScript objects.

      Type '{ [x: number]: ProgrammingLanguage; }[]' is not assignable to type 'TProgrammingLanguages'.
        'number' index signatures are incompatible.
          Type '{ [x: number]: ProgrammingLanguage; }' is not assignable to type 'ProgrammingLanguage'.ts(2322)

    2-4) TProgrammingLanguages를 TProgrammingLanguages[]으로 수정
      type TProgrammingLanguages = {
        [resultLength: number]: ProgrammingLanguage;
      };

      export function getProgrammingLanguages(): TProgrammingLanguages[] { // TProgrammingLanguages를 TProgrammingLanguages[]으로 수정
        return Object.entries(ProgrammingLanguage)
          .map((language) => {
            return { [language[0].length]: language[1] };
        });
      };
*/


/*
9. TOrder를 작성하고 orders 객체에 반영하세요 
*/

// 문제 코드
// type TOrder = {};

// const orders = {
//   firstCar: {
//     status: Status.Initialized,
//     color: Color.Black,
//     availableColors: [Color.Red],
//     orderedBy: {
//       firstName: "jane",
//       lastName: "doe",
//     },
//   },
//   secondCar: {
//     status: Status.Complete,
//     color: Color.Blue,
//     availableColors: [Color.Black],
//     orderedBy: {
//       firstName: "john",
//       lastName: "doe",
//     },
//   },
// };

// (이보형) 문제 풀이
type TOrder = {
  [value: string]: {
    status: Status,
    color: Color,
    availableColors: Color[],
    orderedBy: {
      firstName: string,
      lastName: string,
    },
  },
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

/* (이보형) 컴파일 결과 확인
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
*/


/*
10. TCustomerCar를 작성하고 customerCars 객체에 반영하세요
string 타입 사용 금지
*/

// 문제 코드
// type TCustomerCar = {};

// const customerCars = {
//   1: {
//     customerLastName: "skywalker",
//     car: Car.Coupe,
//     carColor: "Red",
//   },
//   2: {
//     customerLastName: "jedi",
//     car: Car.Sedan,
//     carColor: "Blue",
//   },
// };

// (이보형) 문제 풀이
type TCustomerCar = {
  [value: number]: {
    customerLastName: Customer["lastName"];
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

/* 컴파일 결과 확인
const customerCars = {
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
*/