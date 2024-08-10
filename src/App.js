import './App.css';
import Calculator from "./components/Calculator/calculator";
import {add} from "./utils/common";

function App() {
    return (
        <Calculator add={add}/>
    );
}

export default App;
