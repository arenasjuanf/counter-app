import { getSaludo } from "../../base/02-template-string";

describe("template string test", () => {

    test("getSaludo test", () => {
        const name = "Juanf";       
        const result = getSaludo(name);
        expect(result).toBe("Hola " + name)
    }) 


})