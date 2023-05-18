import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [input,setInput] = useState({
        email:'',
        password:''
  })

  const handleLogin =async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3500/v1/login',input);
      localStorage.setItem('token',res.data.token);
      localStorage.setItem('userName',res.data.result.userName)  ;
      console.log(res);
      alert(res.data.message);
      navigate('/')

    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <>
    <h1 style={{textAlign:"center"}}>Login Page</h1>
    <Form onSubmit={handleLogin} style={{margin:"150px" ,marginTop:'0' }} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email" 
        name='email'
        value={input.email}
        onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})}
        />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="password" 
        name='password'
        value={input.password}
        onChange={(e)=>setInput({...input,[e.target.name]: e.target.value})}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Login;