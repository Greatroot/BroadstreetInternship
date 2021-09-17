import React from 'react';
import styled from "styled-components";

const BlogCard = ({ title, author }) => {

    return (
        <Card>
            <Title>
                <h3>{title}</h3>
            </Title>
            <Author>
                <p>{author}</p>
            </Author>
        </Card>
    );
};

export default BlogCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ;
  border-radius: 5px;
  background-color: #e3e3e3;
  
  height: 15rem;
  width: 15rem;
  
  
  // background-color: ${props => props.backgroundColor || "transparent"};
  // background-image: ${props => props.backgroundImage || "none"};
`

const Title = styled.div`
  
`

const Author = styled.div`

`