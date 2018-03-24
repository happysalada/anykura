import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';

const Notifi = (props) => {
    return (
        <Paper>
            <IconButton onClick={() => {props.close();}}><Icon>close</Icon></IconButton>
            <List>
                <ListItem>
                    <ListItemText>{props.title}</ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>{props.message}</ListItemText>
                </ListItem>
            </List>
        </Paper>
    )
}

export default Notifi