import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  gap: 10px 0px;
  width: 100%;

  .rangeslider {
    margin: 20px 0;
    position: relative;
    background: rgba(242, 106, 49, 0.5);
    -ms-touch-action: none;
    touch-action: none;
  }
  .rangeslider,
  .rangeslider .rangeslider__fill {
    display: block;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
  }
  .rangeslider .rangeslider__handle {
    background: #fff;
    border: unset;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    box-shadow: unset;
  }
  .rangeslider .rangeslider__handle .rangeslider__active {
    opacity: 1;
  }
  .rangeslider .rangeslider__handle-tooltip {
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    font-weight: normal;
    font-size: 14px;
    transition: all 100ms ease-in;
    border-radius: 4px;
    display: inline-block;
    color: white;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .rangeslider .rangeslider__handle-tooltip span {
    margin-top: 12px;
    display: inline-block;
    line-height: 100%;
  }
  .rangeslider .rangeslider__handle-tooltip:after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
  }
  /**
* Rangeslider - Horizontal slider
*/
  .rangeslider-horizontal {
    height: 3px;
    border-radius: 10px;
  }
  .rangeslider-horizontal .rangeslider__fill {
    height: 100%;
    background-color: rgba(242, 106, 49, 1);
    border-radius: 10px;
    top: 0;
  }
  .rangeslider-horizontal .rangeslider__handle {
    width: 14px;
    height: 14px;
    border-radius: 30px;
    top: 50%;
    background: rgba(242, 106, 49, 1);

    transform: translate3d(-50%, -50%, 0);
  }
  .rangeslider-horizontal .rangeslider__handle:after {
    content: " ";
    position: absolute;
    width: 0px;
    height: 0px;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    background-color: #dadada;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset,
      0 -1px 3px rgba(0, 0, 0, 0.4) inset;
  }
  .rangeslider-horizontal .rangeslider__handle-tooltip {
    top: -55px;
  }
  .rangeslider-horizontal .rangeslider__handle-tooltip:after {
    border-left: 8px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid rgba(0, 0, 0, 0.8);
    left: 50%;
    bottom: -8px;
    transform: translate3d(-50%, 0, 0);
  }
  /**
* Rangeslider - Vertical slider
*/
  .rangeslider-vertical {
    margin: 20px auto;
    height: 150px;
    max-width: 10px;
    background-color: transparent;
  }
  .rangeslider-vertical .rangeslider__fill,
  .rangeslider-vertical .rangeslider__handle {
    position: absolute;
  }
  .rangeslider-vertical .rangeslider__fill {
    width: 100%;
    background-color: #7cb342;
    box-shadow: none;
    bottom: 0;
  }
  .rangeslider-vertical .rangeslider__handle {
    width: 30px;
    height: 10px;
    left: -10px;
    box-shadow: none;
  }
  .rangeslider-vertical .rangeslider__handle-tooltip {
    left: -100%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .rangeslider-vertical .rangeslider__handle-tooltip:after {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid rgba(0, 0, 0, 0.8);
    left: 100%;
    top: 12px;
  }
  /**
* Rangeslider - Reverse
*/
  .rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {
    right: 0;
  }
  .rangeslider-reverse.rangeslider-vertical .rangeslider__fill {
    top: 0;
    bottom: inherit;
  }
  /**
* Rangeslider - Labels
*/
  .rangeslider__labels {
    position: relative;
  }
  .rangeslider-vertical .rangeslider__labels {
    position: relative;
    list-style-type: none;
    margin: 0 0 0 24px;
    padding: 0;
    text-align: left;
    width: 250px;
    height: 100%;
    left: 10px;
  }
  .rangeslider-vertical .rangeslider__labels .rangeslider__label-item {
    position: absolute;
    transform: translate3d(0, -50%, 0);
  }
  .rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {
    content: "";
    width: 10px;
    height: 2px;
    background: black;
    position: absolute;
    left: -14px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
  .rangeslider__labels .rangeslider__label-item {
    position: absolute;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    top: 10px;
    transform: translate3d(-50%, 0, 0);
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
`;
export const Categories = styled.div``;

export const Input = styled.input`
  height: 36px;
  outline: none;
  border: 1px solid rgba(219, 219, 219, 1);
  padding: 0px 13px;
  margin: 10px 0px 20px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #777777;
  ::placeholder {
    color: color: ${(props) => props.theme.grayText};
    opacity: 1;
  }
`;

export const RangeSlider = styled.div`
  padding: -10px 4px;

  marign-top: -14px;
`;
