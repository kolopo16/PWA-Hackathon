import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from './dataDetail.json';
import DetailDesc from './components/DetailDesc';

class Detail extends Component {
  generateReviewCard(reviews) {
    return (
      reviews.map((review, i) => (
        <div key={i} className="layout-card">
          <div className="card">
            <div className="card-profile-photo">
              <img src={review.profile_photo_url} alt='profile-photo' />
            </div>
            <div className="card-author-name">
              {review.author_name}
            </div>
            <div className="card-time">
              {review.relative_time_description}
              ({review.rating})
            </div>
            <div className="card-text">
              {review.text}
            </div>
          </div>
        </div>
        )
      )
    )
  }

  generateDetail(data) {
    const dataResult = data.result;
    return (
      <div>
        <div className="detail-header">
          <h1>{dataResult.name}</h1>
          <br/>
          Rating: {dataResult.rating}
        </div>
        <div className="detail-desc">
          <DetailDesc id={this.props.match.params.id}/>
        </div>
        <div className="detail-address">{dataResult.formatted_address}</div>
        <div className="detail-reviews">
          <div className="review-card">
            <h2>Google Reviews</h2>
            {this.generateReviewCard(dataResult.reviews)}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="test" style={{ display: 'inline-block', marginTop: 60 }}>
        {this.generateDetail(data)}
      </div>
    )
  }
}

Detail.propTypes = {
  match: PropTypes.object,
}
export default Detail
