import React, { useState } from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";

const PostBuilder = () => {
    const [items, setItems] = useState([{
        type: null,
        content: '',
        id: uuidv4(),
    }]);

    return (
        <Post>
            {items.map((item) => (
                <Item
                    key={item.id}
                    type={item.type}
                    content={item.content}
                />
            ))}
        </Post>
    );
};

export default PostBuilder;

const Post = styled.div`

`