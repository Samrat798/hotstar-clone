import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA-logo-main" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA-logo-secondary" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  position: relative;
`;

const BgImage = styled.div`
  height: 100%;
  background: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-inline: auto;
`;

const CTALogoOne = styled.img`
  min-width: 600px;
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;

const SignUp = styled.a`
  width: 100%;
  text-align: center;
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 16.5px 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  transition: all 0.25s ease-out;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  min-width: 100%;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: center;
`;

export default Login;
