import React from "react";

const AComplaints = ({ suppliersName, farmerName, content, complaintID }) => {
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
    fontSize: "25px",
    color: "#000",
    fontWeight: 700,
    marginLeft: "36px",
    marginTop: "20px"
  };

  const bottomSectionStyle = {
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
    <div style={containerStyle}>
      <div style={topSectionStyle}>
        {`From ${suppliersName} to ${farmerName}`}
      </div>
      <div style={bottomSectionStyle}>Content: {content}</div>
      <div style={idStyle}>No.{complaintID}</div>
    </div>
  );
};

export default AComplaints;
