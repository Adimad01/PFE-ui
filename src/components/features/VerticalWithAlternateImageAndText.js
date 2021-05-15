import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

const Container = tw.div `relative`;

const SingleColumn = tw.div `max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div `flex flex-col text-black items-center`;
const HeadingDescription = tw.p `mt-2 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div `mt-16`;

const Card = styled.div(props => [
    tw `mt-24 md:flex justify-center items-center`,
    props.reversed ? tw `flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw `rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div `mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div `font-bold tracking-wide text-secondary-100`;
const Title = tw.h4 `text-3xl font-bold text-gray-900`;
const Description = tw.p `mt-2 text-sm text-black leading-loose`;

const SvgDotPattern1 = tw(
    SvgDotPatternIcon
)
`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
    SvgDotPatternIcon
)
`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
    SvgDotPatternIcon
)
`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
    SvgDotPatternIcon
)
`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
    const cards = [{
            imageSrc: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=312&q=80 312w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80 612w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=624&q=80 624w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80 912w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80 1212w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80 1224w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80 1512w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1812&q=80 1812w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1824&q=80 1824w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2112&q=80 2112w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2412&q=80 2412w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2424&q=80 2424w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2712&q=80 2712w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3012&q=80 3012w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3024&q=80 3024w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3312&q=80 3312w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3612&q=80 3612w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3624&q=80 3624w, https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3742&q=80 3742w",
            subtitle: "1.",
            title: "Qu'est-ce que la dysplasie canine de la hanche?",
            description: "Hip dysplasia is a common inherited orthopaedic problem where abnormalities occur in the hip joints. These abnormalities include changes to the shape of the hip, ball and socket and the development of osteoarthritis (a common form of arthritis). Changes to the hip joint will begin at a young age as the puppy starts to become more active and will get worse over time. These changes can lead to excessive wear and tear of the joint, causing one or both hip joints to become defective. At this stage the hip joint(s) may be painful and can have serious effects on the health, behaviour and welfare of the dog. The severity of hip dysplasia can vary from a poorly shaped hip joint with osteoarthritis (a common form of arthritis) to a very deformed hip joint with advanced and very painful osteoarthritis.",
            
        },

        {
            imageSrc: "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=333&q=80 333w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80 633w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=666&q=80 666w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=933&q=80 933w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1233&q=80 1233w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1266&q=80 1266w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1533&q=80 1533w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1833&q=80 1833w, https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1851&q=80 1851w",
            subtitle: "2.",
            title: "Quels sont les signes de la dysplasie canine de la hanche? ",
            description: "Signs of hip dysplasia in dogs vary between individuals and breeds. Some visible signs include: \n Lameness (being unable to walk correctly)\n Stiffness after rest \n A reluctance to exercise \n Groaning while resting or getting up \n Difficulty in using the stairs \n A vet’s physical examination will provide a more reliable assessment of whether hip dysplasia is present and an X-ray is the only definitive way of diagnosing hip dysplasia.",
            
        },

        {
            imageSrc: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80 334w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80 634w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80 668w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80 934w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80 1234w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80 1268w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80 1534w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80 1834w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80 1868w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80 2134w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2434&q=80 2434w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80 2468w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2734&q=80 2734w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80 3034w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3068&q=80 3068w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80 3334w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3634&q=80 3634w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3668&q=80 3668w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3934&q=80 3934w, https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4016&q=80 4016w",
            subtitle: "3.",
            title: "Comment traiter la dysplasie canine de la hanche?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            
        }
    ];

    return ( 
    <Container >
        
        <SingleColumn >
        <HeadingInfoContainer >
        <HeadingTitle > <Slide left>Dysplasie de la hanche chez les chiens </Slide></HeadingTitle> 
        <HeadingDescription ><Slide left>Le programme a examiné plus de 250000 chiens de plus de 180 races pour la dysplasie de la hanche</Slide> </HeadingDescription>
        </HeadingInfoContainer >
        
        <Content id='savPlus' > {
            cards.map((card, i) => ( 
                <Reveal effect="fadeInUp">
                <Card key = { i }
                reversed = { i % 2 === 1 } >
                <
                Image imageSrc = { card.imageSrc }
                />
                    <Details >
                    <LightSpeed left cascade>
                        < Subtitle > { card.subtitle } < /Subtitle> 
                        <Title > { card.title } < /Title> 
                        <Description > { card.description } < /Description>
                        </LightSpeed>
                    </Details>
                </Card>
                </Reveal>
            ))
        } 
        </Content>
        < /SingleColumn > <
        SvgDotPattern1 / >
        <
        SvgDotPattern2 / >
        <
        SvgDotPattern3 / >
        <
        SvgDotPattern4 / >
        <
        /Container>
    );
};