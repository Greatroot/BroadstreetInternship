import React from 'react';
import styled from "styled-components";
import {Button} from "./Button";
import Video from '../assets/videos/pexels-gotta-be-worth-it-1029115.jpg';

// This is not made to be reusable since we only have one hero and the rest of the page is covered with cards.
// Reuse could be applicable when it comes to having multiple pages???
const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={ Video } type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Unreal Destinations</HeroH1>
                    <HeroP>Out of this world!</HeroP>
                    <Button>Travel Now</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;
`

const HeroBg = styled.div`
        
`

const VideoBg = styled.video`
    
`

const HeroContent = styled.div`
    
`

const HeroItems = styled.div`

`

const HeroH1 = styled.h1`

`

const HeroP = styled.p`
    
`
