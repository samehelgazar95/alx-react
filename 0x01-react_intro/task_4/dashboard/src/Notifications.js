import "./notifications.css";
import React from 'react';
import {getLatestNotification} from './utils.js'

function Notifications() {
    const handleCloseClick = () => {
        console.log('Close button has been clicked');
    }

    return (
      <div className="notifications">
        <button aria-label="Close" onClick={handleCloseClick}>
          x
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li>New course available</li>
          <li>New resume available</li>
          <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
      </div>
    );
}

export default Notifications;
