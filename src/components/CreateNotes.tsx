import * as React from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Note } from '../models/note.model';

interface ICreateNotes {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotes> = ({notes, setNotes}) => {
  const [error, setError] = React.useState<string>("")
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault()
    if(titleRef.current?.value === "" || textRef.current?.value === "") {
      setTimeout(() => {
        setError("")
      }, 3000);
      return setError("All fields are mandatory");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
      }
    ])
  } 

  return(
    <div className="mt-3">
      <h2>Create Note</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Enter Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" ref={titleRef} />
        <Form.Text className="text-muted">
          Please enter notes text.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Text</Form.Label>
        <Form.Control as="textarea" placeholder="Enter Text" ref={textRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicColor">
        <Form.Label htmlFor='notesColor'>Note Color</Form.Label>
        <Form.Control type="color" id='notesColor' defaultValue={"#DFDFDF"} placeholder="Enter Color" ref={colorRef} />
      </Form.Group>
    
      {error && <Alert variant="danger" >{error}</Alert>}

      <Button className='mb-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateNotes