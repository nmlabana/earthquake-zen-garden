import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomeView() {
  const { state } = useLocation();
  const { pageTitle } = state || {};
  const { featuresData } = state || {};
  const { metadata } = featuresData || {};
  const { features } = featuresData || [];
  const { title } = metadata || "";

  useEffect(() => {
    document.title =  "Home - " + pageTitle;  
  }, []);

  features && features.sort((a,b) => {
    if(a.properties && b.properties) {
      return b.properties.mag - a.properties.mag;
    }
    return 0;
  });

  return (
    <div className="list-wrapper">
        <h3>{title}</h3>
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Magnitude</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>

              <tbody>
                { 
                  features && features.map(feature => {
                    const { properties: { place } } = feature;
                    const { properties: { mag } } = feature;
                    const { properties: { time } } = feature;
                    const localTimestamp = new Date(time).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric',  hour: '2-digit', minute: '2-digit' });
                    feature.properties['localTimestamp'] = localTimestamp;
                    return (
                      <tr key={feature.id}>
                        <td>
                          <Link to={"/detail"} state={{ featureItem: feature }}>{place}</Link>
                        </td>
                        <td className="magnitude">{mag}</td>
                        <td className="time">{localTimestamp}</td>
                      </tr>
                    );
                  })
                }
              </tbody>

            </table>
    </div>
  );
}
