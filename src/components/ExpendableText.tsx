import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExpendableText = ({ children }: Props) => {
  const [isvalue, setValue] = useState(false);
  if (children.length <= 300) {
    return <Text>{children}</Text>;
  }
  return (
    <>
      <Text>
        {isvalue ? children : children.substring(0, 300) + "..."}
        <Button
          onClick={() => setValue(!isvalue)}
          size={"xs"}
          colorScheme="yellow"
          marginX={2}
        >
          {isvalue ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpendableText;
