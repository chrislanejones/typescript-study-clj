import { FC, propswithchildren } from "react";

type Props = {
  str: string;
  num: number;
  handler: () => void;
};

export const Component1: FC<propswithchildren<Props>> = (props) => {
  return (
    <div>
      <div>{props.str}</div>
      <div>{props.num}</div>
      <button onClick={props.handler}></button>
    </div>
  );
};
