import React from 'react';
import { Scrollbars as ReactScrollbars } from 'react-custom-scrollbars-2';

const Scrollbars = ({ children, ...props }) => {
  return (
    <ReactScrollbars
      {...props}
      renderTrackHorizontal={(props) => (
        <div
          {...props}
          className="track-horizontal"
        />
      )}
      renderTrackVertical={(props) => (
        <div
          {...props}
          className="track-vertical"
        />
      )}
      renderThumbHorizontal={(props) => (
        <div
          {...props}
          className="thumb-horizontal"
        />
      )}
      renderThumbVertical={(props) => (
        <div
          {...props}
          className="thumb-vertical"
        />
      )}
      renderView={(props) => (
        <div
          {...props}
          className="view"
        />
      )}
    >
      {children}
    </ReactScrollbars>
  );
};

export default Scrollbars;
