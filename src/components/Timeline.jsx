import { Icon } from '@iconify/react';
import { timelineData } from '../data/timelineData';

function Timeline() {
  return (
    <section className="detail-card timeline-section">
      <h2>Mon parcours</h2>
      <div className="timeline-container">
        {timelineData.map((item) => (
          <div key={item.id} className={`timeline-item ${item.status}`}>
            <div className="timeline-icon">
              <Icon icon={item.icon} width="22" />
            </div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3>{item.title}</h3>
              <h4 className="timeline-location">{item.location}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;