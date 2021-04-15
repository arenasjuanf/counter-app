import PropTypes from "prop-types";

const FirstApp = ({ name = "default" }) => {
    const greetings =  "Hello World";

    return (
        <>
            <h1> { greetings } </h1>
            <h5>- {name} -</h5>
        </>
    );
}

FirstApp.propTypes = {
    name: PropTypes.string, // .isRequired,
}

FirstApp.defaultProps = {
    subtitle : "example subtitle"
}

export default FirstApp;