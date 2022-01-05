import React, { Component } from "react";
import axios from 'axios';
import Vimeo from '@u-wave/react-vimeo';

import styles from "./Fiction.module.css";

class Fiction extends Component {
    state = {
        projects: null,
        rerender: false,
        loading: true
    };

    componentDidMount() {
        const url = "https://parseapi.back4app.com/classes/fiction";
        const options = {
            headers: {
                "X-Parse-Application-Id": process.env.REACT_APP_APP_ID,
                "X-Parse-REST-API-Key": process.env.REACT_APP_API_KEY,
                "X-Parse-Revocable-Session": 1,
                "Content-Type": "application/json",
            }
        };

        axios
            .get(url, options)
            .then(res => {
                var projects = res.data.results
                projects.sort(function (a, b) {
                    if(a.updatedAt < b.updatedAt) {
                        return 1
                    } else {
                        return -1
                    }
                })
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
                                ) 
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
                    Fiction
                </p>
                <div className={styles.listVideo}>
                    {toShow}
                </div>
            </div>
        );
    }
}

export default Fiction;