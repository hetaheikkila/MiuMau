import torakka1 from '../assets/pics/torakka1.jpg';
import torakka2 from '../assets/pics/torakka2.jpg';

function Torakat() {
    return (
        <div>
            <div className="image-row">
            <img src={torakka1} alt="torakka" className="snail" />
            <img src={torakka2} alt="torakka" className="snail" />
            </div>
            <h1>Torakat</h1>
            <p>Torakat on tosi söpöjä</p>
            <footer><p>&copy; 2024 My Favourite Bugs.</p></footer>
        </div>
    );
}
export default Torakat;