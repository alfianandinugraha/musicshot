import Container from "@mui/material/Container";
import React from "react";

type BaselayoutProps = {
  children?: React.ReactNode;
};

const BaseLayout = ({ children = null }: BaselayoutProps) => {
  return <Container maxWidth="xs">{children}</Container>;
};

export default BaseLayout;
