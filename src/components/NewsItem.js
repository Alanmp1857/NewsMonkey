import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imageUrl ? "https://s3.cointelegraph.com/uploads/2023-02/6b8ef98c-fc1a-42bd-b7ed-b4a6e8f67eb1.jpg" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '86%', zIndex: 1 }}>
              {source}
            </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target={"_blank"} className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
