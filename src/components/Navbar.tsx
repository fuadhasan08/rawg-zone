import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingY={3}>
      <Image src={logo} height={70} />
      <ColorSwitch />
    </HStack>
  );
};

export default Navbar;
