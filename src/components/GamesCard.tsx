import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import ScoreCritic from "./ScoreCritic"
import croppedUrl from "../services/image-url"
import Emojis from './Emojis'
interface Props{
    game:Game
}

const GamesCard = ({game}:Props) => {
  return (
    <Card>
      <Image src={croppedUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <ScoreCritic score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}<Emojis rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
}

export default GamesCard
