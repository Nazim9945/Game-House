import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import ScoreCritic from "./ScoreCritic"


interface Props{
    game:Game
}

const GamesCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <ScoreCritic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GamesCard
