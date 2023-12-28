import React, { useState } from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === `dark` ? `grey` : `white`,
        color: props.mode === `dark` ? `white` : `black`,
        paddingBottom: "10px",
        textAlign: "center",
      }}
    >
      <h2
        className="my-3"
        style={{ color: props.mode === `dark` ? `white` : `black` }}
      >
        Our Mission At TextUtils
      </h2>
      <div
        className="card"
        style={{
          backgroundColor: props.mode === `dark` ? `grey` : `white`,
          color: props.mode === `dark` ? `white` : `black`,
          padding: "20px", // Add padding
          textAlign: "center", // Center align text
          marginBottom: "15px", // Add margin
        }}
      >
        <p>
          We are dedicated to making text analysis and modification as simple
          and accessible as possible. Whether you need to convert text to
          uppercase or lowercase, remove extra spaces, or preview your text, our
          tools are designed to provide you with instant results. Our commitment
          to efficiency and user-friendliness drives us to continuously improve
          our services, ensuring that your experience is seamless and
          satisfactory.
        </p>
      </div>
    </div>
  );
}
