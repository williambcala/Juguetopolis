import { useState } from "react";

const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);

    const onInputChange = (evt) => {
        const { name, value } = evt.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => {
        setFormState(initialState);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    };
}

export default useForm;
