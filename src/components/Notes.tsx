import * as React from "react";
import { Note } from "../models/note.model";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface INotes {
  note: Note,
  key: string,
  handleDelete: (id: string) => void
}

const Notes: React.FC<INotes> = ({note, handleDelete}) => {
  return (
    <div className="mb-3">
      <Card style={{backgroundColor: note.color}}>
      <Card.Header>{note.id}</Card.Header>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.text}
        </Card.Text>
        <Button variant="danger" onClick={() => handleDelete(note.id)}>Delete Note</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Notes