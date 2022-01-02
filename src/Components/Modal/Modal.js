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
<<<<<<< HEAD

            if(this.state.workClicked) {
                toShow= (
                    <div>
                        <NavLink to="/video"> <p className={styles.Link} > MUSIC VIDEO </p></NavLink>
                        <NavLink to="/advertising"> <p className={styles.Link} > ADVERTISING </p></NavLink>
                        <NavLink to="/fiction"> <p className={styles.Link} >FICTION</p></NavLink>
                    </div>
                )
            } else {
                toShow= (
                    <div>
                        <div className={styles.Link} onClick={this.workClicked}>
                            WORK
                        </div>
                        <NavLink className={styles.Link} to="/about">
<<<<<<< HEAD
                            ABOUT/<br/>CONTACT
=======
                            ABOUT
                        </NavLink>
                        <NavLink className={styles.Link} id="bottom" to="/contact">
                            CONTACT
>>>>>>> master
                        </NavLink>
                        <NavLink className={styles.Link} onClick={this.props.onClickLang} to="/">
                            <p style={{position:"relative", border: "2px solid white", padding:"2px", alignItems:"center",fontSize: 'small', textTransform: "uppercase"}} >{lang} </p>
                        </NavLink>
                    </div>
                )
            }

=======
>>>>>>> parent of 2db92f2... end site
        }
        
        if(this.props.lang === "fr") {
            lang = "en"
        }

<<<<<<< HEAD
            if(this.state.workClicked) {
                toShow= (
                    <div>
                        <NavLink to="/video">  <p className={styles.Link} >VIDEOS CLIPS</p></NavLink>
                        <NavLink to="/advertising"><p className={styles.Link} >PUBLICITES</p></NavLink>
                        <NavLink to="/fiction"><p className={styles.Link} >FICTION</p></NavLink>
                    </div>
                )
            } else {
                toShow= (
                    <div>
                        <div className={styles.Link} onClick={this.workClicked}>
                            ACTIVITES
                        </div>
                        <NavLink className={styles.Link} to="/about">
<<<<<<< HEAD
                            A PROPOS/<br/>CONTACT
=======
                            A PROPOS
                        </NavLink>
                        <NavLink className={styles.Link} id="bottom" to="/contact">
                            CONTACT
>>>>>>> master
                        </NavLink>
                        <NavLink className={styles.Link} onClick={this.props.onClickLang} to="/">
                            <p style={{position:"relative", border: "2px solid white", padding:"2px", alignItems:"center",fontSize: 'small', textTransform: "uppercase"}} >{lang} </p>
                        </NavLink>
=======
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
>>>>>>> parent of 2db92f2... end site
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