import {FC} from 'react';
import {AppBar, Button, Toolbar, Typography} from '@mui/material';

interface HeaderProps {
    onChange: () => void;
    isDarkTheme: boolean;
}

const Header: FC<HeaderProps> = ({onChange, isDarkTheme}) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Chat App
                </Typography>
                <Button color="inherit" onClick={onChange}>
                    Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
