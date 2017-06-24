import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebaseConfig from '../firebaseConfig';

class DetailDesc extends Component {

  constructor(props) {
    super(props);

    this.state = {
      desc: null,
      isOpened: false,
    }

    this.database = null;
  }

  componentWillMount() {
    this.database = firebaseConfig().database().ref('/places/' + this.props.id);
    this.getSnapshot()

  }

  getSnapshot() {
    this.database.child('place_desc').once('value').then((snapshot) => {
      this.setState({
        desc: snapshot.val()
      })
    })
  }

  saveDescEdit() {
    this.database.set({
      place_desc: this.state.desc
    })
    this.getSnapshot();
    this.toggleEdit();
  }

  handleChange(e) {
    this.setState({desc: e.target.value});
  }

  toggleEdit() {
    this.setState({ isOpened: !this.state.isOpened });
  }

  cancelEdit() {
    this.getSnapshot();
    this.toggleEdit();
  }

  render() {
    const { isOpened, desc } = this.state;
    return (
      <div>
        <div className={`${isOpened ? 'hiding' : 'showing'}`}>
          {desc}
          <a onClick={() => this.toggleEdit()}> Edit</a>
        </div>

        <div className={`${isOpened ? 'showing' : 'hiding'} editor`}>
          <textarea onChange={(e) => this.handleChange(e)} value={desc} ></textarea>
          <button onClick={() => this.saveDescEdit()}>Save</button>
          <button onClick={() => this.cancelEdit()}>Cancel</button>
        </div>
      </div>
    )
  }
}

DetailDesc.propTypes = {
  id: PropTypes.string,
}

export default DetailDesc;
