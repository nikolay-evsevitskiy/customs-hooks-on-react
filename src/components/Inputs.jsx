import React from 'react';
import useInput from "../hooks/useInput";

const Inputs = () => {
    const userName = useInput('')
    const password = useInput('')
    const onClickButton = () => {
        userName.onClick('user')
        password.onClick('password')
    }

    return (
        <div className="App">
            <input type="text" placeholder={'user name'} value={userName.value} onChange={userName.onChange}/>
            <input type="password" placeholder={'password'} value={password.value} onChange={password.onChange}/>
            <button onClick={onClickButton}>Click!</button>

        </div>
    );
};

export default Inputs;
