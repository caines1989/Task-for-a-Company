import Box from "@mui/material/Box";
import { StatisticsGrid } from "../molecules/StatisticsGrid";
import { StatisticsForm } from "../molecules/StatisticsForm";

const Home = () => {
  return (
    <>
      <h1>Statistics</h1>
      <Box
        sx={{
          height: 400,
          width: "56%",
          display: "block",
          position: "absolute",
        }}
      >
        <StatisticsGrid />
        <Box sx={{ height: 400, width: "100%" }}>
          <StatisticsForm />
        </Box>
      </Box>
    </>
  );
};

export default Home;
