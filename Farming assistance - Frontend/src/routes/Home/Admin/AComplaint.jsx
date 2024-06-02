import React, { useState, useEffect } from "react";
import AComplaints from "../../../components/AComplaints";

const AComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("complaints", complaints);

  useEffect(() => {
    fetch("http://localhost:8080/admin/complaint")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging line to check fetched data
        if (Array.isArray(data.content)) {
          setComplaints(data.content);
        } else {
          console.error("Expected array but got:", data);
          setError("Failed to load complaints.");
        }
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
        setError("Error fetching complaints.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: "15px",
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={gridContainerStyle}>
      {complaints.map((complaint, index) => (
        <AComplaints 
          key={index} 
          suppliersName={complaint.supplier?.supplierName} 
          farmerName={complaint.farmer?.farmerName} 
          content={complaint.content} 
          complaintID={complaint.complaintID} 
        />
      ))}
    </div>
  );
};

export default AComplaint;
