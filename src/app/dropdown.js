import React, {useState} from "react";
import Link from 'next/head';
const Menu = () => { 
  return (
      <div id="modal">
        <ul id="menu-list" type="none">
          <li className="menu-item">
            <Link className="menu-link">
              <h4>Item</h4>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <h4>Item</h4>
            </Link> 
          </li>
          <li className="menu-item">
            <Link className="menu-link">
              <h4>Item</h4>
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default Menu;