import React, { Component } from "react";
import styles from "./Contact.module.css";

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

        var text = lang.Contact.body1.split("?")
<<<<<<< HEAD
=======
        console.log(text)
>>>>>>> parent of 2db92f2... end site

        return (
            <div className={styles.Contact}>
                <div className={styles.Title}>
                    CONTACT
                </div>

                <div className={styles.Body}>
                    {text[0] + "?"} <br/>
                    {text[1] + "?"} <br/> 
                    {lang.Contact.body2}
                </div>

                <div className={styles.Body2} style={{fontSize:"medium"}}>
                    <a href="mailto:contact@avalancheparis.tv">contact@avalancheparis.tv</a> <br/>
<<<<<<< HEAD
                    <a href="tel:+33 6 95 65 74 14">+33 6 95 65 74 14</a> <br/>
                    <a href="https://www.instagram.com/avalancheparis/">@avalancheparis</a>
=======
                    <p>+33 6 95 65 74 14</p> <br/>
                    <a href="blablabla">@avalancheparis</a>
>>>>>>> parent of 2db92f2... end site
                </div>
            </div>
        )

    }
}

export default Contact;
