import { useState, useEffect } from "react";
import "../App.css";
import { Grid, Typography, Button, InputBase } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import SearchIcon from "@mui/icons-material/Search";
import Item from "../components/Item";
import PostModal from "../components/PostModal";
import { get, post } from "../api/user";

const Home = () => {
  const [openPost, setOpenPost] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });
  const [data, setData] = useState([])
  const [lname, setLname] = useState("");

  useEffect(() => {
    loadData();
  }, [lname])
  
  const loadData = async () =>{
    const result = await get(lname);
    setData(result);
  }

  const handleClickOpenPost = () => {
    setOpenPost(true);
  };

  const onPostSubmit = async () => {
    const result = await post(form);    
    alert(result);
    loadData();
    setOpenPost(false);
  };

  const handleClosePost = () => {
    setOpenPost(false);
  };

  const onSearchChange = async (event: any) => {
    setLname(event.target.value);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ContactsIcon fontSize="large" />
        <Typography variant="h3">Phone Book App</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h5">Contacts</Typography>
        <Button variant="contained" onClick={handleClickOpenPost}>
          + Add Contact
        </Button>
      </Grid>
      <PostModal
        form={form}
        setForm={setForm}
        onPostSubmit={onPostSubmit}
        open={openPost}
        handleClose={handleClosePost}
      />
      <Grid>
        <div className="search">
          <SearchIcon style={{ paddingRight: "8px" }} />
          <InputBase
            fullWidth
            placeholder="Search for contact by last name"
            onChange={onSearchChange}
          />
        </div>
        <div>
          {data? (
            data.map((item: any) => {
              return (
                <Item
                  key={item.id}
                  id={item.id}
                  firstname={item.firstname}
                  lastname={item.lastname}
                  phone={item.phone}
                  loadData={loadData}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </Grid>
    </>
  );
};

export default Home;
