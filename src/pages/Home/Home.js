import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import PeopleCount from "../../components/PeopleCount/PeopleCount";
import BottomBar from "../../components/BottomBar/BottomBar";
import SiteBottom from "../../components/SiteBottom/SiteBottom";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Topbar from "../../components/Topbar/Topbar";

function Home() {
  return (
    <div className="home">
        <Topbar />
        <Header />
      <Sidebar />
      <BottomBar />
      <SiteBottom />
    </div>
  );
}

export default Home;
