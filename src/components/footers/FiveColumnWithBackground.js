import React from "react";
import tw from "twin.macro";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import Slide from 'react-reveal/Slide';
import './styleFooter.css';
const Container = tw.div`relative bg-primary-500 text-white -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const FooterText = tw.p `mt-5  font-medium text-white text-center max-w-sm`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default () => {
  return (
    <Container>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <FooterText id="footerText"><Slide left>Copyright Universite d'Alger 1 </Slide> </FooterText>
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
