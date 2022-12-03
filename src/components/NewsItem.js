import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl}
            alt="NEWS- NewsMonkey.com"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title} <span className="badge bg-success">{source}</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unkown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
