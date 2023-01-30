import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';
import { getProgrammingLanguages, Status, getSum, isStatusPending, getStatusObject, isStatusComplete } from './index';

describe('Status enum', () => {
    it('returns a list of status array', () => {
        expect(Object.keys(Status)).toHaveLength(3);
    });
});

describe('#getSum', () => {
    it('getSums correctly', () => {
        expect(getSum(1, 2)).toBe(3);
    });
});

describe('#isStatusPending', () => {
    it("returns false if status isn't pending", () => {
        expect(isStatusPending(Status.Initialized)).toBe(false);
    });

    it('returns true if status is pending', () => {
        expect(isStatusPending(Status.Pending)).toBe(true);
    });
});

describe('#isStatusComplete', () => {
    it("returns false if status isn't complete", () => {
        expect(isStatusComplete(Status.Pending)).toBe(false);
    });

    it('returns true if status is complete', () => {
        expect(isStatusComplete(Status.Complete)).toBe(true);
    });
});

describe('#getStatusObject', () => {
    it('returns the correct object', () => {
        expect(getStatusObject()).toEqual({
            Initialized: 'initialized',
            Pending: 'pending',
            Complete: 'complete',
        });
    });
});

describe('🌟BONUS: #getStatusObject is called with .reduce', () => {
    beforeEach(() => {
        jest.spyOn(Array.prototype, 'reduce');
    });

    afterEach(() => {
        expect(Array.prototype.reduce).toHaveBeenCalled();
    });

    it('is called with Array.reduce', () => {
        expect(getStatusObject()).toEqual({
            Initialized: 'initialized',
            Pending: 'pending',
            Complete: 'complete',
        });
    });
});

describe('#getProgrammingLanguages', () => {
    beforeEach(() => {
        jest.spyOn(Object, 'entries');
    });

    afterEach(() => {
        expect(Object.entries).toHaveBeenCalled();
    });

    it('returns the correct array of objects', () => {
        expect(getProgrammingLanguages()).toEqual([{ 10: 'TypeScript' }, { 10: 'JavaScript' }, { 6: 'Python' }, { 6: 'Golang' }]);
    });
});
