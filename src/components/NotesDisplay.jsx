import { useEffect, useRef } from "react";
import { useNoteData } from "../contexts/NotesContext";


export default function NoteDisplay(props){

    const {id} = props;
    let note = useRef({});

    const globalNotesData = useNoteData();


    

    useEffect(() =>{
        note.current = globalNotesData.filter(globalSpecificNote => {
            return globalSpecificNote.id === id;
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return(
        <div>
            <h4>{note.title}</h4>
                <p>{note.current.description}</p>
                <p>{note.current.isCompleted ? "COMPLETE" : "NOT YET DONE"}</p>
                <input type="checkbox" disabled="disabled" value={note.isCompleted} />
                <h5>Due Date: {new Date(note.current.dueDate).toLocaleString()}</h5>
                {/* <input type="date" readOnly value={note.dueDate} /> */}

                <h5>Created At: {new Date(note.current.createdAtDate).toLocaleString()}</h5>
                {/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
        </div>
    )
}