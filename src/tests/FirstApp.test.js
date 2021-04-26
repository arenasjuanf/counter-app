import '@testing-library/jest-dom/extend-expect';
import FirstApp from '../FirstApp';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import {createSerializer} from 'enzyme-to-json';


import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe("Pruebas en FirstApp", () => {

   /*  test("should show  'Juanf'", ()=>{

        const name = 'Juanf';
        const wrapper = render(<FirstApp name={ name } />);
        expect( wrapper.getByText(name) ).toBeInTheDocument();
    }) */

    test("should show <FirstApp/>", () => {
        expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

        
        const wrapper = shallow(<FirstApp name="Juanf" />);
        expect(wrapper).toMatchSnapshot();

    })

    test("should show 'name' propertie sended by props ", () => {
        expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

        const wrapper = shallow(<FirstApp name="Juanf" />);
        const wrapperText = wrapper.find("h5").text();
        expect(wrapperText).toBe("Juanf");

    })

})