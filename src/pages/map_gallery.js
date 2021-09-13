import React from 'react';
import styled from "styled-components";
import CodeSnippet from "../components/CodeSnippet";
import {Link} from "gatsby";
import Layout from "../components/layout";

const MapGallery = () => {
    return (
        <Layout>
            <Container>
                <Intro>
                    <Title>
                        <h1>Map Gallery</h1>
                    </Title>
                    <p>
                        Sometimes, it's best to see how the country is doing visually. These maps report the
                        number of COVID-19 cases for all 50 states, the District of Columbia, and Puerto Rico.
                        Mortality information is available by hovering your cursor over the first map.
                        The second map demonstrates how the number of confirmed COVID-19 cases and
                        deaths relate to community risk factors as defined by the Area Deprivation Index.
                    </p>
                </Intro>
                <CasesAndDeaths>
                    <CasesAndDeathsTitle>
                        <h1>
                            COVID-19 Total Confirmed Cases & Deaths
                        </h1>
                    </CasesAndDeathsTitle>
                    <Graph>
                        <iframe width="100%"
                                height="500px"
                                src="https://www.broadstreet.io/map/embed/?id=Qm9hcmRDYXJkVXNlTm9kZTo1NzMxNjU="
                                frameBorder="0"
                                allowFullScreen
                        />
                    </Graph>
                </CasesAndDeaths>
                <UseYourselfInstructions>
                    <p>
                        If you would like to embed our map in your website or app use the link/code below:
                    </p>
                    <CodeSnippet title="Embed code:" snippet="https://www.broadstreet.io/map/embed/?id=Qm9hcmRDYXJkVXNlTm9kZTo1NzMxNjU="/>
                    <CodeSnippet title="Link to map:" snippet='<iframe width="100%" height="500px" src="https://www.broadstreet.io/map/embed/?id=Qm9hcmRDYXJkVXNlTm9kZTo1NzMxNjU=" frameBorder="0" allowFullScreen>'/>
                    <MapRoomPara>
                        <p>
                            To create your very own custom map, build one in our
                        </p>
                        <a href="https://learn.broadstreet.io/sponsor/">Map Room</a>
                    </MapRoomPara>
                </UseYourselfInstructions>
                <CommunityMap>
                    <h1>What kind of communities are most at risk for COVID_19?</h1>
                    <p>The chart helps you see countries that are:</p>
                    <p>1.) High risk and high infection count (dark box 1).</p>
                    <p>2. High risk and low infection count (teal blue 3).</p>
                    <p>2. Low risk and high infection count (orange box 7).</p>
                    <p>4. Low risk and low infection count (yellow 9).</p>
                    <iframe width="100%"
                            height="500px"
                            src="https://www.broadstreet.io/map/embed/?id=UHJvamVjdEJvYXJkQ2FyZFVzZU5vZGU6NTg5NTU2="
                            frameBorder="0"
                            allowFullScreen
                    />
                </CommunityMap>
                <MissionSummary>
                    <p>
                        <a href="https://learn.broadstreet.io/">BroadStreet's</a> core mission is to empower people and communities with your community data.
                    </p>
                    <p>We have never wavered from this mission.</p>
                    <p> To support the COVID-19 Data Project and our <Link src="/about">Awesome Volunteers</Link>, Yes You! ❤</p>
                    <a href="https://www.buymeacoffee.com/zyCQHS8">Click here!</a>
                </MissionSummary>
            </Container>
        </Layout>
    );
};

export default MapGallery;

const Container = styled.div`
  max-height: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Intro = styled.div`
`

const Title = styled.div`

`

const IntroPara = styled.div`

`

const CasesAndDeaths = styled.div`

`

const CasesAndDeathsTitle = styled.div`

`

const Graph = styled.div`

`

const UseYourselfInstructions = styled.div`

`

const MapRoomPara = styled.div`
  display: flex;
  align-content: center;
  
  a {
    align-self: center;
    margin-left: 0.3rem;
  }
`

const CommunityMap = styled.div`

`

const MissionSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  margin-top: 5rem;
  height: 12em;
`