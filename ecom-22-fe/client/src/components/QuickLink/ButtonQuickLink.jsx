import './buttonquicklink-module.scss';

const QuickLink = (props) => {
    return (
        <a onClick={() => props.handleSetChose(props.type)}>
            {props.demand}
            <img src={props.link} alt={props.type} />
        </a>
    );
};
export default QuickLink;
