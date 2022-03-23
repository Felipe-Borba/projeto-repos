import React from "react";
import { useParams } from "react-router-dom";

function Repositorio() {
  const params = useParams();

  return (
    <div>
      <h1 style={{ color: "#fff" }}>{params.repositorio}</h1>
    </div>
  );
}

export default Repositorio;
