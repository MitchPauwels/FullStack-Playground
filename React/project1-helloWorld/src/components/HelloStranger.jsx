import React, {useState} from 'react'

const HelloStranger = () => {

    const [name, setName] = useState('')

    const onChangeHandler = (e) => {
        setName(e.target.value)
    }

    return(
        <div className='container'>
            <label htmlFor='username' className='label'/>Enter Your name: 
            <input type='text' name='username' id='username' onChange={onChangeHandler}/>
            <h2>Hello {name}</h2>
        </div>
    )
}

export default HelloStranger