import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Topbar from './components/Topbar/Topbar'

function App() {
    return (
        <div className="App">
            <Topbar />  
            <Navbar />
            <Header />  
        </div>
    )
}

export default App  
