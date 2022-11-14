import Header from './Header';
import Footer from './Footer';
import Animal from './Animal';

function Home() {
  return (
    <div className="App">
        <Header></Header>
        <div className='animal-container'>
            <Animal img="https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg" title="tiger" animalName="Tiger" desc="This is a Tiger."></Animal>
            <Animal img="https://files.worldwildlife.org/wwfcmsprod/images/Wild_Side_Of_china_Red_Panda_Travel_8.18.2012/story_full_width/1g0regqs2j_red_panda.jpg" title="red_panda" animalName="Red Panda" desc="This is a Red Panda."></Animal>
            <Animal img="https://files.worldwildlife.org/wwfcmsprod/images/African_forest_elephant_Gabon/story_full_width/9tac2wy950_why_matter_speciesHI_8480.jpg" title="african_elephant" animalName="African Elephant" desc="This is a African Elephant."></Animal>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home
