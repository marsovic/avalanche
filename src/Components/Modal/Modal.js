import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import styles from "./Modal.module.css";

class Modal extends Component {
    state= {
        workClicked: false
    }

    workClicked = () => {
        this.setState({workClicked: true})
    }

    render() {
        var lang = null;
        if(this.props.lang === "en" || this.props.lang === "null") {
            lang = "fr"
        }
        
        if(this.props.lang === "fr") {
            lang = "en"
        }

        var toShow= null
        if(this.state.workClicked) {
            toShow= (
                <div>
                    <NavLink className={styles.Link} to="/video">MUSIC VIDEO</NavLink>
                    <NavLink className={styles.Link} to="/advertising">ADVERTISING</NavLink>
                    <NavLink className={styles.Link} to="/fiction">FICTION</NavLink>
                </div>
            )
        } else {
            toShow= (
                <div>
                    <div className={styles.Link} onClick={this.workClicked}>
                        Work
                    </div>
                    <NavLink className={styles.Link} to="/about">
                        About
                    </NavLink>
                    <NavLink className={styles.Link} id="bottom" to="/contact">
                        Contact
                    </NavLink>
                    <NavLink className={styles.Link} onClick={this.props.onClickLang} to="/">
                        <p style={{position:"relative", border: "2px solid white", padding:"2px", alignItems:"center",fontSize: 'small', textTransform: "uppercase"}} >{lang} </p>
                    </NavLink>
                </div>
            )
        }

        return (
            <div>
                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateX(50vw)' : 'translateX(200vw)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <p className={styles.MenuSymbol} onClick={this.props.closingModal}>
                        <p>&#8801;</p>
                    </p>
                    
                    {toShow}
                </div>
            </div>
        );
    }
}

export default Modal;