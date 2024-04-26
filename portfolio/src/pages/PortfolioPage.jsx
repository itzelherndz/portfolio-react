import Project from '../components/UI/Project';
import reelReport from '../assets/images/reel-report.png';
import beatTap from '../assets/images/beat-tap.png';
import techBlog from '../assets/images/tech-blog.png';
import textEditor from '../assets/images/text-editor.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import codingChallenge from '../assets/images/coding-challenge.png';

export default function PortfolioPage() {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="row portfolio">
                <Project image={reelReport} title="Reel Report" github="https://github.com/BryceGitHuba/Movie_Picker" deployed="https://reel-report-8887d227dacc.herokuapp.com/"/>
                <Project image={beatTap} title="Beat Tap" github="https://github.com/gabeharvey/beat-tap" deployed="https://gabeharvey.github.io/beat-tap/"/>
                <Project image={techBlog} title="Tech Blog" github="https://github.com/itzelherndz/tech-blog" deployed="https://tech-blog-ih-455218ad555e.herokuapp.com/"/>
                <Project image={textEditor} title="J.A.T.E Text Editor" github="https://github.com/itzelherndz/text-editor" deployed="https://j-a-t-e-text-editor.onrender.com/"/>
                <Project image={weatherDashboard} title="Weather Dashboard" github="https://github.com/itzelherndz/weather-dashboard" deployed="https://itzelherndz.github.io/weather-dashboard"/>
                <Project image={codingChallenge}title="Coding Challenge" github="https://github.com/itzelherndz/js-code-quiz" deployed="https://itzelherndz.github.io/js-code-quiz/"/>
            </div>
        </div>     
    );
}