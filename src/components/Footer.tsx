import {FC} from 'react';
import {Box, Container, Link, Typography} from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

interface FooterProps {
    description: string;
    title: string;
}

const Footer: FC<FooterProps> = ({description, title}) => {
    return (
        <Box component="footer" sx={{bgcolor: 'background.paper', py: 6}}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    {description}
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;
