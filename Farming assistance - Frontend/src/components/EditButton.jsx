import React, { useState } from "react";

const EditButton = ({ item, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    image: item.image,
    quantity: item.quantity,
    price: item.price,
    description: item.description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/farmer/inventory/${item.inventoryProductID}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.message === "successfully") {
        onUpdate(data.content);
        setIsEditing(false);
      } else {
        console.error("Error updating item:", data);
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
            }}
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
            }}
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
            }}
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
            }}
          />
          <button
            onClick={handleSave}
            style={{
              borderRadius: "10px",
              backgroundColor: "#63B6BD",
              color: "white",
              fontWeight: 700,
              fontSize: "14px",
              zIndex: 1,
              alignItems: "center",
              justifyItems: "center",
              paddingTop: "3px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            style={{
              borderRadius: "10px",
              backgroundColor: "#930000",
              color: "white",
              fontWeight: 700,
              fontSize: "14px",
              zIndex: 1,
              alignItems: "center",
              justifyItems: "center",
              paddingTop: "3px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          style={{
            borderRadius: "10px",
            width: "70px",
            height: "35px",
            backgroundColor: "#63B6BD",
            color: "white",
            fontWeight: 700,
            fontSize: "14px",
            zIndex: 1,
            alignItems: "center",
            justifyItems: "center",
            paddingTop: "3px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
};

export default EditButton;
