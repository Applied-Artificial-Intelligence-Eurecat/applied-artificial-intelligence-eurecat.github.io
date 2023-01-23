import { Box } from "@mui/system";

interface YearPublication {
  year: string;
  publications: string[];
}

export function Publications() {
  let publicationsJson: YearPublication[] = [];
  fetch("https://raw.githubusercontent.com/Applied-Artificial-Intelligence-Eurecat/applied-artificial-intelligence-eurecat.github.io/main/src/assets/data/publications.json", {
    "method": "GET",
  })
  .then(response => response.json())
  .then(response => {
    publicationsJson = response;
  }).catch(err => { console.log(err); 
  });

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
