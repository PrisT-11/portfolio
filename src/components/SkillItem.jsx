import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function SkillItem({ name, image }) {
    return (
        <Container>
            <Box sx={{ justifyContent: "center", textAlign: "center", margin: "0 auto"}}>
                <Box component="img" object-fit="contain" width={150} height={150} sx={{ margin: "0 auto" }}
                    alt={name}
                    src={image}
                />
                <Typography variant="h6" component="h2">{name}</Typography>
            </Box>
        </Container>
    );
}