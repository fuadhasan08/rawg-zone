import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonGameList = () => {
  return (
    <Box
      bg={"#1b1b1b"}
      padding={4}
      paddingBottom={10}
      borderRadius={10}
      color="ghostwhite"
      width={340}
      height={360}
    >
      <Skeleton
        height="150px"
        width="100%"
        borderRadius={10}
        marginBottom={5}
      />

      <HStack justifyContent="space-between">
        <HStack>
          {/* Skeleton for platform icons */}
          <Skeleton height="20px" width="20px" marginRight="2" />
          <Skeleton height="20px" width="20px" marginRight="2" />
          <Skeleton height="20px" width="20px" marginRight="2" />
        </HStack>

        {/* Skeleton for GameMetacritic component */}
        <Skeleton height="20px" width="60px" />
      </HStack>

      {/* Skeleton for game name */}
      <SkeletonText height="30px" width="70%" marginTop={5} />
    </Box>
  );
};

export default SkeletonGameList;
