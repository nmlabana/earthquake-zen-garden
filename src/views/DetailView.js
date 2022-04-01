import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function DetailView() {
  const { state } = useLocation();
  const { featureItem } = state;
  const { properties } = featureItem;

  useEffect(() => {
    document.title =  "Earthquake Detail - " + properties.title;  
  }, []);

  return (
    <div>
      <div>
          <h3>{properties.title}</h3>
      </div>
      <ul className="detail-wrapper">
        <li key="title-row">
          <span className="row-label">Title </span>
          <span className="row-data">{properties.title}</span>
        </li>
        <li key="mag-row">
          <span className="row-label">Magnitude </span>
          <span className="row-data">{properties.mag}</span>
        </li>
        <li key="time-row">
          <span className="row-label">Time </span>
          <span className="row-data">{properties.localTimestamp}</span>
        </li>
        <li key="status-row">
          <span className="row-label">Status </span>
          <span className="row-data">{properties.status}</span>
        </li>
        <li key="tsunami-row">
          <span className="row-label">Tsunami </span>
          <span className="row-data">{properties.tsunami}</span>
        </li>
        <li key="type-row">
          <span className="row-label">Type </span>
          <span className="row-data">{properties.type}</span>
        </li>
      </ul>
    </div>
  );
}
