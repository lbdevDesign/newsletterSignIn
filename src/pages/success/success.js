import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CtaButton from '../../components/ctaButton/ctaButton';

import successIcon from '../../assets/icon-success.svg'

function Success() {

    const lastEmail = useSelector(state => state.emai);
    console.log(lastEmail);

    const navigate = useNavigate();

    let emailValue = localStorage.getItem("emailValue");

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
                <section className='success__button'>
                    <CtaButton text='Dismiss message' onClick={navigateToHome} />
                </section>
            </section>
        </div>
    )
}

export default Success;