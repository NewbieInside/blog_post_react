import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../../actions';

import UserHeader from '../userheader/UserHeader';

import styles from './PostList.module.css';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className={styles.postCont} key={post.id}>
          <UserHeader userId={post.userId} />
          <div className="content">
            <div>
              <h2>{post.title}</h2>
              <p> {post.body}</p>
              <hr />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
