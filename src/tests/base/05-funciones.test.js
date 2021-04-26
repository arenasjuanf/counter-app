import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("functions tests", () => {

    test("should to return an object", () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(userTest).toEqual(user);

    })


    test("should to return another object", () => {

        const name = "Juan";
        const user = getUsuarioActivo(name);


        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });

    })


    



})