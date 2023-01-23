import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { FetchAPI } from "../api/CallbackFunction";

interface YearPublication {
  year: string;
  publications: string[];
}

export function Publications() {
  const [publications, setPublications] = useState<YearPublication[]>();

  useEffect(() => {
    const fetchApi = FetchAPI(
      "https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/data/publications.json",
      (obj) => {
        setPublications(obj);
      }
    );
    fetchApi();
  }, []);

  return (
    <Box
      style={{
        textAlign: "justify",
      }}
    >
      {!publications ? (
        <div></div>
      ) : (
        publications.map((yearMap) => (
          <div>
            <h3>{yearMap.year}</h3>
            {yearMap.publications.map((publication) => (
              <p>{publication}</p>
            ))}
          </div>
        ))
      )}
    </Box>
  );
}
