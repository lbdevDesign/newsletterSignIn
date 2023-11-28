import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmail } from '../../redux/emailAction';



function NewsForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const navigateToSuccess = () => {
        navigate('/success');
    };

    const [formData, setFormData] = useState({email: ''});
    let inputEmail = formData.email
    console.log(inputEmail);

    function isValidEmail(inputEmail) {
        return /\S+@\S+\.\S+/.test(inputEmail);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, email: value });

        // Vérifier si l'email est valide et mettre à jour l'état de l'erreur
        if (isValidEmail(value) || !value) {
            setError(null); // Aucune erreur ou champ vide
        }
    };

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

