import React, { useContext } from "react";
import { Loader } from "../Loader";
import { Item } from "../Item";
import { Container } from "./styles";
import { Context } from "../../Context";

export const List = ({ array, loading }) => {
  const { handleClick } = useContext(Context);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p>{array.length} resultados...</p>
          {array.map(item => (
            <Item
              border
              key={item.id}
              {...item}
              onClick={e => handleClick(e, item)}
            />
          ))}
        </>
      )}
    </Container>
  );
};
