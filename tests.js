// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when   executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(Number)).toBe("Hello, World!")
    });
});


describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return "boolean" with any input', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it('should return "true" if "5" is input', function () {
        expect( isFive("5")).toBe(true )
    });
});


describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return "true" when executed', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return "true" when executed', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return "false" when executed', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return "false" when executed', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return "true" when executed', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return "false" when executed', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return "false" when executed', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return "false" when executed', function () {
        expect(isEven()).toBe(false)
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should always return "boolean"', function () {
        expect(isVowel()).toBe("boolean")
    });
    it('"a" should return "true"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('"A" should return "true"', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('"y" should return "false"', function () {
        expect(isVowel("y")).toBe (false)
    });
    it('4 should return "false"', function () {
        expect(isVowel(4)).toBe (false)
    });
    it('"true" should return "false"', function () {
        expect(isVowel(true)).toBe (false)
    });
    it('"false should return "false"', function () {
        expect(isVowel(false)).toBe (false)
    });
    it('"banana" should return "false"', function () {
        expect(isVowel("banana")).toBe (false)
    });
    it('should return "false"', function () {
        expect(isVowel()).toBe (false)
    });
});


describe('add', function () {
    it('should be defined a function', function () {
        expect(typeof add).toBe("function")
    });
    it('should return 5', function () {
        expect(add(2, 3)).toBe(5)
    });
    it('should return -12', function () {
        expect(add(-3, -9)).toBe(-12)
    });
    it('should return 11', function () {
        expect(add("5", 6)).toBe(11)
    });
    it('should return 6', function () {
        expect(add("-4", "10")).toBe(6)
    });
    it('should return NaN', function () {
        expect(add("banana", "split")).toBe(NaN)
    });
});
