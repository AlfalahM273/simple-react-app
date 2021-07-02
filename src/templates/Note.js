
function Note(props){
    return (
        <div style={{ textAlign: "left", padding: "8px" }} >
            {props.post.content}{' '}
            <button onClick={() => {
                props.onDelete(props.post.id);
            }} >
                Remove
            </button>
        </div>
    );
}

export default Note
