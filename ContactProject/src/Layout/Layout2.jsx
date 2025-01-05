import React from 'react'
import Docs from '../Components/Docs';
import { Outlet } from 'react-router-dom';
import Copyright from '../Components/Copyright';
import Info from '../Components/Info';
import { NavLink } from 'react-router-dom';

function Layout2() {
  return (

    <div>
        <Docs/>
        <ul>
        <li>
            <NavLink  to="installation" style={
                       (activelink) => {
                        let linkStyle= {color:"grey"}
                         if(activelink.isActive)
                         {
                            linkStyle["color"]="red"
                            
                         }
                         else{
                            linkStyle["color"]="grey"
                         }
                         return linkStyle
                    }
            }>
                TailwindCli
            </NavLink>
        </li>
        <li>
            <NavLink to="postcss" style={
                       (activelink) => {
                        let linkStyle= {color:"grey"}
                         if(activelink.isActive)
                         {
                            linkStyle["color"]="red"
                            
                         }
                         else{
                            linkStyle["color"]="grey"
                         }
                         return linkStyle
                    }
            } >
                Postcss
            </NavLink>
        </li>
        <li>
            <NavLink to="framework" style={
                       (activelink) => {
                        let linkStyle= {color:"grey"}
                         if(activelink.isActive)
                         {
                            linkStyle["color"]="red"
                            
                         }
                         else{
                            linkStyle["color"]="grey"
                         }
                         return linkStyle
                    }
            }>
                Framework guides
            </NavLink>
        </li>
        <li>
            <NavLink to="cdn" style={
                       (activelink) => {
                        let linkStyle= {color:"grey"}
                         if(activelink.isActive)
                         {
                            linkStyle["color"]="red"
                            
                         }
                         else{
                            linkStyle["color"]="grey"
                         }
                         return linkStyle
                    }
            }>
                play with cdn
            </NavLink>
        </li>
    </ul>
        <Outlet/>
        <Info/>
        <Copyright/>
    </div>
  )

}

export default Layout2