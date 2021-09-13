import React from 'react';
import styled from "styled-components";

const CodeSnippet = ({ title, snippet }) => {
    return (
        <Container>
            <h4>{ title }</h4>
            <CodeBox>
                <p>{snippet}</p>
            </CodeBox>
        </Container>
    );
};

export default CodeSnippet;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5em;
`

const CodeBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  
  background-color: #f4f4f4;
  border: 2px solid #d3d3d3;
  border-radius: 5px;
`