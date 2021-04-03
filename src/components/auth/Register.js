import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';
import { registerUser } from '../../api/usersApi';
import { Form, Button } from 'react-bootstrap'

const Register = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [verifyPassword, setVerifyPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const { getLoggedIn } = useContext(AuthContext);
   const history = useHistory();

   const register = async (e) => {
      e.preventDefault();

      try {
         const registerData = {
            username,
            password,
            verifyPassword
         }

         await registerUser(registerData);
         await getLoggedIn();
         history.push('/');

         setUsername('');
         setPassword('');
         setVerifyPassword('');

      } catch (err) {
         console.log(err);
         setErrorMessage(err.response.data.message);
      }
   }

   return (
      <Form className='mt-5' onSubmit={register}>
         <Form.Group className='w-100 text-center'>
            <h2>Register new account</h2>
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Control className="w-50" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Control className="w-50" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Control className="w-50" type="password" placeholder="Verify Password" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} />
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Form.Text className='text-danger'>{errorMessage}</Form.Text>
         </Form.Group>
         <Form.Group className='w-100 justify-content-center d-flex'>
            <Button className='w-25' type="submit">Register</Button>
         </Form.Group>
      </Form>
   )
}

export default Register
