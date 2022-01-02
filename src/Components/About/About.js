import React, { Component } from "react";
import styles from "./About.module.css";
import picture from "../../assets/Images/FABIA_Samuel_FOUGUE.jpg"

import En from "../../assets/language/en.json"
import Fr from "../../assets/language/fr.json"

import { Row, Col, Container } from 'reactstrap';

class Advertising extends Component {
    render() {
        var lang = null;
        var toShow= null;

        if(this.props.lang === "en" || this.props.lang === null) {
            lang = En

            toShow = (
                <div className={styles.Body}>
                    {lang.About.body}
                </div>
            )
        }

        if(this.props.lang === "fr") {
            lang = Fr
            toShow = (
                <div className={styles.BodyFr}>
                    {lang.About.body}
                </div>
            )
        }

        return (
<<<<<<< HEAD
            <div className={styles.About}>
<<<<<<< HEAD
                <Container fluid >
                    <Row className={styles.List}>
                        <Col>
                            <br />
                            <div className={styles.Title}>
                                {lang.About.titre}
=======
            <Container fluid >
=======
            <Container fluid className={styles.About}>
>>>>>>> parent of 2db92f2... end site
                <div className={styles.Title}>
                    {lang.About.titre}
                </div>
                <Row className={styles.List}>
                    <Col> 
                        {toShow}
                    </Col>
<<<<<<< HEAD

                    <Col>
                        <div className={styles.Body} >
                            <div className={styles.Name}>
                                THIBAULT CADENTEM
>>>>>>> master
                            </div>
                            {toShow}
                        </Col>
=======
>>>>>>> parent of 2db92f2... end site

                    <Col>
                        <div className={styles.Body} >
                            <div className={styles.Name}>
                                THIBAULT CADENTEM
                            </div>
                            <div className={styles.UnderName}>
                                {lang.About.underName}
                            </div>

                            <div className={styles.UnderName} style={{paddingTop:"3vh"}}>
                                <a href="https://www.instagram.com/thibaultcadentem/?hl=fr">@thibaultcadentem</a>
                            </div>
                        </div>
                    </Col>

<<<<<<< HEAD
<<<<<<< HEAD
                        <Col>
                            <img alt="Thibault Cadentem" src={picture} className={styles.Picture} />
                        </Col>
                    </Row>
                </Container>
=======
=======
>>>>>>> parent of 2db92f2... end site
                    <Col>
                        <img alt="Thibault Cadentem" src={picture} className={styles.Picture}/>
                    </Col>
                </Row>
            </Container>
<<<<<<< HEAD
>>>>>>> master
            </div>
=======
>>>>>>> parent of 2db92f2... end site
        )

    }
}

export default Advertising;
