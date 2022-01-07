import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Header from "../../components/Header/Header";
import Teachers from "../../components/Teachers/Teachers";
import PeopleCount from "../../components/PeopleCount/PeopleCount";
import BottomBar from "../../components/BottomBar/BottomBar";
import SchoolActive from "../../components/SchoolActive/SchoolActive";
import SiteBottom from "../../components/SiteBottom/SiteBottom";
import TestLink from "../../components/TestLink/TestLink";

function Home() {
  return (
    <div className="home">
      <Topbar />
      <Navbar />
      <Sidebar />
      <Header />
      <TestLink />
      <Teachers />
      <SchoolActive />
      <PeopleCount />
      <BottomBar />
      <SiteBottom />
    </div>
  );
}

export default Home;
