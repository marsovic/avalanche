import React, { Component } from "react";

import styles from "./News.module.css";

class Navigation extends Component {
    state = {
        projects: [
            {name: "Bleu Chose", video:"https://vimeo.com/547635244"},
            {name: "Jedn Charbon", video:"https://vimeo.com/521641589"},
            {name: "Mi Vida", video:"https://vimeo.com/397626652"}
        ],
        rerender: false
    };

    handleRerender = () => {
        const temp = !this.state.rerender
        this.setState({rerender: temp})
    } 

    render() {
        return (
            <div className={styles.News}>
                <ul>
                    <li className={styles.Title}>
                        News
                    </li>
                    <li className={styles.Project}> <a href="/" onMouseEnter={this.props.setVideo} value="https://vimeo.com/547635244"> Bleu Chose </a> </li>
                    <li className={styles.Project}> <a href="/" onMouseEnter={this.props.setVideo} value="https://vimeo.com/521641589" >Jedn Charbon</a> </li>
                    <li className={styles.Project}> <a href="/" onMouseEnter={this.props.setVideo} value="https://vimeo.com/397626652">Mi Vida</a></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;
