import React, { useState } from 'react';
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
import Toolbar from "./Toolbar";

const PostBuilder = () => {
    const [items, setItems] = useState([{
        type: null,
        content: '',
        id: uuidv4(),
    }]);

    const addItem = (type, content) => {
        setItems((state) => [...state, { type, content, id: uuidv4() }])
    };

    const updateItem = (id, newContent) => {
        setItems(state => {
            const itemIndex = state.findIndex(item => item.id === id);
            const newState = [...state];
            newState[itemIndex].content = newContent;
            return newState;
        });
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            addItem(null, '');
        }
    };

    return (
        <Post>
            {items.map((item) => (
                <Item
                    key={item.id}
                    type={item.type}
                    content={item.content}
                    updateItem={(newContent) => updateItem(item.id, newContent)}
                    handleKeyPress={handleKeyPress}
                />
            ))}
            <Toolbar addItem={addItem} />
        </Post>
    );
};

export default PostBuilder;

const Post = styled.div`

`