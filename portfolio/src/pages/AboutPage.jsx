import avatar from '../assets/images/avatar.png'

export default function AboutPage() {
    return (
        <div className="row">
            <div className="col-md-4">
                <img src= {avatar} alt="Itzel Hernandez Avatar"/>
            </div>
            <div className="col-md-8 about">
                <p>Results-driven Full-Stack Web Developer with a solid foundation in electrical engineering and multidisciplinary studies. Equipped with extensive training in a wide array of web development technologies. Committed to delivering high-quality solutions and eager to leverage expertise in diverse technologies to drive innovation and success within dynamic development teams.</p>
            </div>
        </div>
    );
}