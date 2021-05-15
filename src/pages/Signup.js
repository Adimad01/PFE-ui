import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/signup.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/facebook-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import "./signup.css";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-1 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;
var showStat1 = false;
var showStat2 = false;
export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "S'inscrire gratuitement",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Inscrivez-vous avec Google ",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Inscrivez-vous avec Facebook ",
      url: "https://facebook.com",
    },
  ],
  submitButtonText = "S'inscrire",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
  privacyPolicyUrl = "#",
  signInUrl = "#",
}) => {
  const [form, setForm] = useState({
    name: "",
    address:"",
    university: "",
    clinic: "",
    email: "",
    password: "",
    type: "student",
  });

  console.log(form);
  return (
    <Container>
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <SocialButtonsContainer>
                {socialButtons.map((socialButton, index) => (
                  <SocialButton key={index} href={socialButton.url}>
                    <span className="iconContainer">
                      <img
                        src={socialButton.iconImageSrc}
                        className="icon"
                        alt=""
                      />
                    </span>
                    <span className="text">{socialButton.text}</span>
                  </SocialButton>
                ))}
              </SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Ou</DividerText>
              </DividerTextContainer>
              <Form>
                <Input
                  type="text"
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.currentTarget.value });
                  }}
                />
                
                <Input type="text" placeholder="Adresse"
                value={form.address}
                onChange={(e) => {
                  setForm({...form, address: e.currentTarget.value});
                }}
                />
                <Input type="email" placeholder="Email" 
                value={form.email}
                onChange = {(e) =>{
                  setForm({...Form, email : e.currentTarget.value})
                }}
                />
                <Input type="password" placeholder="Mot de pass" 
                value = {form.password}
                onChange={(e)=>{
                  setForm({...form,password : e.currentTarget.value});
                }}/>
                <div class="radio">
                  <input
                    class="input"
                    onClick={() => {
                      setForm({ ...form, type: "student" });
                    }}
                    type="radio"
                    value="Etudiant"
                    name="gender"
                    checked={form.type === "student"}
                  />{" "}
                  Etudiant
                  <input
                    class="input"
                    type="radio"
                    onClick={() => {
                      setForm({ ...form, type: "doctor" });
                    }}
                    checked={form.type === "doctor"}
                    value="Doctor"
                    name="gender"
                  />{" "}
                  Doctor
                </div>
                {form.type === "student" ? (
                  <Input type="text" placeholder="Nom de universite" />
                ) : (
                  <Input type="text" placeholder="Nom de clinique" />
                )}
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  J'accepte de respecter HOPE{" "}
                  <a href={tosUrl} tw="border-b border-gray-500 border-dotted">
                    Conditions d'utilisation
                  </a>{" "}
                  et son{" "}
                  <a
                    href={privacyPolicyUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Politique de confidentialité
                  </a>
                </p>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Vous avez déjà un compte?{" "}
                  <a
                    href={signInUrl}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    s'identifier
                  </a>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  );
};