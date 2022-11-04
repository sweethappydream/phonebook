import { useState } from "react";
import "../App.css";
import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "@emotion/styled";
import PutModal from "./PutModal";
import { put, del } from "../api/user";

const Info = styled("div")({
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: "10px",
  width: "95%",
});

const Inline = styled("div")({
  display: "flex",
  alignItems: "center",
});

const Item = (props: any) => {
  const [openPut, setOpenPut] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });

  const handleClickOpenPut = () => {
    setOpenPut(true);
  };

  const onPutSubmit = async () => {
    const result = await put({ ...form, id: props.id });
    alert(result)
    setOpenPut(false);
    props.loadData();
  };

  const handleClosePut = () => {
    setOpenPut(false);
  };

  const deleteItem = async () => {
    const result = await del(props.id);
    alert(result);
    props.loadData();
  };

  return (
    <>
      <div className="info">
        <Info onClick={handleClickOpenPut}>
          <Typography variant="h5">
            {props.firstname} {props.lastname}
          </Typography>
          <Inline>
            <LocalPhoneIcon color="disabled" />
            <Typography color="rgb(185, 185, 185)" variant="h6">
              {props.phone}
            </Typography>
          </Inline>
        </Info>
        <DeleteIcon
          fontSize="large"
          color="error"
          className="padd"
          onClick={deleteItem}
        />
      </div>
      <PutModal
        form={form}
        setForm={setForm}
        onPutSubmit={onPutSubmit}
        open={openPut}
        handleClose={handleClosePut}
      />
    </>
  );
};

export default Item;
