import React, { Component } from "react";
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import logoAvalanche from "../../assets/Images/logo.png"
import Modal from "../Modal/Modal";

class Navigation extends Component {
    state ={
        clicked: false
    }

    closingModal = () => {
        this.setState({clicked: false})
    }

    openingModal = () => {
        this.setState({clicked: true})
    }


    render() {
        var toShow = (
            <p className={styles.Link} onClick={this.openingModal}>
                <p>&#8801;</p>
            </p>
        )

        if(this.state.clicked) {
            toShow= <Modal lang={this.props.lang} show={true} closingModal={this.closingModal} onClickLang={this.props.handleLang}/>
        }

        return (
            <div className={styles.Navigation}>
                <div className="listHor">
                    <NavLink to="/">
                        <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />
                    </NavLink>
                    
                    {toShow}
                </div>
            </div>
        )

    }
}

export default Navigation;
