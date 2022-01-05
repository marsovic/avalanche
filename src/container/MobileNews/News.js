import React, { Component } from "react";
import axios from 'axios';
import Vimeo from '@u-wave/react-vimeo';

import styles from "./News.module.css";

class News extends Component {
    state = {
        projects: null,
        rerender: false,
        loading: true
    };

    componentDidMount() {
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

        var projects = null;
        axios
            .get(urlVideo, options)
            .then(res => {
                projects = res.data.results
                axios
                    .get(urlAdv, options)
                    .then(res2 => {
                        projects = projects.concat(res2.data.results)
                        projects.sort(function (a, b) {
                            if(a.updatedAt < b.updatedAt) {
                                return 1
                            } else {
                                return -1
                            }
                        })
                        // On garde que les 5 dernières nouveautés
                        projects = projects.slice(0, 4)
                        this.setState({
                            loading: false,
                            projects: projects
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

    render() {
        var toShow = null;
        if (this.state.loading) {
            toShow = (
                <div className={styles.Project} >
                    <p>Loading</p>
                </div>

            )
        } else {
            if (this.state.projects !== null) {
                toShow = Object.keys(this.state.projects)
                    .map(key => {
                        return [...Array(this.state.projects[key])].map((_, i) => {
                            var temp = null;
                            if (this.props.title === this.state.projects[key].title) {
                                temp = (
                                    <div
                                        className={styles.UnitVideo}
                                        onTouchStart={this.props.setVideo}
                                        data-video={this.state.projects[key].video}>
                                        <div className={styles.Video} >
                                            <Vimeo
                                                autoplay={false}
                                                video={this.state.projects[key].teaser}
                                                controls={false}
                                                width={window.innerWidth}
                                                showPortrait={true}
                                                muted={true}
                                            />
                                        </div>
                                        <div className={styles.TitleVideo}>
                                            <p className={styles.ProjectBold}> {this.state.projects[key].title} </p>
                                            <p className={styles.Project}> {this.state.projects[key].author} </p>
                                        </div>
                                    </div>
                                ) // event._targetInst.return.return.stateNode.id
                            } else {
                                temp = (
                                    <div
                                        className={styles.UnitVideo}
                                        onTouchStart={this.props.setVideo}
                                        data-video={this.state.projects[key].video}>
                                        <div className={styles.Video}>
                                            <Vimeo
                                                autoplay={false}
                                                video={this.state.projects[key].teaser}
                                                controls={false}
                                                width={window.innerWidth}

                                                showPortrait={true}
                                                muted={true}
                                            />
                                        </div>
                                        <div className={styles.TitleVideo}>
                                            <p className={styles.ProjectBold}> {this.state.projects[key].title} </p>
                                            <p className={styles.Project}> {this.state.projects[key].author} </p>
                                        </div>
                                    </div>
                                )
                            }

                            return temp;
                        })
                    })
            }
        }

        return (
            <div className={styles.News}>
                <p className={styles.Title}>
                    News
                </p>
                <div className={styles.listVideo}>
                    {toShow}
                </div>
            </div>
        );
    }
}

export default News;