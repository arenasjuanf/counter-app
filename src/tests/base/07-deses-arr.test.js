import { retornaArreglo } from "../../base/07-deses-arr"

describe("estructuring tests", () =>{
    test("return [string, number]", () => {
       const [ string, number] = retornaArreglo();
       expect(string).toEqual('ABC');
       expect(typeof string).toEqual('string');

       expect(number).toEqual(123);
       expect(typeof number).toEqual('number');

    })
})