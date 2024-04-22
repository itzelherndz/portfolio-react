export default function Project(image, title, description, github, deployed) {
    return (
        <div>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={github}>GitHub</a>
            <a href={deployed}>Application</a>
        </div>
    );
}