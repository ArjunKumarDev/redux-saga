import React, { Component } from 'react';

import './styles.css';
import { connect } from "react-redux";
import { loadPosts,fetchPosts } from "../../actions"
import Loading from "../Loading"




class PostComponent extends Component {
    

    componentDidMount() {
        const { dispatch } = this.props

      {/* saga implementation */}
        dispatch(loadPosts())

        {/* thunk implementation */}
        // dispatch(fetchPosts())
    }

    render() {

        console.log("sdfkjsdahfkj", this.props)
        const { posts, error, isLoading } = this.props;

        return (
            <div className="content">

              <Loading loading={isLoading} />

                <section className="grid">

                 
                    
                    {posts.length > 0 && posts.map(post => (
                        <div
                            key={post.id}
                            className={`item item-1`}
                        >
                            <h1>{post.title}</h1>
                            <h3>{post.body}</h3>
                        </div>
                    ))}

                    {error && <div className="error">
                        {JSON.stringify(error)}
                    </div>
                    }
             
                </section>
            </div>
        );
    }
}


const mapStateToProps = ({ posts, error,isLoading }) => ({
    posts,
    error,
    isLoading
})

export default connect(mapStateToProps, null)(PostComponent)
