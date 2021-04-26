import { getImagen  } from '../../base/11-async-await';

describe("Async Await tests", () => {

    test("should return a image url", async () =>{
        
        const url = await getImagen();
        expect( typeof url ).toBe("string");
    })


})