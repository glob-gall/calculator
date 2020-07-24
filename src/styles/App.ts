import styled from 'styled-components';
import ReactSwitch from 'react-switch'

export const Container = styled.div`
  min-height:100vh;
  background:${props => props.theme.colors.background};

  display:grid;

  grid-template-columns:100px 5fr 100px;
  grid-template-rows:30px 1fr;

  justify-items:center;
  align-items:center;
`

export const Switch = styled(ReactSwitch)`
  grid-column-start:3;
  margin-top:50px;
`