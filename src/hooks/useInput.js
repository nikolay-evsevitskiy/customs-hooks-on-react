import {useState} from "react";

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = (e) => {
        setValue(e.currentTarget.value)
    }
    const onClick = (inputName) => {
        console.log(inputName + ': ' + value)
        setValue('')
    }
    return {
        value, onChange, onClick
    }
}
