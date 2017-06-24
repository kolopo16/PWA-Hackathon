import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebaseConfig from '../firebaseConfig';

class DetailDesc extends Component {

  constructor(props) {
    super(props);

    this.state = {
      desc: null
    }
  }

  componentWillMount() {
    const database = firebaseConfig().database().ref('/places/' + this.props.id);
    database.once('value').then((snapshot) => {
      console.log(snapshot.val());
    })
  }


  render() {
    return (
      <div></div>
    )
  }
}

DetailDesc.propTypes = {
  id: PropTypes.string,
}

export default DetailDesc;
