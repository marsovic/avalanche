import React, { Component } from "react";
import axios from 'axios';

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

<<<<<<< HEAD
    showUnderText = (e) => {
<<<<<<< HEAD
        this.setState({ showed: true, title: e.target.attributes[2] })
=======
        this.setState({showed: true, title:e.target.attributes[2]})
>>>>>>> master
        this.props.setVideo(e.target.attributes["value"].value.split(",")[1]);
    }

=======
>>>>>>> parent of 2db92f2... end site
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
<<<<<<< HEAD
<<<<<<< HEAD
                                if (this.props.title === this.state.title) {
=======
                                if(this.props.title === this.state.title) {
>>>>>>> master
                                    return (
                                        <li >
                                            <p
                                                className={styles.ProjectFictionTitle}
                                                id={key + 1}
                                                key={key + 3}
<<<<<<< HEAD
                                                style={{ fontWeight: "900", color: "white" }}
=======
                                                style={{fontWeight:"900", color:"white"}}
>>>>>>> master
                                                onMouseUp={this.props.clickVideo}
                                                video={this.state.projects[key].video}
                                                value={this.state.projects[key].video}>
                                                {this.state.projects[key].title}
                                            </p>
                                            <p
                                                className={styles.ProjectFiction}
                                                id={key + 10}
                                                key={key + 10}
<<<<<<< HEAD
                                                style={{ cursor: "default" }}
=======
                                                style={{cursor:"default"}}
>>>>>>> master
                                            >
                                                {this.state.projects[key].textFR}
                                            </p>
                                            <p
                                                className={styles.ProjectUnderFiction}
                                                id={key + 10}
                                                key={key + 10}
<<<<<<< HEAD
                                                style={{ cursor: "default" }}
=======
                                                style={{cursor:"default"}}
>>>>>>> master
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
<<<<<<< HEAD
                                if (this.props.title === this.state.title) {
=======
                                if(this.props.title === this.state.title){
>>>>>>> master
                                    return (
                                        <li >
                                            <p
                                                className={styles.ProjectFictionTitle}
                                                id={key + 5}
                                                key={key + 7}
<<<<<<< HEAD
                                                style={{ fontWeight: "900", color: "white" }}
=======
                                                style={{fontWeight:"900", color:"white"}}
>>>>>>> master
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
<<<<<<< HEAD
                                                style={{ fontWeight: "600", color: "gray" }}
=======
                                                style={{fontWeight:"600", color:"gray"}}
>>>>>>> master
                                                onMouseEnter={this.showUnderText}
                                                value={[this.state.projects[key].title, this.state.projects[key].teaser]}>
                                                {this.state.projects[key].title}
                                            </p>
                                        </li>
                                    )
                                }
=======
                                return (
                                    <li >
                                        <p
                                            className={styles.ProjectFictionTitle}
                                            id={key + 1}
                                            key={key + 3}
                                            value={[this.state.projects[key].video, this.state.projects[key].teaser]}>
                                            {this.state.projects[key].title}
                                        </p>
                                        <p
                                            className={styles.ProjectFiction}
                                            id={key + 10}
                                            key={key + 10}
                                        >
                                            {this.state.projects[key].textFR}
                                        </p>
                                        <p
                                            className={styles.ProjectUnderFiction}
                                            id={key + 10}
                                            key={key + 10}
                                        >
                                            {this.state.projects[key].underTextFr}
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
                                            value={[this.state.projects[key].video, this.state.projects[key].teaser]}>
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
>>>>>>> parent of 2db92f2... end site
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
                <ul>
                    {toShow}
                </ul>
            </div>
        );
    }
}

export default Fiction;