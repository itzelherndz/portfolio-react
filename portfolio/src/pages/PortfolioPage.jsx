import Project from '../components/UI/Project';

export default function PortfolioPage() {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="row">
                <Project image="" title="Reel Report" github="https://github.com/BryceGitHuba/Movie_Picker" deployed="https://reel-report-8887d227dacc.herokuapp.com/"/>
                <Project image="" title="Beat Tap" github="https://github.com/gabeharvey/beat-tap" deployed="https://gabeharvey.github.io/beat-tap/"/>
                <Project image="" title="Tech Blog" github="https://github.com/itzelherndz/tech-blog" deployed="https://tech-blog-ih-455218ad555e.herokuapp.com/"/>
                <Project image="" title="J.A.T.E Text Editor" github="https://github.com/itzelherndz/text-editor" deployed="https://j-a-t-e-text-editor.onrender.com/"/>
                <Project image="" title="Weather Dashboard" github="https://github.com/itzelherndz/weather-dashboard" deployed="https://itzelherndz.github.io/weather-dashboard"/>
                <Project image="" title="Coding Challenge" github="https://github.com/itzelherndz/js-code-quiz" deployed="https://itzelherndz.github.io/js-code-quiz/"/>
            </div>
        </div>     
    );
}