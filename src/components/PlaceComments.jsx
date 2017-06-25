import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirebaseConfig from '../firebaseConfig';

class PlaceComments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      user: {},
      post: null,
    }

    this.database = null;
  }

  componentDidMount() {
    const firebaseObj = new FirebaseConfig();
    this.place = firebaseObj.firebase.database().ref('/places/' + this.props.id);
    this.users = firebaseObj.firebase.database().ref('/users');

    const currentUser = firebaseObj.GetCurrentUser();
    currentUser.then((user) => {
      this.users.child(user.uid).once('value').then(user => {
        this.setState({
          user: user.val(),
        });
        console.log(this.state.user);
      });
    })

    this.getReviewSnapshot(this.place, this.users);

  }

  handleChange(e) {
    this.setState({post: e.target.value});
  }

  getReviewSnapshot(place, users) {
    place.child('reviews').on('child_added', snapshot => {
      let review = snapshot.val();
      console.log(review, 'review');

      users.child(review.uid).once('value').then(user => {
        let data = {
          user: user.val(),
          comment: review.comment
        };
        this.setState({
          data: [data].concat(this.state.data)
        });
      });
    });
  }

  PostComment() {
    // let postCount = 0;
    let comment = {
      comment: this.state.post,
      uid: this.state.user.uid,
    }
    this.place.child('reviews').push(comment).then(() => {
      this.setState({post: null});
    });

  }

  generatePlaceComments(comments) {
    if(comments) {
      return (
        comments.map((comment, i) => {
          return (
            <div key={i}>
              <div className="user-photo">
                <img src={comment.user.photoURL} alt={comment.user.displayName} />
              </div>
              <div className="user-name">
                {comment.user.displayName}
              </div>
              <div className="user-comment">
                {comment.comment}
              </div>
            </div>
          )
        })
      )
    }
  }

  render() {
    const { user, data, post } = this.state;
    return (
      <div>
        <div className="add-review">
          <div className="review-user-photo">
            <img src={user.photoURL} alt={user.displayName} />
          </div>
          <div className="review-user-name">{user.displayName}</div>
          <textarea placeholder="ADD COMMENT.." onChange={(e) => this.handleChange(e)} value={`${post || ''}`} ></textarea>
          <div className="review-user-input" style={{ display: 'flex' }}>
            <button className="btn btn-primary" onClick={() => this.PostComment()}>POST</button>
            <button className="btn btn-secondary" onClick={() => this.ClearComment()}>CLEAR</button>
          </div>
        </div>
        <div>
          {this.generatePlaceComments(data)}
        </div>
      </div>
    );
  }
}

PlaceComments.propTypes = {
  id: PropTypes.string,
};

export default PlaceComments;