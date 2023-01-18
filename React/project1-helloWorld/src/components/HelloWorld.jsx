import React,{useState} from 'react'

const HelloWorld = () => {

const [name, setName] = useState('')

const onChangeHandler = (e) => {
     setName(e.target.value)
}




	return (
		<div className="container">
			<label className="label" htmlFor="username" /> Enter your name:
			<input onChange={onChangeHandler} name="username" id="username" />
            <h1>Hello {name}</h1>
		</div>
	);
};

export default HelloWorld;
