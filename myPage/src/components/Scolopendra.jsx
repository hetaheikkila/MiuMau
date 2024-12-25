import s1 from '../assets/pics/s1.jpg';
import s2 from '../assets/pics/s2.jpg';

function Scolopendra() {
    return (
        <div>
            <div className="image-row">
                <img src={s1} alt="snail1" className="snail" />
                <img src={s2} alt="snail2" className="snail" />
            </div>
            <h1>Scolopendra</h1>
            <p>Omg mun lemppari</p>
            <footer><p>&copy; 2024 My Favourite Bugs.</p></footer>
        </div>
    );
}
export default Scolopendra;
