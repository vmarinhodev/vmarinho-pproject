import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  color: #212121;
  padding: 8rem 1rem;

  ${({ theme }) =>
    theme === 'dark' &&
    `
			color: #fff;
	`};
`

export const Hero = styled.div`
  border-radius: 0.2rem;
  box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.14);
  background: #fff;
  transition: 0.7s;
  height: 100%;
  overflow: hidden;
  margin: 4vw 0;
  position: relative;
  width: 65vw;
  min-width: 100%;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  transform: translateX(calc(50vw - 50%));

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.7s;
  }

  ${({ theme }) =>
    theme === 'dark' &&
    `
			background: #2b2a2a;
	`};

`
export const MagicalButton = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #0099CC;
  border-radius: 0.3rem;
  transition: 0.5s;

  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }

  &:hover {
    box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
    transition: 0.5s;
  }
`

export const Content = styled.div`
  position: relative;

  .fullwidth {
    border: 2px solid #333ddd;
  }
  
`

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
export const IntroDescription = styled.div`
  align-self: flex center;
  width: 50%;
  padding: 2rem 0;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
  margin: 2rem;

  a {
    margin: 0 1rem 1rem 0;
    color: #fff;

    &:last-child {
      margin: 0 0 1rem 0;
    }
  }
`
