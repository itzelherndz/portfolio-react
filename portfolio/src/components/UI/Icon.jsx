export default function Icon({link,image, name}){
    return (
        <a href={link} className="icon">
            <img src={image} alt={name}/>
            <strong>{name}</strong>
        </a>
    );
}