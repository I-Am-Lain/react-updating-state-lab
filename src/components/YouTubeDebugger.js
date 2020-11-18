// Code YouTubeDebugger Component Here

import React from 'react'

export default class YouTubeDebugger extends React.Component{
    constructor(){
        super()

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

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleReso = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <button type='button' className='bitrate' onClick={this.handleClick}>bitRate</button>
                <button type='button' className='resolution' onClick={this.handleReso}>Resolution</button>
            </React.Fragment>
        )
    }
}