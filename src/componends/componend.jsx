const Section = ({ children = [], classes = [], id = "" }) => {
    return (
        <section className={classes.join(" ")} id={id}>
            {children}
        </section>
    );
};

const Paragraph = ({ children = [], classes = [], id = "" }) => {
    return (
        <p className={classes.join(" ")} id={id}>
            {children}
        </p>
    );
}

const Header = ({ type = "h5", innerText = "", classes = [], id = "" }) => {
    if (type === 'h1') {
        return (<h1 className={classes.join(" ")} id={id}>{innerText}</h1>);
    } else if (type === 'h2') {
        return (<h2 className={classes.join(" ")} id={id}>{innerText}</h2>);
    } else if (type === 'h3') {
        return (<h3 className={classes.join(" ")} id={id}>{innerText}</h3>);
    } else if (type === "h4") {
        return (<h4 className={classes.join(" ")} id={id}>{innerText}</h4>);
    } else {
        return (<h5 className={classes.join(" ")} id={id}>{innerText}</h5>);
    }
}

const UnList = () => {
    return (
        <ul className="" id=""></ul>
    );
}

const ListItem = ({ innerText = "" }) => {
    return (<li className="">{innerText}</li>)
}

export { Section, Paragraph, Header, UnList, ListItem };