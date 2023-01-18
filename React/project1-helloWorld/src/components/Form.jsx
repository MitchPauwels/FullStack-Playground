import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({})

const onChangeHandler = (e) => {
    const {name, value} = e.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name] : value
    }))
}

const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData);
}


    return(
        <form className='form-container container' onSubmit={onSubmitHandler}>
        <h2 className='form-title'>Day 1: Form</h2>
            <label htmlFor='name' className='label'>Name: </label>
            <input onChange={onChangeHandler} type='text' name='name' id='name' placeholder='name'></input>
            <label htmlFor='email' className='label'>Email: </label>
            <input onChange={onChangeHandler} type='email' name='email' id='email' placeholder='email'></input>
            <label htmlFor='password' className='label'>Password: </label>
            <input onChange={onChangeHandler} type='password' name='password' id='password' placeholder='password'></input>
            <button type='submit'>Submit</button>
        </form>
    )

}

export default Form