import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image
                            boxSize={"32px"}
                            borderRadius={8}
                            src={getCroppedImageURL(genre.image_background)}
                        ></Image>
                        <Button
                            fontWeight={
                                genre.id === selectedGenre?.id
                                    ? "bold"
                                    : "normal"
                            }
                            onClick={() => onSelectGenre(genre)}
                            fontSize={"lg"}
                            variant={"link"}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;