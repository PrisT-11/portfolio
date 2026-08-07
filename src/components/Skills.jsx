import { Grid, Typography } from "@mui/material";
import SkillItem from "./SkillItem";
import UnityLogo from "../assets/unity-logo.svg";

export default function Skills() {
    return (
        <Grid container spacing={3}>
            <Grid size={12}>
                <Typography variant="h4" component="h1">
                    Skills:
                </Typography>
            </Grid>
            <Grid size={6}>
                <SkillItem name="Java" image="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" />
            </Grid>
            <Grid size={6}>
                <SkillItem name="JavaScript" image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
            </Grid>
            <Grid size={6}>
                <SkillItem name="Unity" image={UnityLogo} />
            </Grid>
            <Grid size={6}>
                <SkillItem name="C#" image="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" />
            </Grid>
        </Grid>
    )
}