import { Button } from 'reactstrap';

function Post(props){
    return (
        <div style={{ textAlign: "left", padding: "8px" }} >
            {props.post.content}{' '}
            <Button size="sm" color="danger" onClick={() => {
                props.onDelete(props.post.id);
            }} >
                Remove
            </Button>
        </div>
    );
}

export default Post
