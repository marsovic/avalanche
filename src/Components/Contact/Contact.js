import React, { Component } from "react";
import styles from "./Contact.module.css";

import { Container } from 'reactstrap';

import En from "../../assets/language/en.json"
import Fr from "../../assets/language/fr.json"


class Contact extends Component {
    render() {
        var lang = null;

        if(this.props.lang === "en" || this.props.lang === null) {
            lang = En
        }

        if(this.props.lang === "fr") {
            lang = Fr
        }

        return (
            <Container fluid={true} className={styles.Contact}>
                <div className={styles.Title}>
                    CONTACT
                </div>

                <div className={styles.Body}>
                    {lang.Contact.body1} <br/> 
                    {lang.Contact.body2}
                </div>

                <div className={styles.Body} style={{fontSize:"medium"}}>
                    <a href="mailto:contact@avalancheparis.tv">contact@avalancheparis.tv</a> <br/>
                    +33 6 95 65 74 14
                </div>
            </Container>
        )

    }
}

export default Contact;
