import React from 'react'
import {NavLink} from "react-router-dom"
function NavBar() {
return (

    <ul>
        <li>
            <NavLink  to="/" style={
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
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/docs" style={
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
                Docs
            </NavLink>
        </li>
        <li>
            <NavLink to="/blog" style={
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
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink to="/showcase" style={
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
                ShowCase
            </NavLink>
        </li>
    </ul>
)
}

export {NavBar}