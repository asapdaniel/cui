import { Box, Flex, Heading, Button } from 'chakra';
import bgImage from '../assets/images.jpeg';

const Header = () => {
    return (
        <div className="container">
        <Box
            py={70}
            px={190}
            color="white"
            textAlign="center"
            position="relative"
            maxW="900px"
            mx="auto"
        >
            <Box
                bgImage={`url(${bgImage})`}
                bgPosition="center"
                bgSize="cover"
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                opacity={0.5}
                zIndex={-1}
            />
            <Flex direction="column" alignItems="center">
                <Heading as="h1" size="4xl" mb={50}>
                    DOMINA EL TERRENO
                </Heading>
                <Box>
                    <Button
                        size="lg"
                        variant="outline"
                        colorScheme="white"
                        borderColor="white"
                        color="white"
                        mr={4}
                    >
                        Ver detalles
                    </Button>
                    <Button size="lg" colorScheme="white" bg="white" color="black">
                        Ver video
                    </Button>
                </Box>
            </Flex>
        </Box>
        </div>
    );
};

export default Header;