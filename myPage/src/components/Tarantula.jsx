import tarantula1 from '../assets/pics/tarantula1.jpg';
import tarantula2 from '../assets/pics/tarantula2.jpg';

function Tarantula() {
    return (
        <div>
            <div className="image-row">
            <img src={tarantula1} alt="tarantula" className="snail" />
            <img src={tarantula2} alt="tarantula" className="snail" />
            </div>
            <h1>Tarantula</h1>
            <p>Tarantellat eli lintuhämähäkit. </p>
            <footer><p>&copy; 2024 My Favourite Bugs.</p></footer>
        </div>
    );
}
export default Tarantula;