import React from "react";
import PropTypes, { InferProps } from "prop-types";

const HeaderProps = {
     phone: PropTypes.string.isRequired,
};

export default function Header({ phone, age }: InferProps<typeof HeaderProps>) {
     return (
          <header className="">
               theme 2 header {phone} {age}
          </header>
     );
}
