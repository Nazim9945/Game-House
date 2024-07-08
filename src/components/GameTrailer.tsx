import { Heading, Spinner } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailer";
import { Text } from "@chakra-ui/react";


interface Props{
    gameId:number
}
const GameTrailer = ({gameId}:Props) => {
    const {data,isLoading,error}=useTrailer(gameId)
    console.log(data);
   if(isLoading) return <Spinner/>
   if(error) return null
   const first = data?.results[0];
   if(!first) return (
     <>
       <Heading as={"h1"} >Sorry!!</Heading>
       <Text>Trailer Does Not exist.</Text>
     </>
   );
  return (
    <>
      <video src={first.data[480]} poster={first.preview} controls></video>
    </>
  );
}

export default GameTrailer