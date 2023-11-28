/* eslint-disable jsx-a11y/img-redundant-alt */
import IconList from "../../components/iconList/iconList";
import NewsForm from "../../components/newsForm/newsForm";
import signUpImgDesk from "../../assets/illustration-sign-up-desktop.svg";
import signUpImgTabMob from "../../assets/illustration-sign-up-mobile.svg";

// Array contenant les textes pour la liste des avantages
const listTextArray = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a succes',
  'And much more!'
];

// Création des éléments de liste en utilisant le composant IconList pour chaque texte
const listComponents = listTextArray.map(listText => <li key={listText}><IconList text={listText} /></li>);

/**
 * Composant StayUpdate
 * 
 * Ce composant est utilisé pour afficher une section permettant aux utilisateurs de s'abonner à la newsletter
 * Il comprend des images adaptatives, une liste des avantages et un formulaire d'inscription
 */
function StayUpdate() {
  return (
    <div className="container">
      <section className="update">
        <img src={signUpImgTabMob} alt="signup image" className="update__img--tabMob"/>
        <div className="update__text">
          <h1 className="update__text__title">Stay updated!</h1>
          <p className="update__text__description">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='update__text__benefits'>
            {listComponents}
          </ul>
          <NewsForm />
        </div>
        <img src={signUpImgDesk} alt="signup image" className="update__img--desk"/>
      </section>
    </div>
  );
}

export default StayUpdate;
