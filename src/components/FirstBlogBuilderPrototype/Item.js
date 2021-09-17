import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import {componentMappings} from "./componentMappings";

const Item = ({ type, content, updateItem, handleKeyPress}) => {
    const textBox = React.useRef();


    useEffect(() => {
        if(!type) {
            textBox.current.focus();
        }
    });

    // const typeFound = (type) => {
    //       return componentMappings.includes(type);
    // };

    return (
        <ItemWrapper>
            {!type ? (
                <textarea
                    ref={textBox}
                    value={content}
                    onChange={(e) => {updateItem(e.target.value)}}
                    onKeyPress={handleKeyPress}
                />
            ) : componentMappings[type](content)
            }
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.div`
  font-size: 22px;
  
  textarea {
    border: none;
    outline: none;
    resize: none;
    width: 100%;
    font-size: inherit;
  }
`