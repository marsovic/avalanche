import React, { Component } from "react";
import styles from "./About.module.css";
import picture from "../../assets/Images/FABIA_Samuel_FOUGUE.jpg"

import En from "../../assets/language/en.json"
import Fr from "../../assets/language/fr.json"

import { Row, Col, Container } from 'reactstrap';

class Advertising extends Component {
    render() {
        var lang = null;
        var toShow = null;

        if (this.props.lang === "en" || this.props.lang === null) {
            lang = En

            toShow = (
                <div className={styles.Body} style={{ paddingTop: "3vh" }}>
                    {lang.About.body}
                </div>
            )
        }

        if (this.props.lang === "fr") {
            lang = Fr
            toShow = (
                <div className={styles.BodyFr} style={{ paddingTop: "3vh" }}>
                    {lang.About.body}
                </div>
            )
        }

        return (
            <div className={styles.About}>
                <Container fluid >
                    <Row className={styles.List}>
                        <Col>
                            <br />
                            <div className={styles.Title}>
                                {lang.About.titre}
                            </div>
                            {toShow}
                        </Col>

                        <Col>
                            <br />
                            <div className={styles.Title}>
                                Contact
                            </div>

                            <div className={styles.UnderName} style={{ paddingTop: "3vh" }}>
                                <a href="mailto:thibaultcadentem@gmail.com">thibaultcadentem@gmail.com</a> <br />
                                <div style={{ paddingTop: "1vh" }}>
                                    <a href="tel:+33 6 95 65 74 14">+33 6 95 65 74 14</a><br />
                                </div>
                                <div style={{ paddingTop: "1vh" }}>
                                    <a href="https://www.instagram.com/thibaultcadentem/?hl=fr">@thibaultcadentem</a>   
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <img alt="Thibault Cadentem" src={picture} className={styles.Picture} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}

export default Advertising;
