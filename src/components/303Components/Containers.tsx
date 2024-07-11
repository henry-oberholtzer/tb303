import styled from "styled-components";
import { Pallete303 } from "./Palette";
import carat from "./svgs/carat.svg"

const BorderContainer = styled.div<{$small?: boolean, $filled?: boolean, $leftMargin?: boolean, $width?: number, $height?: number, $flexRow?: boolean}>`
  display: flex;
  flex-direction: ${props => props.$flexRow ? "row" : "column"};
  align-items: center;
  width: ${props => props.$width ? props.$width + "px" : "106px"};
  ${props => props.$leftMargin ? "border-radius: 0px 2px 2px 0px;" : "border-radius: 2px;"}
  background-color: ${props => props.$filled? Pallete303.Black : "transparent"};
  height: ${props => props.$height ? props.$height + "px" : props.$small? "82px" : "126px" };
  border: 1px solid ${Pallete303.Black};
  margin: 1px;
  ${props => props.$leftMargin ? "margin-left: 0;" : ""}
`
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label<{$silver?: boolean, $small?: boolean, $height?: number, $extraMargin?: boolean, $border?: boolean}>`
  font-family: 'Inter';
  color: ${props => props.$silver ? Pallete303.ControlPanelColor : Pallete303.Black};
  font-size: ${props => props.$small ? "10px" : "12px"};
  margin-top: ${props => props.$extraMargin ? "12px" : "0px"};
  border: ${props => props.$border ? "1px solid" + Pallete303.Black : ""};
  height: ${props => props.$height ? props.$height + "px" : props.$border ? "17px" : "24px"};
  margin-bottom: ${props => props.$border ? "7px" : ""};
  padding: ${props => props.$border ? "0px 2px" : "0"};
  text-align: center;
  text-transform: uppercase;
  user-select: none;
`

const Text = styled.span<{$padding?: number, $fontSize?: number, $noBorder?: boolean}>`
  font-family: 'Inter';
  text-transform: uppercase;
  font-size: ${props => props.$fontSize ? props.$fontSize + "px" : props.$noBorder ? "12px" : "10px" };
  padding: ${props => props.$padding ? props.$padding  + "px"  : "1px" };
  height: 17px;
  border: ${props => props.$noBorder? "None" : "1px solid " + Pallete303.Black};
  margin-right: 1px;
  user-select: none;
  &:last-of-type {
    margin-right: 0;
  }
  `

const TextContainer = styled.div<{$height?: number}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.$height ? props.$height : 24 }px;
  user-select: none;
  `

const GroupDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;`



const Carat = styled.div`
  background-image: url(${carat});
  width: 8px;
  height: 8px;`

export { Carat, GroupDiv, Text, TextContainer, BorderContainer, VerticalContainer, Label }
