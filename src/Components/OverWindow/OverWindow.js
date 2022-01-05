import React, { Component } from "react";
import styles from "./OverWindow.module.css"

import { withSize } from 'react-sizeme'
import Vimeo from '@u-wave/react-vimeo';

import { Row, Col, Container } from 'reactstrap';

class OverWindow extends Component {
    state = {
        play: true,
        muted: false,
        volume: 0.5
    }

    render() {
        const { width, height } = this.props.size
        const newHWidth = width
        const newHeight = height
        
        if(this.props.urlVideo !== null ) {
        return (
            <div className={styles.OverWindow}>
                <div className={styles.Video}>
                <Vimeo
                    autoplay={this.state.play}
                    video={this.props.urlVideo}
                    controls={true}
                    onLoaded={this.startVideo}
                    width={newHWidth}
                    height={newHeight}
                    showPortrait={!this.state.play}
                    paused={!this.state.play}
                    muted={this.state.muted}
                    volume={this.state.volume}
                    loop={true}
                />
                </div>
                <Container fluid className={styles.Top}>
                    <Row>
                    <Col className={styles.Back}>
                        <button style={{cursor:"pointer"}} onClick={this.props.handleBack}> X </button>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
        }
        else {
            return null;
        }

    }
}

export default withSize({ monitorHeight: true, monitorWidth: true })(OverWindow);
