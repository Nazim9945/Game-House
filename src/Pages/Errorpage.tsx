import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"


const Errorpage = () => {
    const error=useRouteError()
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page Does Not Exist"
            : "An Unexpected Error occurred"}
        </Text>
      </Box>
    </>
  );
}

export default Errorpage