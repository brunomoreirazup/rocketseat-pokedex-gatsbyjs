import styled from 'styled-components'
import { Link } from 'gatsby'
import JoyButton from '../../core/assets/svg/joyButton.svg'

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  width: 80%;

  @media screen and (orientation: portrait) {
    width: 100%;
  }
`

export const JoystickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top 15px;
  @media screen and (orientation: portrait) {
    width: 38%;
    margin-right: 10px;
  }
`

export const RightButton = styled(JoyButton)`
  width: 40px;
  height: 40px;

  :hover {
    cursor: ${({ isDisabled }) => isDisabled ? 'default' : 'pointer'};
  }
`

export const LeftButton = styled(JoyButton)`
  transform: rotate(180deg);
  transform-origin: 50% 50%;
  width: 40px;
  height: 40px;

  :hover {
    cursor: ${({ isDisabled }) => isDisabled ? 'default' : 'pointer'};
  }
`

export const UpButton = styled(JoyButton)`
  transform: rotate(270deg);
  transform-origin: 50% 50%;
  width: 40px;
  height: 40px;
`

export const DownButton = styled(JoyButton)`
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  width: 40px;
  height: 40px;
`

export const StyledLink = styled(Link)`
  width: 40px;
  height: 40px;
  text-decoration: none;
  border: none;
  margin: 0;
  padding: 0;
`