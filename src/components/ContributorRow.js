import { Avatar, HStack } from "@chakra-ui/react";

const ContributorRow = ({ contributors }) => {
  return (
    <HStack spacing="12px">
      {contributors.map((contributor, index) => {
        return (
          <Avatar key={index} name={contributor.name} src={contributor.src} />
        );
      })}
    </HStack>
  );
};

export default ContributorRow;
