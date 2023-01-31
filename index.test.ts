import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from "@jest/globals";
import {
  Status,
  getSum,
  isStatusPending,
  isStatusComplete,
  getStatusObject,
  getCars,
  getProgrammingLanguages,
} from "./index";


// 이건 왜 하는 건지..?
describe("Status enum", () => {
  it("returns a list of status array", () => {
    expect(Object.keys(Status)).toHaveLength(3);
  });
});

// #4. 
describe("#getSum", () => {
  it("getSums correctly", () => {
    expect(getSum(1, 2)).toBe(3);
  });
});

// #5-1. 
describe("#isStatusPending", () => {
  it("returns false if status isn't pending", () => {
    expect(isStatusPending(Status.Initialized)).toBe(false);
  });

  it("returns true if status is pending", () => {
    expect(isStatusPending(Status.Pending)).toBe(true);
  });
});

// #5-2. 
describe("#5. isStatusComplete", () => {
  it("returns false if status isn't complete", () => {
    expect(isStatusComplete(Status.Pending)).toBe(false);
  });

  it("returns true if status is complete", () => {
    expect(isStatusComplete(Status.Complete)).toBe(true);
  });
});

// #6-1.
describe("#6. getStatusObject", () => {
  it("returns the correct object", () => {
    expect(getStatusObject()).toEqual({
      Initialized: "initialized",
      Pending: "pending",
      Complete: "complete",
    });
  });
});

// #6-2. 
describe("🌟BONUS: #6. getStatusObject is called with .reduce", () => {
  beforeEach(() => {
    jest.spyOn(Array.prototype, "reduce");
  });

  afterEach(() => {
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });

  it("is called with Array.reduce", () => {
    expect(getStatusObject()).toEqual({
      Initialized: "initialized",
      Pending: "pending",
      Complete: "complete",
    });
  });
});

// #8. 
describe("#8. getProgrammingLanguages", () => {
  beforeEach(() => {
    jest.spyOn(Object, "entries");
  });

  afterEach(() => {
    expect(Object.entries).toHaveBeenCalled();
  });

  it("returns the correct array of objects", () => {
    expect(getProgrammingLanguages()).toEqual([
      { 10: "TypeScript" },
      { 10: "JavaScript" },
      { 6: "Python" },
      { 6: "Golang" },
    ]);
  });
  
});
