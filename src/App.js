import React from 'react'
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import CreateAccaunt from './pages/CreateAccount/CreateAccaunt'
import Home from './pages/Home/Home'

function App() {
    return (
        <div className="App">      
            <Home />
            <BrowserRouter>
                 <Switch>
                     <Route>
                         <Home />
                         <CreateAccaunt />
                     </Route>
                 </Switch>
            </BrowserRouter>
        </div>
    )   
}

export default App  
