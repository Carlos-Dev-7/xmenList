import react from "react";
import LogicCards from "./LogicCards";

const HeroCards = (props) => {
    let tag = props.tag.toLowerCase();
    return React.createElement(
        tag,
        {
            className: props.className,
            itemProp: props.headline,
        },
        props.title,
    );
}

export default HeroCards;