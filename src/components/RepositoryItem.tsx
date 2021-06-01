interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        language: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

    return (
        <li>
            <strong>{props.repository.name ?? "Default"}</strong> - language: <strong>{props.repository.language}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar repositório
            </a>
        </li>
    );
}