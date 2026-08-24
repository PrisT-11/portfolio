import { Stack, Typography } from "@mui/material";

export default function Experience() {
    return (
        <Stack direction="column" spacing={1} sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Typography variant="h4" style={{ textAlign: "left", margin: "0" }}>
                Experience:
            </Typography>
            <Typography variant="h6" style={{ textAlign: "left", margin: "0"}}>
                <b>NCS Group</b> - <i>Software Engineer</i>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Oct 2024 - Jun 2026
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                PLACEHOLDER
            </Typography>

            <Typography variant="h6" style={{ textAlign: "left", marginTop: "1rem"  }}>
                <b>NCS Group</b> - <i>Software Engineer Intern</i>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Sept 2023 - April 2024
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Assisted in migrating and developing a website from a .NET framework to Java Spring Boot framework.
            </Typography>

            <Typography variant="h6" style={{ textAlign: "left", marginTop: "1rem" }}>
                <b>Ngee Ann Polytechnic</b> - <i>Content Developer</i>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Nov 2020 - Jul 2021
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Collaborated with other trainees and the course module lead to design and develop a point-and-click game in Unity for the Landscape Design and Horticulture course, improving student’s learning retention.
            </Typography>

            <Typography variant="h6" style={{ textAlign: "left", marginTop: "1rem" }}>
                <b>Singapore Polytechnic</b> - <i>Game Developer</i>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Dec 2020 - Feb 2021
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Communicated effectively with the supervisor to develop an arcade game in Unity to raise awareness on scams, the game was launched by the Singapore Police Force at the Delta League in 2022.
            </Typography>

            <Typography variant="h6" style={{ textAlign: "left", marginTop: "1rem"}}>
                <b>Ministry of Education</b> - <i>Game Developer Intern</i>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Mar 2019 - May 2019
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Developed games to gamify learning of protocols and procedures for customer service staff at MOE, improving staff knowledge retention.
            </Typography>
   
            <Typography variant="h4" style={{ textAlign: "left", marginTop: "2rem"}}>
                Education:
            </Typography>
            <Typography variant="h6" style={{ textAlign: "left", margin: "0" }}>
                <b>Singapore Institute of Technology</b>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Aug 2021 - Aug 2024
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Bachelor of Science in Computing Science
            </Typography>

            <Typography variant="h6" style={{ textAlign: "left", marginTop: "1rem"}}>
                <b>Singapore Polytechnic</b>
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", margin: "0" }}>
                Apr 2017 - Apr 2020
            </Typography>
            <Typography variant="body2" style={{ textAlign: "left", margin: "0" }}>
                Diploma In Games Design & Development
            </Typography>
        </Stack>
    )
}