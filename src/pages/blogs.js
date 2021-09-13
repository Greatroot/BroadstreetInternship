import React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";
import {Button} from "../components/Button";

const Blogs = () => {
    return (
        <Container>
            <Link to='/create-blog'>
                <Button>Create a Blog</Button>
            </Link>
        </Container>
    );
};

export default Blogs;

const Container = styled.div`

`