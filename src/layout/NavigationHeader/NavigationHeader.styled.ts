/* Internal dependencies */
import { styled } from '../../styling/Theme'

interface ContainerProps {
  isHover?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 22px 6px 18px 18px;
  box-sizing: border-box;
  background-color: ${({ theme, isHover }) => (isHover === true ? 'initial' : theme.colors.background1)};
`

export const TitleWrapper = styled.div`
  flex: 1 1 0;
`

export const ActionWrapper = styled.div`
  flex: 1 1 0;
`
