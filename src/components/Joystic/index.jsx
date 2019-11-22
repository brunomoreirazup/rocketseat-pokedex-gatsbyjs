import React from 'react'
import {
  JoystickContainer,
  PaginationContainer,
  UpButton,
  RightButton,
  LeftButton,
  DownButton,
  StyledLink,
} from './styled'

const Joystic = (props) => {
  const {
    isLeftDisabled,
    isRightDisabled,
    isDownDisabled,
    isUpDisabled,
    handleRightButton,
    handleLeftButton,
    upLink,
    downLink,
  } = props

  const renderUpButton = (isUpDisabled, upLink) => (
    isUpDisabled
      ? <UpButton />
      : <StyledLink to={'/pokemon/' + upLink}>
        <UpButton />
      </StyledLink>
  )

  const renderDownButton = (isDownDisabled, downLink) => (
    isDownDisabled
      ? <DownButton />
      : <StyledLink to={'/pokemon/' + downLink}>
        <DownButton />
      </StyledLink>
  )

  return (
    <JoystickContainer>
      {renderUpButton(isUpDisabled, upLink)}
      <PaginationContainer>
        <LeftButton
          isDisabled={isLeftDisabled}
          onClick={!isLeftDisabled ? () => handleLeftButton() : null}
        />
        <RightButton
          isDisabled={isRightDisabled}
          onClick={!isRightDisabled ? () => handleRightButton() : null}
        />
      </PaginationContainer>
      {renderDownButton(isDownDisabled, downLink)}
    </JoystickContainer>
  )
}

export default Joystic