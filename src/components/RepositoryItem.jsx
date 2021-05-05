export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository?.name ?? "Default"}</strong>
      <p>{repository?.description ?? "Default"}</p>

      {repository?.url && <a href={repository?.url}>Acessar repositório</a>}
    </li>
  );
}
