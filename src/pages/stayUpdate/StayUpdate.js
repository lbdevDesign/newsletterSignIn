/* eslint-disable jsx-a11y/img-redundant-alt */
import IconList from "../../components/iconList/iconList";
import NewsForm from "../../components/newsForm/newsForm";
import signUpImg from "../../assets/illustration-sign-up-desktop.svg"

const listTextArray = [
  'Product discovery and building what matters',
  'Measuring to ensure updates are a succes',
  'And much more!'
];

const listComponents = listTextArray.map(listText => <li key={listText}><IconList text={listText} /></li>);

function StayUpdate() {
  return (
    <div className="container">
      <section className="update">
        <div className="update__text">
          <h1 className="update__text__title">Stay updated!</h1>
          <p className="update__text__description">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className='update__text__benefits'>
            {listComponents}
          </ul>
          <NewsForm />
        </div>
        <img src={signUpImg} alt="signup image" className="updateContainer__img"/>
      </section>
    </div>
  );
}

export default StayUpdate;
