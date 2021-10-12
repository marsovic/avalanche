import React, { Component } from "react";
import styles from "./About.module.css";

import En from "../../assets/language/en.json"
import Fr from "../../assets/language/fr.json"

class Advertising extends Component {
    render() {
        var lang = null;

        if (this.props.lang === "en" || this.props.lang === null) {
            lang = En
        }

        if (this.props.lang === "fr") {
            lang = Fr
        }

        return (
            <div className={styles.About}>
                <div className={styles.Title}>
                    {lang.About.titre}
                </div>
                <div>
                    <div className={styles.Body}>
                        {lang.About.body}
                    </div>
                </div>

                <div className={styles.Name}>
                    Thibault Cadentem
                </div>
                <div className={styles.UnderName}>

                    {lang.About.underName}
                </div>

                <div className={styles.UnderName} style={{ paddingTop: "3vh" }}>
                    <a href="https://www.instagram.com/thibaultcadentem/?hl=fr">@thibaultcadentem</a>
                </div>
            </div>
        )

    }
}

export default Advertising;
