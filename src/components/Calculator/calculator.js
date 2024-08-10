import React, { useState} from 'react';
import "./calculator.css"
const Calculator = ({ add }) => {
    const [value, setValue] = useState("");
    const [total, setTotal] = useState(0);

    const sum = () => {
        setTotal(add(value));
    };
    /*
    useEffect(() => {
        sum()
    }, [value]);*/
    return (
        <div className="calculatorContainer">
            <div data-title={'To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\\n[numbers…]". For example, "//;\\n1;2" where the delimiter is ";"'} className={"inputGroupContainer"}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter number."
                />
            </div>
            <div>
                <button onClick={sum}>Calculate Sum</button>
            </div>
            <div>
                <strong>Total:</strong> {total}
            </div>
        </div>
    );
};

export default Calculator;
