import CounterApp from '../CounterApp';
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

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test("should show <CounterApp/>", () => {
        expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

        const wrapper = shallow(<CounterApp value={0} />);
        expect(wrapper).toMatchSnapshot();

    })

    test("should show default value = 100", () => {
        expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

        const wrapperText = wrapper.find("h2").text();
        expect(wrapperText).toBe(" 100 ");

    })

    test("should +1 to counter", ()=>{
        
        wrapper.find("button").at(2).simulate("click");

        const counterText = wrapper.find("h2").text().trim();
        expect( counterText ).toBe('101');
    })

    test("should -1 to counter", ()=>{
        
        wrapper.find("button").at(0).simulate("click");

        const counterText = wrapper.find("h2").text().trim();
        expect( counterText ).toBe('99');
    })

    test("should reset counter", ()=>{
        
        const wrapper = shallow(<CounterApp />);
        wrapper.find("button").at(1).simulate("click");

        const counterText = wrapper.find("h2").text().trim();
        expect( counterText ).toBe('100');
    })

})