import React, { Component } from "react";
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import logoAvalanche from "../../assets/Images/logo.png"

class Navigation extends Component {
    render() {
        var lang = null;
        if(this.props.lang === "en" || this.props.lang === "null") {
            lang = "fr"
        }
        
        if(this.props.lang === "fr") {
            lang = "en"
        }

        return (
            <div className={styles.Navigation}>
                <ul>
                    <NavLink className={{border:"1px solid red"}} to="/">
                        <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />
                    </NavLink>
                    <NavLink className={styles.Link} style={{marginTop:"6vh",marginLeft:"2vw",border: "2px solid white", marginRight:"4vw", padding:"2px", alignItems:"center", fontSize: 'small', textTransform: "uppercase"}} onClick={this.props.handleLang} to="/">
                        {lang}
                    </NavLink>
                    <NavLink className={styles.Link} id="bottom" to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink className={styles.Link} to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink className={styles.Dropdown} to="#">
                        WORK
                        <div className={styles.DropdownContent}>
                            <NavLink to="/video">MUSIC VIDEO</NavLink>
                            <NavLink to="/advertising">ADVERTISING</NavLink>
                            <NavLink to="/fiction">FICTION</NavLink>
                        </div>
                    </NavLink>
                </ul>
            </div>
        )

    }
}

export default Navigation;
