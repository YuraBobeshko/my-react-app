import {FC, useState} from 'react';
import {Switch} from '@mui/material';

interface ThemeToggleProps {
    onChange?: (isDarkTheme: boolean) => void; // Optional callback function to handle theme change
}

const ThemeToggle: FC<ThemeToggleProps> = ({onChange}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
        onChange?.(isDarkTheme);
    };

    return (
        <div>
            <Switch checked={isDarkTheme} onChange={handleThemeChange} />
        </div>
    );
};

export default ThemeToggle;
