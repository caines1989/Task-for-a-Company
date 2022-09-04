import { DataGrid } from "@mui/x-data-grid";
import { useStatistics } from "../../hooks/useStatistics";

const columns = [
  {
    field: "createdAt",
    headerName: "Created",
    width: 200,
    valueFormatter: (field) => {
      return new Date(field.value).toLocaleString();
    },
  },
  {
    field: "updatedAt",
    headerName: "Last Updated",
    width: 200,
    valueFormatter: (field) => {
      return new Date(field.value).toLocaleString();
    },
  },
  {
    field: "clicks",
    headerName: "Clicks",
    width: 150,
  },
  {
    field: "views",
    headerName: "Views",
    width: 150,
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 150,
    valueFormatter: (field) => {
      return `£${field.value}`;
    },
  },
];

export const StatisticsGrid = () => {
  const { statistics } = useStatistics();

  return (
    <DataGrid
      rows={statistics}
      getRowId={({ _id }) => _id}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
};
