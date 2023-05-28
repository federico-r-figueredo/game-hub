import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps {
    gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: GameHeadingProps) {
    const heading = `${gameQuery.platform?.name || ""} ${
        gameQuery.genre?.name || ""
    } ${gameQuery.searchText || ""} Games`;

    return (
        <Heading marginBottom={5} fontSize={"5xl"} as={"h1"}>
            {heading}
        </Heading>
    );
}

export default GameHeading;
