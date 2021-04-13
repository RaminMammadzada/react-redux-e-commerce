import React from 'react';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './menu-item.styles.scss';

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className={`${size} menu-item`}
    role="menuitem"
    tabIndex="0"
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  history: PropTypes.arrayOf.isRequired,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.arrayOf.isRequired,
};

export default withRouter(MenuItem);
