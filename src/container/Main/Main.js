import React, { Component } from "react";
import Vimeo from '@u-wave/react-vimeo';

import Navigation from "../../Components/Navigation/Navigation"
import News from "../News/News"
import styles from "./Main.module.css"

class Main extends Component {
    state = {
        video: "https://vimeo.com/547635244",
        play: false,
        muted: true,
        volume: 0
    }

    setVideo = (event) => {
       const selectedVideo = event._targetInst.memoizedProps.value
       if(selectedVideo !== this.state.video) {
        this.setState({video: selectedVideo, play: false}) 
       }
    }

    startVideo = () => {
        this.setState({play: true})
    }

    handleMute = () => {
        const temp = this.state.muted
        var vol = -1
        if( temp === false ) {
            vol = 0
        } else {
            vol = 1
        }

        console.log(temp)
        this.setState({muted: !temp, volume: vol})
    }

    render() {
        const urlVideo = this.state.video;
        var mute = "Sound " +  (this.state.muted? "off": "on")
        return (
            <div className={styles.Main}>
                <div className={styles.VideoPlayer}>
                    <Vimeo 
                        autoplay= {this.state.play}
                        video={urlVideo}
                        controls={false}
                        onLoaded={this.startVideo}
                        width= {window.innerWidth}
                        height= {window.innerHeight}
                        showPortrait={!this.state.play}
                        paused= {!this.state.play}
                        muted={this.state.muted}
                        volume={this.state.volume}
                        loop= {true}
                        />
                </div>
                <Navigation />
                <News setVideo={this.setVideo}/>
                <div className={styles.ButtonComponent}>
                    <button onClick={this.handleMute} className={styles.Button}>
                        {mute}
                    </button>
                </div>
            </div>
        )

    }
}

export default Main;
