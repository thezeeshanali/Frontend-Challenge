import React, { useState } from "react";
import "./Dashboard.scss";
import jobBackground from "../../assets/images/job.svg";
import funBackground from "../../assets/images/fun.svg";
import learningBackground from "../../assets/images/learning.svg";
import sportBackground from "../../assets/images/sport.svg";
import emailBackground from "../../assets/images/emails.svg";
import healthBackground from "../../assets/images/health.svg";

import { timeframes } from "../../timeframes";

interface Card {
  title: string;
  colorClass: string;
  bgImage: string;
}

interface Timeframe {
  current: number;
  previous: number;
}

const Dashboard: React.FC = () => {
  type StatsTime = "daily" | "weekly" | "monthly";

  const statsTime: StatsTime[] = ["daily", "weekly", "monthly"];
  const [timeframe, setTimeframe] = useState<StatsTime>("daily");

  const cards: Card[] = [
    {
      title: "Job",
      colorClass: "job",
      bgImage: jobBackground,
    },
    {
      title: "Fun",
      colorClass: "fun",
      bgImage: funBackground,
    },
    {
      title: "Learning",
      colorClass: "learning",
      bgImage: learningBackground,
    },
    {
      title: "Sport",
      colorClass: "sport",
      bgImage: sportBackground,
    },
    {
      title: "Emails",
      colorClass: "emails",
      bgImage: emailBackground,
    },
    {
      title: "Health",
      colorClass: "health",
      bgImage: healthBackground,
    },
  ];

  const handleTimeframeChange = (newTimeframe: StatsTime) => {
    setTimeframe(newTimeframe);
  };

  const timeframeLabels: { [key: string]: string } = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  return (
    <div className="dashboard">
      <div className="report-card">
        <h1>Report for Stacey Castillo</h1>
        <div>
          {statsTime.map((item, index) => (
            <span
              key={item + "index"}
              onClick={() => handleTimeframeChange(item)}
            >
              {item}
              {statsTime.length - 1 != index && ","}{" "}
            </span>
          ))}
        </div>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.colorClass}`}>
            <div className="card-svg">
              <img src={card.bgImage} alt={`${card.title} icon`} />
            </div>
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{timeframes[index].timeframes[timeframe].current} Completed</p>
              <p>
                {timeframeLabels[timeframe]}{" "}
                {timeframes[index].timeframes[timeframe].previous} Completed
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
