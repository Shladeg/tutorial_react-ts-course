import { FC, PropsWithChildren } from "react";
import { useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  onClick: (num: number) => void;
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  const [state, setState] = useState<number>(0);

  const handleClick = (): void => {
    onClick(state);
    setState(state + 1);
  };

  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid black" : "none",
        background: variant === CardVariant.primary ? "lightgray" : "",
      }}
      onClick={handleClick}
    >
      {state}
      {children}
    </div>
  );
};

export default Card;
