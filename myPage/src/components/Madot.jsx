import mato1 from '../assets/pics/mato1.png';
import mato2 from '../assets/pics/mato2.jpeg';

function Madot() {
    return (
        <div>
            <div className="image-row">
            <img src={mato1} alt="snail1" className="snail" />
            <img src={mato2} alt="snail2" className="snail" />
            </div>
            <h1>Madot</h1>
            <p>Minä pidän madoista</p>
            <footer><p>&copy; 2024 My Favourite Bugs.</p></footer>
        </div>
    );
}
export default Madot;