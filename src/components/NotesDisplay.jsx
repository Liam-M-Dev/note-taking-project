import { useEffect, useState } from "react";
import { useNoteData } from "../contexts/NotesContext";


export default function NoteDisplay(props){

    const {id} = props;
    let [localNote, setLocalNote] = useState({});

    const globalNotesData = useNoteData();


    

    useEffect(() =>{
        setLocalNote(globalNotesData.find(globalSpecificNote => 
            globalSpecificNote.id === id));
    },[globalNotesData, id])


    return(
        <div>
            <h4>{localNote.title}</h4>
                <p>{localNote.description}</p>
                <p>{localNote.isCompleted ? "COMPLETE" : "NOT YET DONE"}</p>
                <input type="checkbox" disabled="disabled" value={localNote.isCompleted} />
                <h5>Due Date: {new Date(localNote.dueDate).toLocaleString()}</h5>
                {/* <input type="date" readOnly value={note.dueDate} /> */}

                <h5>Created At: {new Date(localNote.createdAtDate).toLocaleString()}</h5>
                {/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
        </div>
    )
}