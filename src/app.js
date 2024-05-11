import styles from './app.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	//const numberBtnClick = (event) => setOperand1(event.target.value);

	function clearAll() {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	}

	function calculate() {
		let result = 0;
		if (operand1 != '' && operand2 != '' && operator != '') {
			if (operator === '+') {
				result = Number(operand1) + Number(operand2);
			}
			if (operator === '-') {
				result = Number(operand1) - Number(operand2);
			}
			setResult(result);
		}
	}

	const numberBtns = nums.map((number, index) => (
		<button
			key={number}
			onClick={() =>
				operator === ''
					? setOperand1(operand1 + number)
					: setOperand2(operand2 + number)
			}
		>
			{index}
		</button>
	));

	//const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={styles['container']}>
			<div className={styles['output']}>
				<input
					className={result && styles['result']}
					type="text"
					defaultValue={!result ? operand1 + operator + operand2 : result}
				/>
			</div>
			<div className={styles['buttons']}>{numberBtns}</div>
			<button
				onClick={() => {
					setOperator('+');
					if (result) {
						setOperand1(result);
						setOperand2('');
						setResult('');
					}
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setOperator('-');
					if (result) {
						setOperand1(result);
						setOperand2('');
						setResult('');
					}
				}}
			>
				-
			</button>
			<button onClick={calculate}>=</button>
			<button onClick={clearAll}>C</button>
		</div>
	);
};
