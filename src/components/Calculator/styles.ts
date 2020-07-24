import styled from 'styled-components';

export const Container = styled.div`
  grid-column-start:2;
  grid-row-start:2;

  background:#fff;

  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows:2fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap:1px;

  width:220px;
  height:330px;
  border-radius:5px;

  background:#00000022;

  box-shadow: 1px 2px 100px ${props=> props.theme.colors.light};
  overflow:hidden;

  p{
    grid-column:1/5;

    color:#fff;
    font-size:32px;
    font-family: Arial, Helvetica, sans-serif;

    text-align:right;
    padding-top:55px;
    padding-right:10px;
  }

  button{
    border:none;
    background: #fff;
  }
  .operator-grey{
    background:#ddd;
  }

  .operator-orange{
    background:#ff8f00;
    color:#fff;
    font-size:24px
  }
  .zero{
    grid-column:1/3;

  }
`
