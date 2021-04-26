// document name is not important but it should have an intuitive name

describe("demo.js tests", () => {
    test("should be equal", () => {
    
        // 1. initialization
        const msg = "hello world";
    
        // 2. stimulus
        const msg2 = `hello world`;
    
        // 3. observe behavior
        expect(msg).toBe(msg2)
    
    });
})

