import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contain from "./Contain";
import About from "./About";

export default class Rounting extends Component<any, any> {
  constructor(props: any) {
    super(props);
    //this.state = {:};
  }

  render(): React.ReactNode {
    return (
      <>
        <BrowserRouter>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Home"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/About"}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Contain"}>
                Contain
              </NavLink>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Contain" element={<Contain></Contain>}></Route>
            <Route path="/About" element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
