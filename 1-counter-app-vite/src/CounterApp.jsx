import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	const handleAdd = () => setCounter((c) => c + 1);
	const handleSubstract = () => setCounter((c) => c - 1);
	const handleReset = () => setCounter(() => value);

    console.log("render");

	return (
		<>
			<h1> Counter App </h1>
			<h2> {counter} </h2>

			<button onClick={handleSubstract}> -1 </button>
			<button aria-label="btn-reset" onClick={handleReset}> Reset </button>
			<button onClick={handleAdd}> +1 </button>
		</>
	);
};

CounterApp.defaultProps = {
	value: 0,
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
