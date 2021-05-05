import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in ReactJs",
  url: "https://github.com/unform/unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/NatanTavares/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository, index) => (
          <RepositoryItem key={index} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
