import React from "react";
import "./Dashboard.scss";
import jobBackground from "./images/job.svg";
import funBackground from "./images/fun.svg";
import learningBackground from "./images/learning.svg";
import sportBackground from "./images/sport.svg";
import emailBackground from "./images/emails.svg";
import healthBackground from "./images/health.svg";

interface Card {
  title: string;
  count: number;
  lastWeek: number;
  colorClass: string;
  bgImage: string;
}

const Dashboard: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Job",
      count: 10,
      lastWeek: 4,
      colorClass: "job",
      bgImage: jobBackground,
    },
    {
      title: "Fun",
      count: 8,
      lastWeek: 23,
      colorClass: "fun",
      bgImage: funBackground,
    },
    {
      title: "Learning",
      count: 2,
      lastWeek: 3,
      colorClass: "learning",
      bgImage: learningBackground,
    },
    {
      title: "Sport",
      count: 2,
      lastWeek: 12,
      colorClass: "sport",
      bgImage: sportBackground,
    },
    {
      title: "Emails",
      count: 15,
      lastWeek: 9,
      colorClass: "emails",
      bgImage: emailBackground,
    },
    {
      title: "Health",
      count: 1,
      lastWeek: 4,
      colorClass: "health",
      bgImage: healthBackground,
    },
  ];

  return (
    <div className="dashboard">
      <div className="report-card">
        <h1>Report for Stacey Castillo</h1>
        <div>Daily, weekly, monthly</div>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.colorClass}`}>
            <div className="card-svg">
              <img src={card.bgImage} alt={`${card.title} icon`} />
            </div>
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.count} Completed</p>
              <p>Last Week: {card.lastWeek} Completed</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
