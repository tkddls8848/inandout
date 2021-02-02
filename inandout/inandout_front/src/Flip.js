import React from "react";
import './styles.css';
import { List, ListItem } from "@material-ui/core";
import { ModalContext } from "./Modal/modalContext";

const style = {
    root: {
        height: 400,
        margin:10,
    }
}

const Flip = ({items}) => {
  const { handleModal } = React.useContext(ModalContext)

  return (
    <div class="flip-card" style={style.root}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>Front</h1>
        </div>
        <div class="flip-card-back">
          <h1>Back</h1>
          <List>
              {items.map((item) => {
                return (
                  <ListItem key={item.label} button onClick={() => handleModal(item.modal)}>
                  {item.label}
                </ListItem>
                );
              })}
            </List>
        </div>
      </div>
    </div>
  );
}

export default Flip