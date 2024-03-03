import {FC, useState} from 'react';
import {Grid, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';

import Chat from './components/Chat.tsx';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Map from './components/Map.tsx';
import ProjectList from './components/ProjectList.tsx';
import {darkTheme, lightTheme} from './styles/themes';

const App: FC = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const theme = createTheme(isDarkTheme ? darkTheme : lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header onChange={handleThemeChange} isDarkTheme={isDarkTheme} />
                <main>
                    <Grid container spacing={2}>
                        <Grid item md={12} lg={4}>
                            <ProjectList />
                        </Grid>
                        <Grid item md={12} lg={8}>
                            <Map />
                        </Grid>
                    </Grid>
                    <Chat />
                </main>
                <Footer description={'description'} title={'title'} />
            </div>
        </ThemeProvider>
    );
};

export default App;
