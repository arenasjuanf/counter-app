import PropTypes from 'prop-types'
import { useState } from 'react';


const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState( value ); // []

    const handleAdd = () => setCounter( counter + 1 );
    const handleSubs = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>Counter</h1>
            <h2> { counter } </h2>

            <button onClick={ handleSubs } >
                -1
            </button>
            <button onClick={ handleReset } >
                Reset
            </button>
            <button onClick={ handleAdd } >
                +1
            </button>

        </>
    )


}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
    value : 100
}

export default CounterApp;