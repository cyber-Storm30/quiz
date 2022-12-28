import React from "react";
import "./styles.css";
import QuizCard from "./QuizCard";
import User from "./User";

const Home = () => {
  return (
    <div className="homeContainer">
      <User />
      <QuizCard />
    </div>
  );
};

export default Home;
