import "./link.css"

interface LinkProps {
    texto: string;
    redirect: string;
}
function Link(props : LinkProps) {
    return (
        <a className="link-menu"
            href={
                props.redirect
            }
            target="_blank"
            rel="noreferrer">
            {
            props.texto
        } </a>
    )

}

export default Link;
