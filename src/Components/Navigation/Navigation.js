import React, { Component } from "react";
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import logoAvalanche from "../../assets/Images/logo.png"

class Navigation extends Component {
    state = {
        rooms: null
    }

    render() {
        return (
            <div className={styles.Navigation}>
                <ul>
                    <NavLink /*className={styles.Link}*/ to="/">
                        <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />
                    </NavLink>
                    <NavLink className={styles.Link} style={{border: "2px solid white", padding:"2px", marginTop:"15px", alignItems:"center", fontSize: 'small'}} to="/">
                        FR
                    </NavLink>
                    <NavLink className={styles.Link} style={{borderLeft: "2px solid white", height: "14px", verticalAlign: "top", paddingBottom:"20px"}} to="/">
                        Corp
                    </NavLink>
                    <NavLink className={styles.Link} to="/">
                        Contact
                    </NavLink>
                    <NavLink className={styles.Link} to="/">
                        About
                    </NavLink>
                    <NavLink className={styles.Dropdown} to="/">
                        Work
                        <div className={styles.DropdownContent}>
                            <a href="/">Music Video</a>
                            <a href="/">Advertising</a>
                            <a href="/">Fiction</a>
                        </div>
                    </NavLink>
                </ul>
            </div>
        )

    }
}

export default Navigation;
