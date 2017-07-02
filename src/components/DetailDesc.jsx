import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirebaseConfig from '../firebaseConfig';

class DetailDesc extends Component {

  constructor(props) {
    super(props);

    this.state = {
      desc: '',
      isOpened: false,
      isLogined: false,
    }

    this.database = null;
  }

  componentWillMount() {
    const firebaseObj = new FirebaseConfig();

    const currentUser = firebaseObj.GetCurrentUser();
    currentUser.then(() => {
      this.setState({isLogined: true});
    })

    this.database = firebaseObj.firebase.database().ref('/places/' + this.props.id);
    this.getSnapshot();
  }

  getSnapshot() {
    this.database.child('place_desc').once('value').then((snapshot) => {
      this.setState({
        desc: snapshot.val()
      });
    });
  }

  saveDescEdit() {
    this.database.set({
      place_desc: this.state.desc
    });
    this.getSnapshot();
    this.toggleEdit();
  }

  handleChange(e) {
    this.setState({ desc: e.target.value });
  }

  toggleEdit() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  cancelEdit() {
    this.getSnapshot();
    this.toggleEdit();
  }

  render() {
    const { isOpened, desc, isLogined } = this.state;
    return (
      <div>
        <div className={`${!isOpened ? 'showing' : 'hiding'}`}>
          {desc}
          <a onClick={() => this.toggleEdit()}
            className={`${isLogined ? 'showing' : 'hiding'}`}
            style={{ color: 'red' }}> Edit Detail
          </a>
        </div>
        <div className={`${isOpened && isLogined ? 'showing' : 'hiding'} editor`}>
          <textarea onChange={(e) => this.handleChange(e)} value={`${desc || ''}`} >-</textarea>
          <button onClick={() => this.saveDescEdit()}>Save</button>
          <button onClick={() => this.cancelEdit()}>Cancel</button>
        </div>
      </div>
    );
  }
}

DetailDesc.propTypes = {
  id: PropTypes.string,
};

export default DetailDesc;
