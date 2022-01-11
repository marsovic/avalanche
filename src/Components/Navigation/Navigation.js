import React, { Component } from "react";
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
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
                            <NavLink to="/" className={styles.Name}>
                                <div>
                                    Thibault <br />Cadentem
                                </div>
                            </NavLink>
                        </Col>

                        <Col md={{ span: 4, offset: 7 }} className={styles.Col}>
                            <NavLink className={styles.LinkLang} style={{ marginTop: "6vh", marginLeft: "2vw", border: "1.5px solid white", marginRight: "4vw", paddingLeft: "2px", paddingTop:"0px", paddingBottom:"0px",margingBottom:"0px", paddingRight:"2px", alignItems: "center", fontSize: 'small', textTransform: "uppercase" }} onClick={this.props.handleLang} to="/">
                                {lang}
                            </NavLink>

                            <NavLink className={styles.Link} style={{marginLeft:"50px", marginRight:"10px"}} to="/about">
                                ABOUT/CONTACT
                            </NavLink>

                            <NavLink className={styles.Dropdown}to="#">
                                WORK
                                <div className={styles.DropdownContent}>
                                    <NavLink to="/video">MUSIC VIDEO</NavLink>
                                    <NavLink to="/advertising">ADVERTISING</NavLink>
                                    <NavLink to="/fiction">FICTION</NavLink>
                                </div>
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
                            <NavLink to="/" className={styles.Name}>
                                <div>
                                    Thibault <br />Cadentem
                                </div>
                            </NavLink>
                        </Col>

                        <Col md={{ span: 4, offset: 7 }} className={styles.Col}>
                            <NavLink className={styles.LinkLang} style={{ marginTop: "6vh", marginLeft: "2vw", border: "1.5px solid white", marginRight: "4vw", paddingLeft: "2px", paddingTop:"0px", paddingBottom:"0px",margingBottom:"0px", paddingRight:"2px", alignItems: "center", fontSize: 'small', textTransform: "uppercase" }} onClick={this.props.handleLang} to="/">
                                {lang}
                            </NavLink>

                            <NavLink className={styles.Link} style={{marginLeft:"50px", marginRight:"10px"}} to="/about">
                                A PROPOS/CONTACT
                            </NavLink>

                            <NavLink className={styles.Dropdown}to="#">
                                ACTIVITES
                                <div className={styles.DropdownContent}>
                                    <NavLink to="/video">VIDEOS CLIPS</NavLink>
                                    <NavLink to="/advertising">PUBLICITES</NavLink>
                                    <NavLink to="/fiction">FICTION</NavLink>
                                </div>
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
