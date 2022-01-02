import React, { Component } from "react";
import styles from "./Navigation.module.css"
import { NavLink } from "react-router-dom";
import logoAvalanche from "../../assets/Images/logo.png"

class Navigation extends Component {
    render() {
        var lang = null;
        if(this.props.lang === "en" || this.props.lang === "null") {
            lang = "fr"
<<<<<<< HEAD

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
=======
>>>>>>> parent of 2db92f2... end site
        }
        
        if(this.props.lang === "fr") {
            lang = "en"
<<<<<<< HEAD
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
=======
>>>>>>> parent of 2db92f2... end site
        }

        return (
            <div className={styles.Navigation}>
                <ul>
                    <NavLink className={{border:"1px solid red"}} to="/">
                        <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />
                    </NavLink>
                    <NavLink className={styles.Link} style={{marginTop:"6vh",marginLeft:"2vw",border: "2px solid white", marginRight:"4vw", padding:"2px", alignItems:"center", fontSize: 'small', textTransform: "uppercase"}} onClick={this.props.handleLang} to="/">
                        {lang}
                    </NavLink>
                    <NavLink className={styles.Link} id="bottom" to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink className={styles.Link} to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink className={styles.Dropdown} to="#">
                        WORK
                        <div className={styles.DropdownContent}>
                            <NavLink to="/video">MUSIC VIDEO</NavLink>
                            <NavLink to="/advertising">ADVERTISING</NavLink>
                            <NavLink to="/fiction">FICTION</NavLink>
                        </div>
                    </NavLink>
                </ul>
            </div>
        )

    }
}

export default Navigation;
