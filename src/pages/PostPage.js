
import React from 'react';
import Post from '../templates/Post';

class PostPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content : "",
            alert : "",
            posts : [],
        }
    }
    
    componentDidMount() {
    }

    deletePost = (postId) => {
        const posts = this.state.posts.filter( it => it.id !== postId );
        this.setState({ posts: posts });
    }

    addPost = (content) => {
        const posts = this.state.posts;
        const lastPost = this.state.posts[ this.state.posts.length -1 ];
        if(!content){
            this.setState({ alert: "Content is Required!" });
            return;
        }
        const post = {
            id: lastPost ? lastPost.id + 1 : 1,
            content: content
        }
        
        this.setState({ posts: [...posts, post], content: "", alert: "" });
    }

    render(){
        return (
            <React.Fragment>
                <span style={{ color: "red" }}>
                    {this.state.alert}
                </span>
                <br/>
                <textarea style={{ width: "100%" }}  type="text" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })}  ></textarea> <br/> <br/>
                <button style={{ width: "100%" }} onClick={() => {
                    this.addPost(this.state.content);
                }}  >
                    Add
                </button>
                <br/> <br/>
                {this.state.posts.map((e, key)=>{
                    return(
                        <Post key={key} post={e} onDelete={(id)=>{
                            this.deletePost(id);
                        }} ></Post>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default PostPage
