import React, { Component } from 'react'
const posts = require('./PostFile').posts; //Always use this standard

class ReadPost extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        // Get the post id from route   
        let post_id = Number(this.props.match.params.post_id);
        let selectedPost;
        posts.forEach(post => {
            if (post.id === post_id) {
                selectedPost = post;
            }
        });
        return (
            this.setState({
                post:selectedPost
            })
        )
    }
    render() {
        const post = this.state.post ? (
            <div className="data-content">
                <img className="data-image" src={require(`${this.state.post.imageURl}`)} alt="post" />
                <h1 className="data-heading">{this.state.post.title}</h1>
                <p>Published by: {this.state.post.username}</p>

                {/* Used dangerouslySetInnerHTML to display html tags associated with json data */}
                <div dangerouslySetInnerHTML={{__html: this.state.post.body}} className="data-body"></div>
            </div>
        ) : (
                <div className="center">Loading post...</div>
            )
        return (
            <div className="padding container">
                {post}
            </div>
        )
    }
}
export default ReadPost;