import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {total} - {days} - {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const CounterApp = () => {
    return <Countdown date={Date.now() + 532445225.5} renderer={renderer} />
}

export default CounterApp;



