import React, {useState} from 'react'

const FormThree = () => {
    const [formData, setFormData] = useState({})

    const onChangeHandler =(e) => {
        const {name, value} = e.target
        setFormData(prevFormData => (
            {...prevFormData,
            [name] : value}
        ))
        console.log(e.target);
        
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(formData);
    }



    return(
        <form onSubmit={onSubmitHandler} className='container'>
            <label htmlFor='firstName' className='label'/> Name:
            <input onChange={onChangeHandler} type='text' name='firstName' id='firstName'/>
            <label htmlFor='email' className='label'/> Email:
            <input onChange={onChangeHandler} type='email' name='email' id='email'/>
            <label htmlFor='password' className='label'/> Password
            <input onChange={onChangeHandler} type='password' name='password' id='password'/>
            <button>Send</button>
        </form>
    )
}

export default FormThree