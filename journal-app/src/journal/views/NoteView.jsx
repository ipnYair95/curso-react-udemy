import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const dispatch = useDispatch();

    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();

    }, [date]);

    const fileInputRef = useRef(); // lo vamos a usar como un view child

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState]);

    useEffect(() => {

        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }

    }, [messageSaved])


    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {

        if (target.files === 0) {
            return;
        }

        dispatch(startUploadingFiles(target.files));

    }

    const onDelete = () =>{
        dispatch( startDeletingNote() );
    }

    return (
        <Grid className="animate__animated animate__fadeIn animate__faster" container direction="row" justifyContent="space-between" sx={{ mb: 1 }} >
            <Grid item >
                <Typography fontSize={39} fontWeight="light"  > {dateString} </Typography>
            </Grid>
            <Grid item>

                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />

                <IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()} >
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{ padding: 2 }}
                    onClick={onSaveNote}
                    disabled={isSaving}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container >
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    multiline
                    fullWidth
                    placeholder="¿Qué sucedio hoy?"
                    label="Descripción"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

            </Grid>

            <Grid container justifyContent="end" >

                <Button onClick={onDelete}
                    sx={{ mt: 2, mb: 2 }}
                    color="error"
                >
                    <DeleteOutline />
                    Borrar

                </Button>

            </Grid>

            <ImageGallery images={note.imageUrls} />

        </Grid>
    )
}
