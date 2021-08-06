import React, { Component } from "react";
import Vimeo from '@u-wave/react-vimeo';

import Navigation from "../../Components/Navigation/Navigation"
import News from "../News/News"
import styles from "./Main.module.css"

class Main extends Component {
    state = {
        rooms: null,
        video: "https://vimeo.com/547635244",
    }

    setVideo = (event) => {
       const selectedVideo = event._targetInst.memoizedProps.value
       if(selectedVideo !== this.state.video) {
        console.log(selectedVideo)
        this.setState({video: selectedVideo}) 
       }
    }

    render() {
        const urlVideo = this.state.video;
        console.log(urlVideo)
        return (
            <div className={styles.Main}>
                <div className={styles.VideoPlayer}>
                    <Vimeo 
                        autoplay={true}
                        video={urlVideo}
                        controls={false}
                        width= {window.innerWidth}
                        height= {window.innerHeight}
                        autopause={false}
                        muted={true}
                        loop= {true}
                        />
                </div>
                <Navigation />
                <News setVideo={this.setVideo}/>
            </div>
        )

    }
}

export default Main;
