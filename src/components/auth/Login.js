import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';
import { loginUser } from '../../api/usersApi';
import { Form, Button } from 'react-bootstrap'

const Login = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const { getLoggedIn } = useContext(AuthContext);
   const history = useHistory();

   const login = async (e) => {
      e.preventDefault();

      try {
         const loginData = {
            username,
            password
         }

         await loginUser(loginData);
         await getLoggedIn();
         history.push('/');

         setUsername('');
         setPassword('');

      } catch (err) {
         console.log(err);
         setErrorMessage(err.response.data.message);
      }
   }

   return (
      <Form className='mt-5' onSubmit={login}>
         <Form.Group className='w-100 text-center'>
            <h2>Log in to your account</h2>
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Control className="w-50" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Control className="w-50" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Text className='text-danger'>{errorMessage}</Form.Text>
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Button className='w-25' type="submit">Login</Button>
         </Form.Group>
      </Form>
   )
}

export default Login
