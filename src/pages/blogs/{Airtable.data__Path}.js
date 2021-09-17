import React from 'react';
import {graphql} from "gatsby";
import styled from "styled-components";
import Layout from "../../components/layout";

const BlogPage = (props) => {
    console.log(props);
    const pageData = props.data.airtable.data;

    return (
        <Layout>
            <Container>
                <Title>
                    <h1>{pageData.Title}</h1>
                    {/*<p>Written by {pageData.author}</p>*/}
                </Title>
                {/*<Image>*/}
                {/*    <img src={pageData.header_attachment[0].url} alt='Hero Image' />*/}
                {/*</Image>*/}
                <Content>
                    <main dangerouslySetInnerHTML={{
                        __html: pageData.Body.childMarkdownRemark.html,
                        }}
                    />
                </Content>
            </Container>
        </Layout>
        );
    };

    // Reminder: I struggled with $Path because as it turns out, file system routing
    // will pass in two params: id and path ONLY, NOT the field we are
    // generating each page with.
    export const pageQuery = graphql`
        query GetPage($id: String!) {
            airtable(
#                table: { eq: "Pages" },
#                data: { Path: { eq: $Path }}
                id: { eq: $id }
            ) {
                data {
                    Title
                    Body {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    `

    export default BlogPage;

    const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      margin-top: 3rem;
      margin-bottom: 4rem;
    `

    const Title = styled.div`
        margin: 0 2rem;
    `

    const Image = styled.div`
      
      img {
        max-width: 100%;
        height: auto;
      }
    `

    const Content = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      
      white-space: pre-wrap; // This is CRUCIAL!!!
      line-height: 1.2;
      margin-top: 2rem;
      padding: 0 5rem;
    `