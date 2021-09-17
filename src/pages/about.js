import React, { useState, useEffect, useRef} from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import axios from "axios";
import Airtable from 'airtable';
import {render} from "react-dom";
// import Seo from "../components/seo"
// import Hero from "../components/Hero";
// import Trips from "../components/Trips";
// import Testimonials from "../components/styles/Testimonials";
// import Stats from "../components/Stats";
// import Email from "../components/Email";

const IndexPage = () => {
    const [teamRoster, setTeamRoster] = useState([]);
    const base = new Airtable({ apiKey: 'keyQxHIDEz8hhTfXN'}).base('appmOImYFLwfBF9qj');
    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
    // Being used so that we can have the useEffect hook do 2 different things based
    // on whether it has run for the first time or sometime after.

    useEffect(() => {
        if(firstUpdate.current)
        {
            const table_name = "Team Members List"
            base("Team Members List")
                .select({ view: "Grid view"})
                .eachPage((records, fetchNextPage) => {
                    console.log(records);
                    setTeamRoster(teamRoster.concat(records));
                    fetchNextPage();
                });
        }
    }, []);

    // renders the entire team member view.
    const renderRoster = () => {
        if(teamRoster !== undefined)
        {
            return teamRoster.map((member) => {
                return (
                    <MemberCard key={member.fields.id}>
                        <ProfilePic>
                            <img src={member.fields.picture[0].thumbnails.large.url} />
                        </ProfilePic>
                        <ProfileInfo>
                            <Name>
                                <h4>{member.fields.name}</h4>
                            </Name>
                            <Resume>
                                <p>RESUME / CV</p>
                                <p>{member.fields.resume_cv}</p>
                            </Resume>
                            <School>
                                <p>SCHOOL LINKED</p>
                                <p>{member.fields.school_linked}</p>
                            </School>
                        </ProfileInfo>
                    </MemberCard>
                );
            });
        }
    };


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
            <TeamGrid>
                {renderRoster()}
            </TeamGrid>
        </Container>
    </Layout>
    )
}

export default IndexPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 40vw;
  //margin: 2rem 21rem;
  margin: 2rem 0; 
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5em;
  padding: 3rem;
`

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ;
  border-radius: 5px;
  
  height: 25rem;
  width: 15rem;
  
  //justify-content: space-evenly;

`

const ProfilePic = styled.div`
  flex: 0;
  max-width: 100%;
  
  img {
    max-width: 100%;
    height: auto;
  }
`

const ProfileInfo = styled.div`
  flex: 0;
  max-width: 100%;


`

const Name = styled.div`

`

const Resume = styled.div`

`

const School = styled.div`

`