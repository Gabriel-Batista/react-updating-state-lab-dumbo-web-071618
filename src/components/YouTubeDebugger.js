import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: { 
                bitrate: 8,
                video: {
                    resolution: '1080p'
                } 
            } 
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                bitrate: 12
            })
        })
    }

    changeResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
                    video: {
                        resolution: '720p'
                    }
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>Bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>Resolution</button>
            </div>
        )
    }
}
