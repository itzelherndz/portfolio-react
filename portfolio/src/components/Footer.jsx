import Icon from './UI/Icon';

export default function Footer() {
    return (
        <footer>
            <Icon 
                link="https://github.com/itzelherndz"
                image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                name="GitHub"
            />
            <Icon
                link="https://www.linkedin.com/in/itzel-hdz-/"
                image="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                name="LinkedIn"
            />
            <Icon
                link="https://www.upwork.com/freelancers/~017c72dd50453b7d2c"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZM19_D9b5NU2Kv-WSFZYjAblyfCJP1Ixtq3spTjjPmg&s"
                name="Upwork"
            />
        </footer>
    );
}