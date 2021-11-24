import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import Header from '../../components/Header/Header'
import Teachers from '../../components/Teachers/Teachers'
import PeopleCount from '../../components/PeopleCount/PeopleCount'


function Home() {
    return (
        <div className="home">
            <Topbar />  
            <Navbar />
            <Sidebar />    
            <Header /> 
            <Teachers />
            <PeopleCount />
        </div>
    )
}
   
export default Home
