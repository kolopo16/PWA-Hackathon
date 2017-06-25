/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailDesc from './DetailDesc';
import PlaceComments from './PlaceComments';
import GoogleServices from '../googleConfig';
import RatingBar from './RatingBar';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    const services = new GoogleServices().service;
    const googlestatus = new GoogleServices().status;

    services.getDetails({
      placeId: this.props.match.params.id
    }, (place, status) => {
      (status !== googlestatus.OK) || this.setState({ data: place })
    })
  }

  generateReviewCard(reviews) {
    if(reviews) {
      return (
        reviews.map((review, i) => {
          return (
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
          )
        })
      )
    }
  }

  generatePhotos(photos) {
    if(photos) {
      return (
        photos.map((photo,i) => {
          return (
            <div key={i} style={{ display: 'inline-block' }} >
              <img style={{ width: 300, height: 200, float: 'left', paddingRight: 9 }} src={photo.getUrl({maxWidth: 640})} alt={i}/>
            </div>
          )
          // console.log(photo.getUrl({maxWidth: 640}), i);
        })
      )
    }
  }

  generateDetail(data) {
    if(data){
      return (
        <div>
          <div className="detail-header">
            <h1>{data.name}</h1>
            <RatingBar rating={data.rating} />
            Rating: {data.rating}
          </div>
          <div className="detail-desc">
            <DetailDesc id={this.props.match.params.id}/>
          </div>
          <br/>
          <div className="detail-photos">
            {this.generatePhotos(data.photos)}
          </div>
          <div className="detail-address">{data.formatted_address}</div>
          <div className="detail-reviews">
            <PlaceComments id={this.props.match.params.id}/>
            <div className="review-card">
              <h2>Google Reviews</h2>
              {this.generateReviewCard(data.reviews)}
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="test" style={{ display: 'inline-block', marginTop: 60 }}>
        {this.generateDetail(this.state.data)}
      </div>
    )
  }
}

Detail.propTypes = {
  match: PropTypes.object,
}
export default Detail
