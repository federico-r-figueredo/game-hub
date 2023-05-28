import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card width={"400px"}>
            <Skeleton height={"200px"}>
                <CardBody>
                    <SkeletonText></SkeletonText>
                </CardBody>
            </Skeleton>
        </Card>
    );
}

export default GameCardSkeleton;
