import React, {useContext} from 'react'
import { useHistory } from 'react-router';
import { logoutUser } from '../../api/usersApi';
import AuthContext from '../../context/AuthContext'
import { Button } from 'react-bootstrap'

const LogoutButton = () => {

   const { getLoggedIn } = useContext(AuthContext);

   const history = useHistory();

   const logout = async () => {
      await logoutUser();
      await getLoggedIn();
      history.push('/');
   }

   return (
      <Button className='bg-secondary border-0' onClick={logout}>
         Log out
      </Button>
   )
}

export default LogoutButton
