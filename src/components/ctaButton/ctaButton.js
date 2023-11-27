function CtaButton({ text, onClick, style }) {
    return(<button className="button" onClick={onClick} style={style}>{text}</button>)
}

export default CtaButton;