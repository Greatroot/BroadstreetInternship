import React from 'react';
import styled from "styled-components";
import Img from 'gatsby-image';
import {IoMdCheckmarkCircleOutline} from "react-icons/all";

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Sean Michaels</h3>
                        <p>"The greatest experience of my life! It was so much fun exploring the mountains and they made it super easy to book my trip and accomodation."</p>
                    </Testimonial>
                </ColumnOne>
            </ContentWrapper>
        </TestimonialsContainer>
    );
};

export default Testimonials;