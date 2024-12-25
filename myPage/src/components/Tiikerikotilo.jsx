import Snail1 from '../assets/pics/Snail1.jpg';
import Snail2 from '../assets/pics/Snail2.jpg';

function Tiikerikotilo() {
    return (
        <div>
            <div className="image-row">
            <img src={Snail1} alt="snail1" className="snail" />
            <img src={Snail2} alt="snail2" className="snail" />
            </div>
            <h1>Tiikerikotilot</h1>
            <p>Jee, yks mun lemppari kotiloista, Tiikerikotilo (Achatina achatina)!</p>
            <p>Tiikerikotilot on maailman isoin kotilolaji. Tykkään isoista ötököistä! mitä isompi sen parempi.</p>
            <p>Tiikerikotilot on peräisin Afrikan sademetsistä. Siellä niitä käytetään ravintona (söisin), mutta esim. euroopassa kotilot on lemmikkejä :3</p>
            <footer><p>&copy; 2024 My Favourite Bugs.</p></footer>
        </div>
    );
}
export default Tiikerikotilo;