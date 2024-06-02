import React, { useState } from "react";
import Post from "../../../components/Post";

const AAddTip = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const tipData = {
      title,
      content,
    };

    try {
      const response = await fetch("http://localhost:8080/admin/add-tip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tipData),
      });

      if (!response.ok) {
        throw new Error("Failed to post tip.");
      }

      // Handle successful post
      alert("Tip posted successfully!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error posting tip:", error);
      alert("Error posting tip.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-[1123px] h-[509px] mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1123"
        height="509"
        viewBox="0 0 1123 509"
        fill="none"
        className="absolute top-0 left-0"
      >
        <path
          d="M0 15C0 6.71573 6.71573 0 15 0H1108C1116.28 0 1123 6.71573 1123 15V494C1123 502.284 1116.28 509 1108 509H15C6.71576 509 0 502.284 0 494V15Z"
          fill="#63B6BD"
        />
      </svg>
      <div
        className="absolute bg-white rounded-[15px] border border-zinc-300 shadow-lg"
        style={{
          width: "1057px",
          height: "110px",
          marginTop: "30px",
          marginLeft: "25px",
          display: "flex",
        }}
      >
        <div className="ml-[30px] w-full">
          <div
            className=" mb-[5px]"
            style={{ color: "#000", fontSize: "25px", fontWeight: "700" }}
          >
            Title
          </div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="absolute"
            style={{
              width: "1000px",
              height: "37px",
              borderRadius: "5px",
              border: "1px solid #000",
              padding: "5px",
              backgroundColor: "#FFF",
            }}
          />
        </div>
      </div>
      <div
        className="absolute bg-white rounded-[15px] border border-zinc-300 shadow-lg"
        style={{
          width: "1057px",
          height: "281px",
          marginTop: "200px",
          marginLeft: "25px",
          display: "flex",
        }}
      >
        <div className="ml-[30px] w-full">
          <div
            className=" mb-[5px]"
            style={{ color: "#000", fontSize: "30px", fontWeight: "700" }}
          >
            Content
          </div>
          <textarea
            value={content}
            onChange={handleContentChange}
            className="absolute"
            style={{
              width: "1000px",
              height: "200px",
              borderRadius: "5px",
              border: "1px solid #000",
              padding: "5px",
              backgroundColor: "#FFF",
            }}
          />
        </div>
      </div>
      <div
        className="absolute w-full"
        style={{
          top: "520px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Post onClick={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default AAddTip;
