import styled from 'styled-components';

export const StyledPage = styled.div`
  background:${props => props.theme.defaultBackground};
  color: ${props => props.theme.fontColor}
`

export const Inner = styled.div`
  max-width:${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.gutter};
`