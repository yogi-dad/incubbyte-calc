import React, {useEffect, useState} from 'react';

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
        <div>
            <div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter number."
                />
                <i>
                    To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";"
                </i>
            </div>
            <div>
                <button onClick={sum}>Calculate Sum</button>
            </div>
            <div>
                <p>Total: {total}</p>
            </div>
        </div>
    );
};

export default Calculator;
