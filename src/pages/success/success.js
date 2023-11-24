import CtaButton from '../../components/ctaButton/ctaButton';

import successIcon from '../../assets/icon-success.svg'

function Success() {
    return(
        <div className="container">
            <section className="success">
                <img src={successIcon} alt='Icon success' className='success__img'/>
                <h1 className='success__title'>Thanks for subscribing!</h1>
                <p className='success__text'>A confirmation email have been send to <b>ash@loremcompany.com</b>. Please open it and click the link inside to confirm your subscription.</p>
                <section className='success__button'>
                    <CtaButton text='Dismiss message' />
                </section>
            </section>
        </div>
    )
}

export default Success;