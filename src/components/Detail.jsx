import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailDesc from './DetailDesc';
import PlaceComments from './PlaceComments';
import GoogleServices from '../config/googleConfig';
import RatingBar from './RatingBar';

class Detail extends Component {

  state = {
    data: null,
  }

  componentDidMount() {
    const services = new GoogleServices().service;
    const googlestatus = new GoogleServices().status;

    services.getDetails({ placeId: this.props.match.params.id },
      (place, status) => {
        (status !== googlestatus.OK) || this.setState({ data: place })
      })
    }

  generateReviewCard(reviews) {
    if(reviews) {
      return (
        reviews.map((review, i) => (
          <div key={i} className={`${ i%2 || 'odd' } layout-card-detail pull-left`}>
            <div className="card-detail">
              <div className="card-profile-photo">
                <img src={review.profile_photo_url} alt={review.author_name} />
              </div>
              <div className="card-author-name">
                {review.author_name}
              </div>
              <div className="card-time">
                <RatingBar rating={review.rating}/>
                {review.relative_time_description}
              </div>
              <div className="card-text">
                <div className="text-emphasize">''</div>
                <div className="text-simple">{review.text}</div>
              </div>
            </div>
          </div>
        ))
      )
    }
  }

  generatePhotos(photos) {
    if(photos) {
      return (
        photos.map((photo,i) => (
          <div key={i} className="photo">
            <img className='detail-photo' src={photo.getUrl({ maxHeight: 480 })} alt={i} />
          </div>
        ))
      )
    }
  }

  generateDetail(data) {
    if (data){
      const placeID = this.props.match.params.id;
      return (
        <div>
          <div className="detail-header">
            <h3>{data.name}</h3>
            <RatingBar rating={data.rating} />
            Rating: {data.rating}
          </div>
          <div className="detail-desc">
            <DetailDesc id={placeID}/>
          </div>
          <div className="detail-address">{data.formatted_address}</div>
          <br/>
          <div className="detail-photos">
            {this.generatePhotos(data.photos)}
          </div>
          <div className="detail-reviews">
            <div className="review-card">
              <div className="header">Google Reviews</div>
              {this.generateReviewCard(data.reviews)}
            </div>
            <PlaceComments id={placeID}/>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="topbar">
          <div className="text-logo">
            <a href="/">UrView</a>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
        <div className="section-detail">
          {this.generateDetail(this.state.data)}
        </div>
      </div>
    )
  }
}

Detail.defaultProps = {
  match: [],
}

Detail.propTypes = {
  match: PropTypes.object,
}

export default Detail
