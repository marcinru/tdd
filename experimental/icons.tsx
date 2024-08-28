import React from "react";

interface IconProps {
  color: "primary" | "secondary" | (string & {});
}

function Icon({ color }: IconProps) {
  console.log(color);
  return <div>{/* use color for something */}</div>;
}

function IconsWrapper() {
  return (
    <div>
      <Icon color={9900e6} />
      <Icon color="primary" />
      <Icon color="secondary" />
      <Icon color="#9900e6" />
    </div>
  );
}
