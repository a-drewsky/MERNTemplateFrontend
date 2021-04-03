import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ContentPanel from './components/content/ContentPanel'
import Navigation from './components/layout/Navigation'
import AuthContext from './context/AuthContext'
import { Container } from 'react-bootstrap'

const Router = () => {

   const { loggedIn } = useContext(AuthContext)

   return (
      <BrowserRouter>
         <Navigation />
         <Container>
            <Switch>
               <Route exact path="/">
                  <h1 className="w-100 text-center mt-5">Home</h1>
               </Route>
               {
                  loggedIn === false && (
                     <>
                        <Route exact path="/register">
                           <Register />
                        </Route>
                        <Route exact path="/login">
                           <Login />
                        </Route>
                     </>
                  )
               }
               {
                  loggedIn === true && (
                     <>
                        <Route exact path="/content">
                           <ContentPanel />
                        </Route>
                     </>
                  )
               }
            </Switch>
         </Container>
      </BrowserRouter>
   )
}

export default Router
