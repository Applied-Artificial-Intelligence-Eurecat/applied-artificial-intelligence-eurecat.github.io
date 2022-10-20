import { Box } from "@mui/system";
import publicationsJson from "../../assets/data/publications.json";

export function Publications() {
  return (
    <Box style={{
        textAlign: "justify"
    }}>
      {publicationsJson.map((yearMap) => (
        <div>
            <h3>{yearMap.year}</h3>
            {yearMap.publications.map((publication) => (
                <p>{publication}</p>
            ))}
        </div>
      ))}
    </Box>
  );
}
