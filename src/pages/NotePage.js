
import React from 'react';
import Note from '../templates/Note';

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
                <span style={{ color: "red" }}>
                    {this.state.alert}
                </span>
                <br/>
                <textarea style={{ width: "100%" }}  type="text" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })}  ></textarea> <br/> <br/>
                <button style={{ width: "100%" }} onClick={() => {
                    this.addNote(this.state.content);
                }}  >
                    Add
                </button>
                <br/> <br/>
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
