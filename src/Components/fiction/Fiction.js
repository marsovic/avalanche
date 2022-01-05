import React, { Component } from "react";
import axios from 'axios';

import styles from "./Fiction.module.css";

class Fiction extends Component {
    state = {
        projects: null,
        rerender: false,
        loading: true,
        showed: false,
        title: null
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
                    projects: projects,
                    title: projects[0].title
                })
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            })
    }

    showUnderText = (e) => {
        this.setState({showed: true, title:e.target.attributes[2].value.split(",")[0]})
        this.props.setVideo(e.target.attributes["value"].value.split(",")[1]);
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
                            if (this.props.lang === "fr") {
                                if(this.state.projects[key].title === this.state.title) {
                                    return (
                                        <li >
                                            <p
                                                className={styles.ProjectFictionTitle}
                                                id={key + 1}
                                                key={key + 3}
                                                style={{fontWeight:"900", color:"white"}}
                                                onMouseUp={this.props.clickVideo}
                                                video={this.state.projects[key].video}
                                                value={this.state.projects[key].video}>
                                                {this.state.projects[key].title}
                                            </p>
                                            <p
                                                className={styles.ProjectFiction}
                                                id={key + 10}
                                                key={key + 10}
                                                style={{cursor:"default"}}
                                            >
                                                {this.state.projects[key].textFR}
                                            </p>
                                            <p
                                                className={styles.ProjectUnderFiction}
                                                id={key + 10}
                                                key={key + 10}
                                                style={{cursor:"default"}}
                                            >
                                                {this.state.projects[key].underTextFr}
                                            </p>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className={styles.ProjectFictionTitle}>
                                            <p
                                                id={key + 1}
                                                key={key + 3}
                                                onMouseEnter={this.showUnderText}
                                                value={[this.state.projects[key].title, this.state.projects[key].teaser]}>
                                                {this.state.projects[key].title}
                                            </p>
                                        </li>
                                    )
                                }
                            } else {
                                if(this.state.projects[key].title=== this.state.title){
                                    return (
                                        <li >
                                            <p
                                                className={styles.ProjectFictionTitle}
                                                id={key + 5}
                                                key={key + 7}
                                                style={{fontWeight:"900", color:"white"}}
                                                onMouseUp={this.props.clickVideo}
                                                video={this.state.projects[key].video}
                                                value={this.state.projects[key].video}>
                                                {this.state.projects[key].title}
                                            </p>
                                            <p
                                                className={styles.ProjectFiction}
                                                id={key + 10}
                                                key={key + 10}
                                            >
                                                {this.state.projects[key].textEN}
                                            </p>
                                            <p
                                                className={styles.ProjectUnderFiction}
                                                id={key + 10}
                                                key={key + 10}
                                            >
                                                {this.state.projects[key].underTextEn}
                                            </p>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li >
                                            <p
                                                className={styles.ProjectFictionTitle}
                                                id={key + 5}
                                                key={key + 7}
                                                style={{fontWeight:"600", color:"gray"}}
                                                onMouseEnter={this.showUnderText}
                                                value={[this.state.projects[key].title, this.state.projects[key].teaser]}>
                                                {this.state.projects[key].title}
                                            </p>
                                        </li>
                                    )
                                }
                            }

                        })
                    })
            }
        }

        return (
            <div className={styles.News}>
                <p className={styles.Title}>
                    FICTION
                </p>
                <ul className={styles.listStyle}>
                    {toShow}
                </ul>
            </div>
        );
    }
}

export default Fiction;