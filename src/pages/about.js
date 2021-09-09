import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
// import Seo from "../components/seo"
// import Hero from "../components/Hero";
// import Trips from "../components/Trips";
// import Testimonials from "../components/styles/Testimonials";
// import Stats from "../components/Stats";
// import Email from "../components/Email";

const IndexPage = () => {

    return (
    <Layout>
        <Container>
            <Paragraphs>
                <Para>
                    BroadStreet founded the COVID-19 Data Project to provide a research-ready data set to the public.
                </Para>
                <Para>
                    <b>BroadStreet's Vision.</b> By achieving victories in every community across the country, we will leave a better world for the next generation.
                </Para>
                <Para>
                    <b>BroadStreet's Mission.</b> Our mission at BroadStreet is to ensure that community information is beautiful, accessible, and easy-to-use.
                </Para>
                <Beliefs>
                    <BeliefsPara>
                        <b>BroadStreet's Core Beliefs.</b> These beliefs influence everything that we do.
                    </BeliefsPara>
                    <BeliefsList>
                        <BeliefsItem>
                            <Para>
                            (1) We believe in the power of working together for the common good.
                            </Para>
                        </BeliefsItem>
                        <BeliefsItem>
                            <Para>
                            (2) We believe that having access to data can empower real change.
                            </Para>
                        </BeliefsItem>
                        <BeliefsItem>
                            <Para>
                            (3) Which is why we believe that everyone deserves access to the best information possible.
                            </Para>
                        </BeliefsItem>
                        <BeliefsItem>
                            <Para>
                            (4) We believe in looking to the future and supporting the next generation of public health.
                            </Para>
                        </BeliefsItem>
                    </BeliefsList>
                </Beliefs>
            </Paragraphs>
        </Container>
    </Layout>
    )
}

export default IndexPage;

const Container = styled.div`

`

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 21rem;
`

//TODO: Need to fix up how the text gets shrunk/squished
const Para = styled.p`
  font-family: "Open Sans";
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  margin: 1rem 0;
`

const Beliefs = styled.div`

`

const BeliefsPara = styled.div`
  font-family: "Open Sans";
  font-size: 20px;
  line-height: 1.6;
  font-weight: 400;
  margin: 1rem 0;
`

const BeliefsList = styled.ol`
  list-style-type: none;
`

const BeliefsItem = styled.li`
  
`