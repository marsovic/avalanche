import React, { Component } from "react";
import Vimeo from '@u-wave/react-vimeo';
import axios from 'axios';

import Navigation from "../../Components/Navigation/Navigation"
import Advertising from "../../Components/Advertising/Advertising"
import Video from "../../Components/Video/Video"
import About from "../../Components/About/About"
import News from "../News/News"
import Fiction from "../../Components/fiction/Fiction";
import Contact from "../../Components/Contact/Contact";
import logoAvalanche from "../../assets/Images/logo.png"

import styles from "./Main.module.css"
import OverWindow from "../../Components/OverWindow/OverWindow";

class Main extends Component {
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
            if (selectedVideo !== this.state.teaser && selectedVideo !== undefined) {
                this.setState({ teaser: selectedVideo, play: false, video: event._targetInst.memoizedProps.value[0] })
            }
        }
        event.stopPropagation()
    }

    setFictionVideo = (vid) => {
        this.setState({ teaser: vid, play: false })
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

    clickedBackground = (e) => {
        console.log(e.target.attributes)
        this.setState({
            video: e.target.attributes["value"].value,
            play: false,
            selected: true
        })
    }

    handleBack = (event) => {
        sessionStorage.setItem("selected", "b")
        this.setState({ selected: false })
    }

    startVideo = () => {
        this.setState({ play: true })
    }

    handleLang = (event) => {
        if (event.target.innerHTML === "fr") {
            sessionStorage.setItem("xcf", "0x112")
        }
        if (event.target.innerHTML === "en") {
            sessionStorage.setItem("xcf", "0x111")
        }

        this.setState({ lang: event.target.innerHTML })
    }

    componentDidMount() {
        var lng = null;
        var select = false;

        const urlVideo = "https://parseapi.back4app.com/classes/video";
        const urlAdv = "https://parseapi.back4app.com/classes/advertising";
        const urlFiction = "https://parseapi.back4app.com/classes/fiction";
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

        var projects = null

        if (this.props.select === "about" || this.props.select === "contact") {
            this.setState({
                load: false,
                lang: lng
            })
        }

        if (this.props.select === "work") {
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
                                selected: select,
                                video: projects[0].video
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
                        selected: select,
                        video: projects[0].video

                    })

                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response);
                    }
                })
        }

        if (this.props.select === "video") {

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
                        selected: select,
                        video: projects[0].video
                    })

                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response);
                    }
                })
        }

        if (this.props.select === "fiction") {
            axios
                .get(urlFiction, options)
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
                        selected: select,
                        video: projects[0].video
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

        if (this.state.load === true) {
            finalShow = (
                <img className={styles.Logo} src={logoAvalanche} alt={"Avalanche"} />)
        } else {
            if (this.props.select === "work") {

                if (window.innerWidth / window.innerHeight > 16 / 9) {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer}>
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <News setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                } else {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer} >
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    height={window.innerHeight}
                                    // width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <News setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                }
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
                if (window.innerWidth / window.innerHeight > 16 / 9) {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer}>
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <Fiction
                                setVideo={this.setFictionVideo}
                                clickVideo={this.clickVideo}
                                lang={this.state.lang}
                                title={this.state.title}
                            />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                } else {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer} >
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    height={window.innerHeight}
                                    // width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <Fiction
                                setVideo={this.setFictionVideo}
                                clickVideo={this.clickVideo}
                                lang={this.state.lang}
                                title={this.state.title}
                            />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                }
            }

            if (this.props.select === "video") {

                if (window.innerWidth / window.innerHeight > 16 / 9) {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer}>
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <Video setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                } else {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer} >
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    height={window.innerHeight}
                                    // width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <Video setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                }
            }

            if (this.props.select === "advertising") {

                if (window.innerWidth / window.innerHeight > 16 / 9) {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer}>
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <Advertising setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                } else {
                    toShow = (
                        <div>
                            <div className={styles.VideoPlayer} >
                                <Vimeo
                                    autoplay={this.state.play}
                                    video={this.state.teaser}
                                    controls={false}
                                    onLoaded={this.startVideo}
                                    height={window.innerHeight}
                                    // width={window.innerWidth}
                                    showPortrait={!this.state.play}
                                    paused={!this.state.play}
                                    muted={true}
                                    volume={this.state.volume}
                                    loop={true}
                                />
                            </div>
                            <Advertising setVideo={this.setVideo} clickVideo={this.clickVideo} title={this.state.title} />
                            <p
                                className={styles.cliquable}
                                onMouseUp={this.clickedBackground}
                                value={[this.state.video]}>
                            </p>
                        </div>
                    )
                }
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

export default Main;
