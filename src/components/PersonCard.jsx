import React from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2>
          {" "}
          {lastName}, {firstName}
        </h2>
        <p className="card-text">Age: {age} </p>
        <p className="card-text">Hair Color: {hairColor} </p>
      </div>
    </div>
  );
};

export default PersonCard;
