import React, { createContext, useEffect, useState} from 'react'
import { isUserLoggedIn } from '../api/usersApi';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
   const [loggedIn, setLoggedIn] = useState(undefined);

   const getLoggedIn = async () => {
      const loggedInRes = await isUserLoggedIn();
      setLoggedIn(loggedInRes.data);
   }

   useEffect(() => {
      getLoggedIn();
   }, [])

   return <AuthContext.Provider value={{loggedIn, getLoggedIn}}>
      { props.children }
   </AuthContext.Provider>
}

export default AuthContext;
export { AuthContextProvider }
