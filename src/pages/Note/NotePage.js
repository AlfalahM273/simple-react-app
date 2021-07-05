
import React from 'react';
import Note from '../../templates/Note';
import { Button, Alert } from 'reactstrap';

class NotePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content : "",
            notes : [],
        }
    }
    
    componentDidMount() {
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    deleteNote = (noteId) => {
        const notes = this.state.notes.filter( it => it.id !== noteId );
        this.setState({ notes: notes });
    }

    addNote = (content) => {
        const notes = this.state.notes;
        const lastNote = this.state.notes[ this.state.notes.length -1 ];
        if(!content){
            this.setState({ alert: "Content is Required!" });
            return;
        }
        const note = {
            id: lastNote ? lastNote.id + 1 : 1,
            content: content
        }
        
        this.setState({ notes: [...notes, note], content: "", alert: "" });
    }

    render(){
        return (
            <React.Fragment>
            <h2>Notes</h2>
            { this.state.alert ?
                <Alert color="danger"  >
                    {this.state.alert}
                </Alert>
                :
                ""
            }
                <textarea style={{ width: "100%" }}  type="text" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value, alert : ""  })}  ></textarea> <br/>
                <Button color="success" onClick={() => {
                    this.addNote(this.state.content);
                }}  >
                    Add
                </Button>
                <br/>
                {this.state.notes.map((e, key)=>{
                    return(
                        <Note key={key} post={e} onDelete={(id)=>{
                            this.deleteNote(id);
                        }} ></Note>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default NotePage
