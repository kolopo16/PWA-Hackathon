import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from '../assets/images/Star.png';

class RatingBar extends Component {
  renderRate(rate) {
    let star = [];
    for(let i = 1; i <= rate; i += 1) {
      star.push(<img key={i} src={Star} style={{ width: 14, float: 'left', paddingTop: 5}} />);
    }
    return star;
  }
  render() {
    const { rating } = this.props;
    return (
      <div className="rating-bar">
        <div style={{ paddingRight: 3, float: 'left'}}>Rating :</div>
        {this.renderRate(Number(rating))}
        <div style={{ marginLeft: 7, display: 'inline-block' }}>{`(${Number(rating)}/5)`}</div>
      </div>
    );
  }
}

RatingBar.propTypes = {
  rating: PropTypes.number,
}
export default RatingBar;
