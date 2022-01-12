import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/UI/Button";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>Page Not Found :/</h1>
      <Button onClick={() => navigate("/")}>Back To Home</Button>
    </section>
  );
};

export default PageNotFound;
