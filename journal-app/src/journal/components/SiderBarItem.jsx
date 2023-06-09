import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SiderBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        return title.length > 17 ? `${title.substring(0, 17)}...` : title
    }, [title]);

    const onClickNode = () => {

        const activeNote = {
            id,
            title,
            body,
            date,
            imageUrls,
        };

        dispatch(setActiveNote(activeNote));

    }

    return (
        <ListItem key={id} disablePadding onClick={onClickNode} >
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid container >
                    <ListItemText primary={newTitle} />
                    <ListItemText secondary={body} />
                </Grid>

            </ListItemButton>
        </ListItem>
    )
}
