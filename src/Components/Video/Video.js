import React, { Component } from "react";
import axios from 'axios';

import styles from "./Video.module.css";

class Video extends Component {
    state = {
        projects: null,
        rerender: false,
        loading: true
    };

    componentDidMount() {
        const url = "https://parseapi.back4app.com/classes/video";
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
                this.setState({
                    loading: false,
                    projects: res.data.results
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
                            if(this.props.title === this.state.projects[key].title) {
                                temp = (
                                    <li >
                                        <p
                                            className={styles.ProjectBold}
                                            id={key+1}
                                            key={key + 1}
                                            onMouseEnter={this.props.setVideo}
                                            onMouseUp={this.props.clickVideo}
                                            value={[this.state.projects[key].video, this.state.projects[key].teaser]}>
                                            {this.state.projects[key].author} - {this.state.projects[key].title}
                                        </p>
                                    </li>
                                )
                            } else {
                                temp = (
                                    <li >
                                        <p
                                            className={styles.Project}
                                            id={key+1}
                                            key={key + 1}
                                            onMouseEnter={this.props.setVideo}
                                            onMouseUp={this.props.clickVideo}
                                            value={[this.state.projects[key].video, this.state.projects[key].teaser]}>
                                            {this.state.projects[key].author} - {this.state.projects[key].title}
                                        </p>
                                    </li>
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
                        Music Video
                </p>
                <ul className={styles.listStyle}>
                    {toShow}
                </ul>
            </div>
        );
    }
}

export default Video;