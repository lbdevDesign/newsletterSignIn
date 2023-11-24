import successIcons from '../../../src/assets/icon-success.svg'

function IconList(props) {
    return(
        <section className='listElement'>
            <img src={successIcons} alt='iconSuccess' className='listElement__icon'/>
            <p className='listElement__text'>{props.text}</p>
        </section>
    );
}

export default IconList;