import React from 'react';
import {componentMappings} from "./componentMappings";
import styled from "styled-components";

const Toolbar = ({ addItem }) => {
    return (
        <Container>
            {Object.keys(componentMappings).map((key) => (
                <button onClick={() => addItem(key, {})}>
                    {key}
                </button>
            ))}
        </Container>
    );
};

export default Toolbar;

const Container = styled.div`

`