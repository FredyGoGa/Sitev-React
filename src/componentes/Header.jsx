import React from 'react'
import "./header.css"
import {Notifications, Language, Settings} from '@material-ui/icons';


export default function Header() {
  return (
    //este es el div header con header de la izquierda aca va el logo//
    <div className="header">
        <div className="headerWrapper">
          <div className="headerleft">
            <span className="logo">KRONOS</span>
          </div>
          <div className="headerRight">
            <div className="headerbarIconsContainer">
          <Notifications/>
          <span className="headerIconBadge">2</span>
            </div>

            <div className="headerbarIconsContainer">
          <Language/>
          <span className="headerIconBadge">2</span>
            </div>

            <div className="headerbarIconsContainer">
          <Settings/>
          <span className="headerIconBadge">2</span>
            </div>

          </div>
        </div>
    </div>
  )
}
