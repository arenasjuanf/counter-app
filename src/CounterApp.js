import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
    const test = (e) => console.log(e);

    return (
        <>
            <h1>Counter</h1>
            <h2> { value } </h2>

            <button onClick={ test } >
                +1
            </button>

        </>
    )


}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};

export default CounterApp;