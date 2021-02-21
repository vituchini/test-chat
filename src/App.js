import React from 'react'
import './App.css';
import JoinBlock from "./components/JoinBlock";
import reducer from "./components/reducer";

function App() {
    const [state, dispatch] = React.useReducer(reducer, {
        isAuth: false
    })
    const onLogin = () => {
        dispatch({
            type:'IS_AUTHENTICATED',
            payload:true
        })
    }
    return (
        <div className="App">
            <JoinBlock/>
        </div>
    );
}

export default App;
