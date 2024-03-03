import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const projects = [
    {
        title: 'Empowering Women in Technology',
        organization: 'Tech for Good',
        description: 'Bridging the gender gap in the tech industry by providing resources and mentorship to aspiring female developers.',
        image: '/static/images/project/1.jpg',
    },
    {
        title: 'Digital Literacy for Women',
        organization: 'Women in Tech Community',
        description: 'Teaching women essential digital skills to enhance their employability and empower them in the digital age.',
        image: '/static/images/project/2.jpg',
    },
    {
        title: 'Women in STEM Scholarship Program',
        organization: 'STEM Foundation',
        description:
            'Providing scholarships and support to women pursuing degrees in science, technology, engineering, and mathematics (STEM) fields.',
        image: '/static/images/project/3.jpg',
    },
    {
        title: 'Coding Bootcamp for Women',
        organization: 'CodeGirls',
        description: 'Intensive coding bootcamp designed specifically for women who want to break into the software development industry.',
        image: '/static/images/project/4.jpg',
    },
    {
        title: 'Women in Business Mentorship Program',
        organization: 'BusinessWomen Network',
        description: 'Pairing aspiring female entrepreneurs with experienced business leaders to provide guidance and support.',
        image: '/static/images/project/5.jpg',
    },
    {
        title: 'Tech Entrepreneurship Incubator for Women',
        organization: 'Startup Sisters',
        description: 'Incubator program empowering women to launch and grow their own tech startups through mentorship and resources.',
        image: '/static/images/project/6.jpg',
    },
    // Add as many projects as needed
];

const ProjectList = () => {
    return (
        <List sx={{width: '100%', bgcolor: 'background.paper', overflowY: 'auto', '&::-webkit-scrollbar': {width: '12px'}}}>
            {projects.map((project, index) => (
                <div key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={project.title} src={project.image} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={project.title}
                            secondary={
                                <>
                                    <Typography sx={{display: 'inline'}} component="span" variant="body2" color="text.primary">
                                        By {project.organization}
                                    </Typography>
                                    {' — ' + project.description}
                                </>
                            }
                        />
                    </ListItem>
                    {index !== projects.length - 1 && <Divider variant="inset" component="li" />}
                </div>
            ))}
        </List>
    );
};

export default ProjectList;
