import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';
import s from './GithubActivity.module.scss';

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff; /* Text color for the title */
`;

const GithubActivity = () => {
  const Title = styled.h1`
    color: var(--white);
    font-size: 2rem;
    margin-bottom: 3rem;
    position: relative;
    &::before {
      content: '';
      height: 1px;
      width: 50%;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0.5rem);
      border-bottom: 2px solid var(--pink);
    }
  `;

  const colorTheme = {
    background: 'transparent',
    level0: '#ecd9fc',
    light: ['rgba(255, 255, 255, 0)', '#28a745'],
    dark: ['rgba(0, 0, 0, 0)', '#28a745', '#196127', '#36d742', '#66ff66'],
  };

  return (
    <ContactSection>
      <Title>Days I Code...</Title>
      <div className={s.container}>
        <GitHubCalendar
          username="PramithaMJ"
          blockSize={15}
          blockMargin={5}
          theme={colorTheme}
          fontSize={16}
          accessToken="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"
          showTotalCount={true}
        />
      </div>
    </ContactSection>
  );
};

export default GithubActivity;
