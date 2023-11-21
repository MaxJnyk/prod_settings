import {classNames} from "../classNames/className";

describe('classNames', () => {
    test('should return a string with the given class name', () => {
        const result = classNames('class');
        expect(result).toBe('class');
    });

    test('should return a string with additional class names', () => {
        const result = classNames('class', {}, ['additional-class']);
        expect(result).toBe('class additional-class');
    });

    test('should return a string with modified class names', () => {
        const result = classNames('class', { 'modified-class': true });
        expect(result).toBe('class modified-class');
    });

    test('should return a string with additional and modified class names', () => {
        const result = classNames('class', { 'modified-class': true }, ['additional-class']);
        expect(result).toBe('class additional-class modified-class');
    });

    test('should not include empty or falsy values', () => {
        const result = classNames('class', { 'modified-class': false }, ['', null, undefined]);
        expect(result).toBe('class');
    });
});
