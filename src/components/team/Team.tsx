import Box from "@mui/material/Box";
import teamJson from "../../assets/data/team.json";
import teamImage from "../../assets/AAI_team_2025.jpeg";

export function Team() {
    return (<Box>
        <Box component="img" src={teamImage} sx={{
            pt: "30px",
            width: '100%',
        }}
        alt="A picture of the unit Applied Artificial Intelligence"
        />
        <Box sx={{
            pt: "30px",
            px: {
                xs: "0px",
                md:"30px",
            },
        }}>{teamJson.text}</Box>
    </Box>)
}
