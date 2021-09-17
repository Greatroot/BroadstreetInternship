import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Link} from "gatsby";
import {Button} from "../components/Button";
import Airtable from "airtable";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const base = new Airtable({ apiKey: 'keyQxHIDEz8hhTfXN'}).base('app6fsRBy9yjR8JPY');
    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
    // Being used so that we can have the useEffect hook do 2 different things based
    // on whether it has run for the first time or sometime after.

    useEffect(() => {
        if(firstUpdate.current)
        {
            const table_name = "Broadstreet Institute Webapp"
            base("Blogs")
                .select({ view: "Grid view"})
                .eachPage((records, fetchNextPage) => {
                    console.log(records);
                    setBlogs(blogs.concat(records));
                    fetchNextPage();
                });
        }
    }, []);

    // renders the entire team member view.
    const renderBlogs = () => {
        if(blogs !== undefined)
        {
            return blogs.map((blog) => {
                return (
                    <BlogCard title={blog.fields.title} author={blog.fields.author} />
                );
            });
        }
    };

    return (
        <Container>
            {renderBlogs()}
        </Container>
    );
};

export default Blogs;

const Container = styled.div`

`