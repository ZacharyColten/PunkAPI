import React, { Component } from 'react'

class BeerItem extends Component {
    state = {
        liked: false
    }
    likePost = () => this.setState({ liked: !this.state.liked })
    render() {
        const message = this.state.liked ? 'you liked this post' : ' '
        return (
            <div style={{ border: '1px dashed gray', padding: '50px' }}>
                <p>{this.props.info.name}</p>
                <p>{this.props.info.brewers_tips}</p>
                <button onClick={this.likePost}>Like</button>
                <p>{message}</p>
            </div>
        )
    }
}

export default BeerItem