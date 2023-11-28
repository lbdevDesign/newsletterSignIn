import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import successIcon from '../../assets/icon-success.svg'

/**
 * Composant Success
 * 
 * Ce composant affiche un message de succès après que l'utilisateur s'est abonné
 * Il utilise Redux pour accéder à l'état global et React Router pour la navigation
 */
function Success() {

    // Récupération du dernier email de l'état Redux
    const lastEmail = useSelector(state => state.emai);
    console.log(lastEmail);

    // Hook pour naviguer programmement entre les routes
    const navigate = useNavigate();

    // Récupération de l'email sauvegardé dans localStorage
    let emailValue = localStorage.getItem("emailValue");

    // Fonction pour gérer le clic sur le bouton, naviguer vers la page d'accueil et effacer localStorage
    const navigateToHome = () => {
        localStorage.clear();
        navigate('/');
      };

    return(
        <div className="container">
            <section className="success">
                <img src={successIcon} alt='Icon success' className='success__img'/>
                <h1 className='success__title'>Thanks for subscribing!</h1>
                <p className='success__text'>A confirmation email have been send to <b>{emailValue}</b>. Please open it and click the link inside to confirm your subscription.</p>
                <button className="success__button" onClick={navigateToHome}>Dismiss message</button>
            </section>
        </div>
    )
}

export default Success;