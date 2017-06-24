import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    return (
      <div className="layout-card col-xs-12 col-sm-6 col-md-3 pull-left">
        <div className="card">
          <header className="card-header">{this.props.photo}</header>
          {this.props.name}
          <br />
          <address>{this.props.address}</address>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.object,
  address: PropTypes.string,
}

export default Card;
