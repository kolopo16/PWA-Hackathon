/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirebaseConfig from '../firebaseConfig';

const headerText = {
  fontSize: '1.5em',
  display: 'inline-block',
  borderBottom: '1px dotted #000',
  width: '100%',
  margin: '19px 0px'
}

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
      });
    })
    this.getReviewSnapshot(this.place, this.users);
  }

  handleChange(e) {
    this.setState({ post: e.target.value });
  }

  getReviewSnapshot(place, users) {
    place.child('reviews').on('child_added', snapshot => {
      let review = snapshot.val();

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
    let comment = {
      comment: this.state.post,
      uid: this.state.user.uid,
    }
    this.place.child('reviews').push(comment).then(() => {
      this.setState({ post: '' });
    });
  }

  ClearComment() {
    this.setState({ post: '' });
  }

  generateComments(comments) {
    if(comments) {
      return (
        comments.map((comment, i) => (
          <div key={i} className={`${ i % 2 || 'odd' } layout-card-detail pull-left`}>
            <div className="card-detail">
              <div className="card-profile-photo">
                <img style={{ borderRadius: '50%' }}
                  src={comment.user.photoURL} alt={comment.user.displayName}
                />
              </div>
              <div className="card-author-name">
                {comment.user.displayName}
              </div>
              <div className="card-text">
                <div className="text-emphasize">''</div>
                <div className="text-simple">{comment.comment}</div>
              </div>
            </div>
          </div>
        ))
      )
    }
    return <div> No review </div>
  }

  render() {
    const { user, data, post } = this.state;
    return (
      <div>
        <div style={{ display: 'inline-block', width: '100%' }}>
          <div style={headerText}>UrView Reviews</div>
          <div style={{ paddingBottom: 20 }}>{this.generateComments(data)}</div>
        </div>
        <div className={`${user.email ? 'showing' : 'hiding'}`} style={{ width: '100%' }}>
          <div>
            <img src={user.photoURL} alt={user.displayName} />
            <div>{`${user.displayName} says:`}</div>
          </div>
          <textarea
            placeholder="ADD COMMENT.."
            onChange={(e) => this.handleChange(e)}
            value={`${post || ''}`} >
          </textarea>
          <div style={{ display: 'flex' }}>
            <button className="btn btn-primary" onClick={() => this.PostComment()}>POST</button>
            <button className="btn btn-secondary" onClick={() => this.ClearComment()}>CLEAR</button>
          </div>
        </div>
      </div>
    );
  }
}

PlaceComments.propTypes = {
  id: PropTypes.string,
};

export default PlaceComments;
