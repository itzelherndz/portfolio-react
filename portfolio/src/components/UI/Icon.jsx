export default function Icon(link, image, name){
    return (
        <a href={link}>
            <img src={image} alt={name}/>
            <strong>{name}</strong>
        </a>
    );
}