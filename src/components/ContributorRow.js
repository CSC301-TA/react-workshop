import { Avatar, HStack } from "@chakra-ui/react";

const ContributorRow = ({ contributors }) => {
  return (
    <HStack spacing="12px">
      {contributors && contributors.map((contributor, index) => {
        return (
          <Avatar key={index} name={contributor.login} src={contributor.avatar_url} />
        );
      })}
    </HStack>
  );
};

export default ContributorRow;
