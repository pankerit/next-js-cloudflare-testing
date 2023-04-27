import dynamic from "next/dynamic";
import React from "react";

const _NoSsr: React.FC<any> = (props) => (
  <React.Fragment>{props.children}</React.Fragment>
);

export const NoSsr = dynamic(() => Promise.resolve(_NoSsr), {
  ssr: false,
});
