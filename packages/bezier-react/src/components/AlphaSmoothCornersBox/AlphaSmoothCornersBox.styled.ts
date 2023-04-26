/* stylelint-disable function-whitespace-after */
import { styled } from '~/src/foundation'

export const Box = styled.div`
  --bezier-react-alpha-smooth-corners-box-border-radius: 0;
  --bezier-react-alpha-smooth-corners-box-margin: 0;
  --bezier-react-alpha-smooth-corners-box-padding: 0;
  --bezier-react-alpha-smooth-corners-box-shadow: 0 0 0 0 transparent;
  --bezier-react-alpha-smooth-corners-box-shadow-blur: 0;
  --bezier-react-alpha-smooth-corners-box-background-color: white;

  margin: var(--bezier-react-alpha-smooth-corners-box-margin)px;
  background-color: var(--bezier-react-alpha-smooth-corners-box-background-color);
  background-image: var(--bezier-react-alpha-smooth-corners-box-background-image);
  background-size: cover;
  border-radius: var(--bezier-react-alpha-smooth-corners-box-border-radius);

  &[data-state="enabled"] {
    @supports (background: paint(smooth-corners)) {
      padding: var(--bezier-react-alpha-smooth-corners-box-padding)px;
      margin: calc(var(--bezier-react-alpha-smooth-corners-box-margin) + (-1 * var(--bezier-react-alpha-smooth-corners-box-padding)))px;
      background: paint(smooth-corners);
      border-radius: 0;
      border-image-source: var(--bezier-react-alpha-smooth-corners-box-background-image);
      box-shadow: none;

      --smooth-corners: var(--bezier-react-alpha-smooth-corners-box-border-radius);
      --smooth-corners-shadow: var(--bezier-react-alpha-smooth-corners-box-shadow);
      --smooth-corners-bg-color: var(--bezier-react-alpha-smooth-corners-box-background-color);
      --smooth-corners-padding: var(--bezier-react-alpha-smooth-corners-box-padding);
      --smooth-corners-radius-unit: var(--bezier-react-alpha-smooth-corners-box-border-radius-type);
    }
  }
`
