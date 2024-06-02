import React from "react";

const ATips = ({ title, content, tipID }) => {
  const containerStyle = {
    width: "1079px",
    height: "141px",
    backgroundColor: "white",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    marginLeft: '2rem'
  };

  const topSectionStyle = {
    //height: "30%",
    fontSize: "25px",
    color: "#000",
    fontWeight: 700,
    marginLeft: "36px",
    marginTop: "20px"
  };

  const bottomSectionStyle = {
    //height: "70%",
    fontWeight: 400,
    marginBottom: "10px",
    fontSize: "20px",
    color: "black",
    marginLeft: "36px",
    marginTop: "10px"
  };

  const idStyle = {
    fontSize: "18px",
    color: "gray",
    marginLeft: "950px",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={topSectionStyle}>Title: {title}</div>
        <div style={bottomSectionStyle}>Content: {content}</div>
        <div style={idStyle}>No.{tipID}</div>
      </div>
    </div>
  );
};

export default ATips;
