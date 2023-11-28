import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmail } from '../../redux/emailAction';

/**
 * Composant NewsForm
 * 
 * Ce composant est un formulaire pour s'abonner à une newsletter
 * Il valide l'adresse email saisie, affiche des messages d'erreur si nécessaire,
 * et envoie l'email au store Redux après validation
 */
function NewsForm() {

    // Hooks pour dispatcher une action Redux et naviguer entre les routes
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // État pour gérer les erreurs de validation du formulaire
    const [error, setError] = useState(null);

    // Fonction pour naviguer vers la page de succès
    const navigateToSuccess = () => {
        navigate('/success');
    };

    // État pour gérer les données du formulaire
    const [formData, setFormData] = useState({email: ''});
    let inputEmail = formData.email

    // Fonction de validation de l'adresse email
    function isValidEmail(inputEmail) {
        return /\S+@\S+\.\S+/.test(inputEmail);
    }

    // Gestionnaire d'événement pour les changements dans l'input email
    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, email: value });

        // Vérifier si l'email est valide et mettre à jour l'état de l'erreur
        if (isValidEmail(value) || !value) {
            setError(null); // Aucune erreur ou champ vide
        }
    };

    // Gestionnaire d'événement pour la soumission du formulaire
    const handleSubmit = (e) => {

        if (!inputEmail || !isValidEmail(inputEmail)) {
            setError('Email is invalid'); // Définir l'erreur si l'email est invalide
            return; // Ne pas continuer avec la soumission
        }
        // Si l'email est valide, procéder avec la soumission
        dispatch(addEmail(inputEmail));
        localStorage.setItem('emailValue', inputEmail);
        setFormData({ email: '' });
        navigateToSuccess();

    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="newsForm">
                <section className='newsForm__labels'>
                    <p className="newsForm__labels__inputTitle">Email adress</p>
                    {error && <p className='newsForm__labels__inputError'>Valid email required</p>}
                </section>
                <input className={`newsForm__input ${error ? 'newsForm__input--error' : ''}`} 
                label='email adress' 
                placeholder="example@email.com" 
                value={formData.email}
                onChange={handleChange}/>
                <button className="newsForm__button" type="submit">Subscribe to monthly newsletter</button>
            </div> 
        </form>
        
    )
}

export default NewsForm;

