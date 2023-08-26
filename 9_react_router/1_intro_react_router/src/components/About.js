import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <main>
      <p>
        This application contains snippets from various Codecademy articles. You
        can browse all our articles and read them in their entirety{" "}
        <Link to="https://www.codecademy.com/articles">here</Link>.
      </p>
    </main>
  );
}
