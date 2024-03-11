const Tag = ({tech, occurences}) => {
    return (
        <div className="tag">
            <div className="tag-text">{tech}</div>
            <div className="tag-occurrences">{occurences}</div>
        </div>
    );
    
}

export default Tag;