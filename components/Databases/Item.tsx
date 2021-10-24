import type { NextPage } from 'next';
import {
  Box,
  HStack,
  Badge,
  Icon,
  Spacer,
  Button,
  Text,
} from '@chakra-ui/react';
import { AiOutlineCheckCircle as CheckIcon } from 'react-icons/ai';

const ListItem: NextPage = () => {
  const item = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,

    name: 'csb-qj3kjs',
    loc: 'US East',
    formattedBilling: '$0.00',
    formattedUpdatedAt: '5 months ago',
    updatedBy: 'vitalikda',
  };

  return (
    <>
      <Box
        w="full"
        boxShadow="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <HStack p="6" spacing={10}>
          <Box>
            <Badge
              d="flex"
              alignItems="center"
              px={4}
              py={1}
              borderRadius="md"
              colorScheme="green"
              variant="outline"
              textTransform="lowercase"
            >
              <Icon as={CheckIcon} mr={1} />
              online
            </Badge>
          </Box>

          <Box w="sm">
            <Text fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {item.name}
            </Text>
            <Text
              color="gray.light"
              fontSize="sm"
              letterSpacing="wide"
              isTruncated
            >
              {item.loc}
            </Text>
          </Box>

          <Box w="sm">
            <Text fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              Current billing: ~{item.formattedBilling}
            </Text>
            <Text
              color="gray.light"
              fontSize="sm"
              letterSpacing="wide"
              isTruncated
            >
              {item.formattedUpdatedAt} by {item.updatedBy}
            </Text>
          </Box>

          <Spacer />

          <Button
            size="sm"
            variant="solid"
            colorScheme="blackAlpha"
            bgColor="black"
            color="white"
          >
            Manage
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default ListItem;
