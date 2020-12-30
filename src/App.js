import { ChakraProvider } from "@chakra-ui/react";
import { Avatar, HStack } from "@chakra-ui/react";
import "./App.css";

const contributors = [
  {
    name: "Krish Chowdhary",
    src:
      "https://avatars1.githubusercontent.com/u/28268846?s=400&u=bcb924ffb01b8b7aa618cefa84c7bb9855a30743&v=4",
  },
  {
    name: "Jarrod Servilla",
    src:
      "https://avatars2.githubusercontent.com/u/45128231?s=460&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4",
  },
  {
    name: "Ritvik Bhardwaj",
    src: "https://avatars1.githubusercontent.com/u/43301959?s=400&v=4",
  },
];

function UnconnectedApp() {
  // How can we take the data in the contributors array and render Avatars from that?

  return (
    <div className="App">
      <header className="App-header">
        <HStack spacing="12px">
          <Avatar
            name="Krish Chowdhary"
            src="https://avatars1.githubusercontent.com/u/28268846?s=400&u=bcb924ffb01b8b7aa618cefa84c7bb9855a30743&v=4"
          />
          <Avatar
            name="Jarrod Servilla"
            src="https://avatars2.githubusercontent.com/u/45128231?s=460&u=96c06c111c351f4ea9bdb4171a10b3d2b04f3aba&v=4"
          />
          <Avatar
            name="Ritvik Bhardwaj"
            src="https://avatars1.githubusercontent.com/u/43301959?s=400&v=4"
          />
        </HStack>
      </header>
    </div>
  );
}

function ConnectedApp() {
  return (
    <ChakraProvider>
      <UnconnectedApp />
    </ChakraProvider>
  );
}

export default ConnectedApp;
