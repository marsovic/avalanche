import React, { Component } from "react";
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import logoAvalanche from "../../assets/Images/logo.png"
import { Container, Row, Col } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        var lang = null;
        var toRet = null;
        if (this.props.lang === "en" || this.props.lang === "null") {
            lang = "fr"

            toRet = (
                <Container fluid>
                    <Row>
                        <Col className={styles.Col} md={{ span: 1, offset: 0 }}>
<<<<<<< HEAD
                            <NavLink to="/" className={styles.Name}>
                                <div>
                                    Thibault <br/>Cadentem
                                </div>
=======
                            <NavLink to="/">
                                <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />
>>>>>>> master
                            </NavLink>
                        </Col>

                        <Col md={{ span: 1, offset: 7 }} className={styles.Col}>
                            <NavLink className={styles.Dropdown} to="#">
                                WORK
                                <div className={styles.DropdownContent}>
                                    <NavLink to="/video">MUSIC VIDEO</NavLink>
                                    <NavLink to="/advertising">ADVERTISING</NavLink>
                                    <NavLink to="/fiction">FICTION</NavLink>
                                </div>
                            </NavLink>
                        </Col>
<<<<<<< HEAD
                        <Col md={{ span: 2, offset: 0 }} className={styles.Col} to="/about">
                            <NavLink className={styles.Link} to="/about">
                                ABOUT/CONTACT
=======
                        <Col md={{ span: 1, offset: 0 }} className={styles.Col} to="/about">
                            <NavLink className={styles.Link} to="/about">
                                ABOUT
                            </NavLink>
                        </Col>
                        <Col md={{ span: 1, offset: 0 }} className={styles.Col} id="bottom" to="/contact">
                            <NavLink className={styles.Link} id="bottom" to="/contact">
                                CONTACT
>>>>>>> master
                            </NavLink>
                        </Col>
                        <Col md={{ span: 1, offset: 0 }} >
                            <NavLink className={styles.LinkLang} style={{marginTop:"6vh",marginLeft:"2vw",border: "2px solid white", marginRight:"4vw", padding:"2px", alignItems:"center", fontSize: 'small', textTransform: "uppercase"}} onClick={this.props.handleLang} to="/">
                                {lang}
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            )
        }

        if (this.props.lang === "fr") {
            lang = "en"
            toRet = (
                <Container fluid>
                <Row>
                    <Col className={styles.Col} md={{ span: 1, offset: 0 }}>
                        <NavLink to="/">
                            <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />
                        </NavLink>
                    </Col>

                    <Col md={{ span: 1, offset: 7 }} className={styles.Col}>
                        <NavLink className={styles.Dropdown} to="#">
                            ACTIVITES
                            <div className={styles.DropdownContent}>
                                <NavLink to="/video">VIDEOS CLIPS</NavLink>
                                <NavLink to="/advertising">PUBLICITES</NavLink>
                                <NavLink to="/fiction">FICTION</NavLink>
                            </div>
                        </NavLink>
                    </Col>
                    <Col md={{ span: 1, offset: 0 }} className={styles.Col} to="/about">
                        <NavLink className={styles.Link} to="/about">
<<<<<<< HEAD
                            A PROPOS/CONTACT
=======
                            A PROPOS    
                        </NavLink>
                    </Col>
                    <Col md={{ span: 1, offset: 0 }} className={styles.Col} id="bottom" to="/contact">
                        <NavLink className={styles.Link} id="bottom" to="/contact">
                            CONTACT
>>>>>>> master
                        </NavLink>
                    </Col>
                    <Col md={{ span: 1, offset: 0 }} >
                        <NavLink className={styles.LinkLang} style={{marginTop:"6vh",marginLeft:"2vw",border: "2px solid white", marginRight:"4vw", padding:"2px", alignItems:"center", fontSize: 'small', textTransform: "uppercase"}} onClick={this.props.handleLang} to="/">
                            {lang}
                        </NavLink>
                    </Col>
                </Row>
            </Container>
            )
        }

        // Passer le WORK en ACTIVITES en FR



        return (
            <div className={styles.Navigation}>
                {toRet}
            </div>
        )

    }
}

export default Navigation;
