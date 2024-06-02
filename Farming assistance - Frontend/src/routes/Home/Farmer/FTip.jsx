import React, { useState, useEffect } from "react";
import Tips from "../../../components/Tips";

const FTip = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("tips", tips)

  useEffect(() => {
    // Fetch tips data from the API
    fetch("http://localhost:8080/farmer/tip")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.content)) {
          setTips(data.content);
        } else {
          console.error("Expected array but got:", data);
          setError("Failed to load tips.");
        }
      })
      .catch((error) => {
        console.error("Error fetching tips:", error);
        setError("Error fetching tips.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Create a grid with 4 columns
    gap: "10px", // Adjust gap between grid items as needed
    padding: "10px",
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={gridContainerStyle}>
      {tips.map((content, index) => (
        <Tips key={index} title={content.title} content={content.content} />
      ))}
    </div>
  );
};

export default FTip;
