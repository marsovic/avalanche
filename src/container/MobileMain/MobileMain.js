import React, { Component } from "react";
import axios from 'axios';

import Navigation from "../../Components/MobileNavigation/Navigation"
import Advertising from "../../Components/MobileAdvertising/Advertising"
import Video from "../../Components/MobileVideo/Video"
import About from "../../Components/MobileAbout/About"
import News from "../MobileNews/News"
import Fiction from "../../Components/MobileFiction/Fiction";
import Contact from "../../Components/MobileContact/Contact";
import logoAvalanche from "../../assets/Images/logo.png"

import styles from "./MobileMain.module.css"
import OverWindow from "../../Components/OverWindow/OverWindow";

class MobileMain extends Component {
    state = {
        video: null,
        teaser: null,
        play: false,
        volume: 0,
        lang: null,
        selected: false,
        load: true
    }

    setVideo = (event) => {
        if (event._targetInst.memoizedProps.value) {
            var listItems = document.querySelectorAll("li > p");
            for (let elem = 0; elem < listItems.length; elem++) {
                listItems[elem].className = styles.NotBold
            }
            document.getElementById(event._targetInst.key).className = styles.Bold
            const selectedVideo = event._targetInst.memoizedProps.value[1]
            if (selectedVideo !== this.state.video && selectedVideo !== undefined) {
                this.setState({ teaser: selectedVideo, play: false })
            }
        }
        event.stopPropagation()
    }

    clickVideo = (event) => {
        sessionStorage.setItem("selected", "a")
        this.setState({
            video: event.target.attributes["value"].nodeValue.split(",")[0],
            teaser: event.target.attributes["value"].nodeValue.split(",")[1],
            play: false,
            selected: true
        })
    }

    handleBack = (event) => {
        sessionStorage.setItem("selected", "b")
        this.setState({ selected: false })
    }

    handleLang = (event) => {
        var lang = null;
        if (sessionStorage.getItem("xcf") === "0x111") {
            sessionStorage.setItem("xcf", "0x112")
            lang = "fr"
        } else {
            sessionStorage.setItem("xcf", "0x111")
            lang = "en"
        }

        this.setState({ lang: lang })
    }

    componentDidMount() {
        var lng = null;
        var select = false;

        const urlVideo = "https://parseapi.back4app.com/classes/video";
        const urlAdv = "https://parseapi.back4app.com/classes/advertising";
        const options = {
            headers: {
                "X-Parse-Application-Id": process.env.REACT_APP_APP_ID,
                "X-Parse-REST-API-Key": process.env.REACT_APP_API_KEY,
                "X-Parse-Revocable-Session": 1,
                "Content-Type": "application/json",
            }
        };
        // Setting or Getting lang from session storage
        if (sessionStorage.getItem("xcf") === null) {
            sessionStorage.setItem("xcf", "0x111")
            lng = "en"
        } else {
            if (sessionStorage.getItem("xcf") === "0x111") {
                // EN
                lng = "en"
            }

            if (sessionStorage.getItem("xcf") === "0x112") {
                // FR
                lng = "fr"
            }

        }

        if (sessionStorage.getItem("selected") === "b" || sessionStorage.getItem("selected") === null) {
            select = false
        } else {
            select = true
        }

            var projects = null

            if(this.props.select === "about" || this.props.select ==="contact" || this.props.select ==="fiction") {
                this.setState({
                    load: false,
                    lang: lng
                })
            }

            if (this.props.select === "work") {
                console.log("work")
                axios
                    .get(urlVideo, options)
                    .then(res => {
                        projects = res.data.results
                        axios
                            .get(urlAdv, options)
                            .then(res2 => {
                                projects = projects.concat(res2.data.results)
                                projects.sort(function (a, b) {
                                    return a.updatedAt < b.updatedAt;
                                });
                                this.setState({
                                    title: projects[0].title,
                                    teaser: projects[0].teaser,
                                    lang: lng,
                                    load: false,
                                    selected: select
                                })
                            })
                            .catch(function (error) {
                                if (error.response) {
                                    console.log(error.response);
                                }
                            })
                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response);
                        }
                    })
            }

            if (this.props.select === "advertising") {
                console.log("adv")
                axios
                    .get(urlAdv, options)
                    .then(res => {
                        projects = res.data.results
                        projects.sort(function (a, b) {
                            return a.updatedAt < b.updatedAt;
                        });
                        this.setState({
                            title: projects[0].title,
                            teaser: projects[0].teaser,
                            lang: lng,
                            load: false,
                            selected: select
                        })

                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response);
                        }
                    })
            }

            if (this.props.select === "video") {
                console.log("video")
                axios
                    .get(urlVideo, options)
                    .then(res => {
                        projects = res.data.results
                        projects.sort(function (a, b) {
                            return a.updatedAt < b.updatedAt;
                        });
                        this.setState({
                            title: projects[0].title,
                            teaser: projects[0].teaser,
                            lang: lng,
                            load: false,
                            selected: select
                        })

                    })
                    .catch(function (error) {
                        if (error.response) {
                            console.log(error.response);
                        }
                    })
            }

    }

    render() {
        var toShow = null;
        var finalShow = null;

        if (this.state.load) {
            finalShow = (

                <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />)
        } else {
            if (this.props.select === "work") {
                toShow = (
                    <div className={styles.Main}>
                        <News setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title}/>
                    </div>
                )
            }

            if (this.props.select === "about") {
                toShow = (
                    <div>
                        <About
                            lang={this.state.lang}
                        />
                    </div>
                )
            }

            if (this.props.select === "contact") {
                toShow = (
                    <div>
                        <Contact
                            lang={this.state.lang}
                        />
                    </div>
                )
            }

            if (this.props.select === "fiction") {
                toShow = (
                    <div>
                        <Fiction
                            setVideo={this.setVideo}
                            lang={this.state.lang}
                        />
                    </div>
                )
            }

            if (this.props.select === "video") {
                toShow = (
                    <div>
                        <Video setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title}/>
                    </div>
                )
            }

            if (this.props.select === "advertising") {
                toShow = (
                    <div>
                        <Advertising setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                    </div>
                )
            }

            if (this.state.selected) {
                finalShow = (
                    <OverWindow
                        urlVideo={this.state.video}
                        handleBack={this.handleBack}
                    />
                )

            } else {
                if (this.state.load) {
                    finalShow = (
                        <div>

                        </div>
                    )
                } else {
                    finalShow = (
                        <div>
                            <div className={styles.desktop}>
                               <Navigation
                                    lang={this.state.lang}
                                    className={styles.Nav}
                                    handleLang={this.handleLang}
                                />
                                {toShow}
                            </div>
                            <div className={styles.mobile}>

                            </div>
                        </div>
                    )
                }
            }
        }

        return (
            <div className={styles.Main}>
                {finalShow}
            </div>
        )

    }
}

export default MobileMain;
