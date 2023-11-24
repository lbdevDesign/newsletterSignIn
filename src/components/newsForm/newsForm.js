import CtaButton from "../ctaButton/ctaButton";

function NewsForm() {
    return(
        <div className="newsForm">
            <p className="newsForm__inputTitle">Email adress</p>
            <input className="newsForm__input" label='email adress' placeholder="example@email.com"/>
            <CtaButton text='Subscribe to monthly newsletter'/>
        </div> 
    )
}

export default NewsForm;

