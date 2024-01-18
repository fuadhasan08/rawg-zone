import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { GamesType } from "../hooks/useGames";
import { FaWindows, FaXbox, FaLinux, FaApple } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4, SiPlaystation3 } from "react-icons/si";
import { TbBrandXbox } from "react-icons/tb";
import { IconType } from "react-icons";
import GameMetacritic from "./GameMetacritic";
import useCropedImage from "../hooks/UseCropedImage";

interface Props {
  game: GamesType;
}

const GameList = ({ game }: Props) => {
  const platformIcon: Record<string, IconType> = {
    pc: FaWindows,
    playstation5: SiPlaystation5,
    xbox360: FaXbox,
    playstation4: SiPlaystation4,
    playstation3: SiPlaystation3,
    macos: FaApple,
    linux: FaLinux,
    "xbox-one": TbBrandXbox,
  };

  return (
    <Box
      width={"auto"}
      bg={"#1b1b1b"}
      padding={4}
      paddingBottom={10}
      borderRadius={10}
      color="ghostwhite"
    >
      <Image
        src={useCropedImage(game.background_image)}
        borderRadius={10}
        marginBottom={5}
      />
      <HStack justifyContent="space-between">
        {game.platforms && (
          <HStack>
            {game.platforms.map(({ platform }, idx) => {
              const IconComponent = platformIcon[platform.slug] || "span";

              return <IconComponent fontSize={18} key={idx} />;
            })}
          </HStack>
        )}
        <GameMetacritic metacritic={game.metacritic} />
      </HStack>
      <Text fontSize="2xl" as="h2" fontWeight={500} marginTop={5}>
        {game.name}
      </Text>
    </Box>
  );
};

export default GameList;
