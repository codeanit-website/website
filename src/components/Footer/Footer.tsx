import React from 'react';
// import Logo from '../Logo';
import styled from '../../utils/styled';

const HR = styled.hr``;

const FooterBlock = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  transition: ${(props) => props.theme.transitionTime}s;
  height: 130px;
  width: 100%;
`;

const FooterWrapper = styled.div`
  @media (max-width: 600px) {
    padding-left: 30px;
  }

  padding-top: 30px;
  padding-left: 70px;
  padding-right: 70px;
  max-width: 900px;
  margin-top: 30px;
  color: ${(props) => props.theme.fontColor};
  margin: 0 auto;
  a {
    color: inherit;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer: React.FC<{}> = () => (
  <FooterBlock data-testid="footer">
    <FooterWrapper>
      <HR />
      <FooterContent>
        <div>
          © {new Date().getFullYear()} Anit Shrestha Manandhar
        </div>
        {/* <Logo alt="Logo of codeanit" size={50} /> */}
      </FooterContent>
    </FooterWrapper>
  </FooterBlock>
);

export { Footer };
