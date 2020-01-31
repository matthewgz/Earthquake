import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { Container, ListOfOptions, Option, Selector, Span } from "./styles";

export const Select = ({ options, title, value, setValue }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hideValues = () => {
      setShow(false);
      document.removeEventListener("click", hideValues);
    };
    if (show === true) {
      document.addEventListener("click", hideValues);
    }
    return () => {
      document.removeEventListener("click", hideValues);
    };
  }, [show]);

  const showValues = () => {
    if (show === false) {
      setShow(true);
    }
  };

  const onClick = value => {
    setValue(value);
  };

  return (
    <Container>
      <Selector show={value || false} onClick={showValues}>
        <Span>{(value && value.name) || title}</Span>
        {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </Selector>
      {show && (
        <ListOfOptions>
          {options &&
            options.map(e => (
              <Option key={e._id} onClick={() => onClick(e)}>
                <Span>{e.name}</Span>
              </Option>
            ))}
        </ListOfOptions>
      )}
    </Container>
  );
};
