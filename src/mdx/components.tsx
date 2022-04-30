import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Text = styled.p(({ theme }) => {
    console.log(theme)
    return css`
    /* font: 18px/1.6 Arial, Helvetica, sans-serif; */
    font-weight: 400;
    margin: 20px 0;
    color: red;

`
})

export const Pre = styled.pre`
    font: 14px/1.3 Arial, Helvetica, sans-serif;
    white-space: inherit;
    color: red;
    margin: 20px 0;
`

export const Divider = styled.hr`
  height: 1px;
  background-color: rgba(38, 38, 38, 0.08);
  border: none;
  margin: 53px 0;
`
