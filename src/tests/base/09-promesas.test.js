import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Promises tests", () => {

    test("get hero by id (Async)", (done) => {
        const id = 1;
        getHeroeByIdAsync( id ).then(( hero) => {
            expect(hero).toBe(heroes[0]);
            done();
        });

    });

    test("Error if hero by id doesnt exist", (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        });
    })

})