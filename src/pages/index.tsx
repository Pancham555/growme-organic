import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Sidebar from "../components/sidebar";
// import { DataGrid } from "@mui/x-data-grid";

interface postsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 150 },
    { field: "userId", headerName: "User Id", width: 150 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "body", headerName: "Body", width: 150 },
  ];

  const navigate = useNavigate();
  const [posts, setPosts] = useState<postsProps[]>([]);
  const checkIfLogin = () => {
    const name = localStorage.getItem("name");
    const number = localStorage.getItem("number");
    const email = localStorage.getItem("email");
    if (!name || !number || !email) {
      navigate("/login");
    }
  };

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfLogin();
    getData();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}
    >
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <Box sx={{ height: "100%", width: "80%" }}>
        <DataGrid
          rows={posts}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
      {/* <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          placeItems: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "85%",
        }}
      >
        {posts.map((data, index) => {
          return (
            <Card variant="outlined" key={index} style={{ maxWidth: "10rem" }}>
              <CardContent>
                <div
                  className=""
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                    padding: "1rem",
                  }}
                >
                  {data.title}
                </div>
                <div className="">{data.body}</div>
              </CardContent>
            </Card>
          );
        })}
      </div> */}
    </div>
  );
};

export default Home;
