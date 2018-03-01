import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    const { photo, name, address } = this.props;
    return (
      <div className="layout-card col-xs-12 col-sm-6 col-md-3 pull-left">
        <div className="card">
          <header className="card-header">
            <img src={photo} alt={name} />
          </header>
          <b>{name}</b>
          <br />
          <address>{address}</address>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  name: '',
  photo: '',
  address: '',
}

Card.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  address: PropTypes.string,
}

export default Card;
