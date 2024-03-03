import SendIcon from '@mui/icons-material/Send';
import {Avatar, Divider, Fab, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField} from '@mui/material';

const users = ['John Wick', 'Remy Sharp', 'Alice', 'Cindy Baker'];

const messages = [
    {id: 1, align: 'right', primary: "Hey, What's up ?", secondary: '09:30'},
    {id: 2, align: 'left', primary: 'Hey, I am Good! What about you ?', secondary: '09:31'},
    {id: 3, align: 'right', primary: "Cool. I am good, let's catch up!", secondary: '10:30'},
    {id: 4, align: 'left', primary: "Sure, I'd love to catch up! How about discussing a Polish volunteer project for women?", secondary: '11:00'},
    {id: 5, align: 'right', primary: 'That sounds like a great idea! Do you have any specific project in mind?', secondary: '11:15'},
    {
        id: 6,
        align: 'left',
        primary:
            "Absolutely! I've been thinking about how we can empower women in Poland through technology. Have you heard about any ongoing initiatives?",
        secondary: '11:30',
    },
    {
        id: 7,
        align: 'right',
        primary: 'Yes, there are a few organizations working on similar projects. Let me share some details with you.',
        secondary: '11:45',
    },
    {
        id: 8,
        align: 'left',
        primary: "That would be fantastic! I'm eager to learn more about how we can contribute to such a meaningful cause.",
        secondary: '12:00',
    },
    {
        id: 9,
        align: 'right',
        primary: "I'll gather more information and send it over to you by tomorrow. Together, we can make a difference!",
        secondary: '12:15',
    },
    {id: 10, align: 'left', primary: "Thank you! Looking forward to it. Let's work towards creating positive change!", secondary: '12:30'},
];

const Chat = () => {
    return (
        <Grid sx={{width: '100%', bgcolor: 'background.paper'}} container component={Paper}>
            {/* Left Sidebar */}
            <Grid item xs={12} md={3} sx={{borderRight: {md: '1px solid #e0e0e0'}}}>
                {/* Search TextField */}
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                {/* List of Online Users */}
                <List>
                    {users.map((user, index) => (
                        <ListItemButton key={index}>
                            <ListItemIcon>
                                <Avatar alt={user} src={`https://material-ui.com/static/images/avatar/${index + 1}.jpg`} />
                            </ListItemIcon>
                            <ListItemText primary={user} />
                            {/* Consider adding online status */}
                        </ListItemButton>
                    ))}
                </List>
            </Grid>
            {/* Main Chat Section */}
            <Grid item xs={12} md={9}>
                {/* List of Messages */}
                <List
                    sx={{
                        height: '60vh',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {width: '12px'},
                        '&::-webkit-scrollbar-track': {background: '#f1f1f1'},
                        '&::-webkit-scrollbar-thumb': {background: '#888', borderRadius: '10px'},
                        '&::-webkit-scrollbar-thumb:hover': {background: '#555'},
                    }}>
                    {messages.map((message) => (
                        <ListItem key={message.id}>
                            <Grid container>
                                <Grid item xs={12}>
                                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                    {/*@ts-expect-error  */}
                                    <ListItemText align={message.align} primary={message.primary} />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                    {/*@ts-expect-error  */}
                                    <ListItemText align={message.align} secondary={message.secondary} />
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                {/* Input Text field and Send Button */}
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/*@ts-expect-error  */}
                    <Grid item xs={1} align="right">
                        <Fab color="primary" aria-label="add">
                            <SendIcon />
                        </Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Chat;
