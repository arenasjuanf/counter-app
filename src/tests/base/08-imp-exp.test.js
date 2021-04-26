import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("import tests", () => {

    test("it must to return a hero by id", () => {
        const id = 1;
        const hero = getHeroeById(id);
        const heroTest = heroes.find((h) => h.id === id); 
        expect(hero).toEqual(heroTest)
    })  


    test("it must to return undefined if hero doesnt exist", () => {
        const id = 30;
        const hero = getHeroeById(id);
        expect(hero).toBeUndefined();
    })  

})