import { css } from './Theme'

export const absoluteCenter = (otherTransforms: any) => `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ${otherTransforms};
`

interface SmoothCornersOptions {
  n?: number
  shadow?: string
  backgroundColor?: string
  backgroundImage?: string
}

export const smoothCorners = ({
  n = 4,
  shadow = 'none',
  backgroundColor = 'white',
  backgroundImage = '',
}: SmoothCornersOptions) => css`
  @supports (background: paint(smooth-corners)) {
    padding: 10px;
    border-radius: 0;
    box-shadow: none;
    background: paint(smooth-corners);

    /* Custom property 는 CSSUnparsedValue 로만 잡혀서 사용하는 임시 속성 */
    border-image-source: url(${backgroundImage});

    --smooth-corners: ${n};
    --smooth-corners-shadow: ${shadow};
    --smooth-corners-bg-color: ${backgroundColor};
  }
`
