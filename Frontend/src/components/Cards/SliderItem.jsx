import { Card, CardHeader, CardBody, CardFooter, Flex, Image, IconButton, Text, Box, Avatar, Button, Heading } from '@chakra-ui/react';
import { SplideSlide } from '@splidejs/react-splide';
import { Heart, Linkedin, MessageCircle, TvIcon } from 'lucide-react';

export const SliderItem = ({ post }) => {
  return (
    <SplideSlide>
      <Card borderRadius={16} textColor="white" bgColor="#1C1E27" maxW='md'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              icon={<TvIcon />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the speed
            of design. I wanted the developer to be just as excited as the designer to
            create a screen.
          </Text>
        </CardBody>
        <Image
          objectFit='cover'
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
        />

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button color={"white"} flex='1' variant='ghost' leftIcon={<Heart />}>
            Like
          </Button>
          <Button color={"white"} flex='1' variant='ghost' leftIcon={<MessageCircle />}>
            Comment
          </Button>
          <Button>
            Read Blog
          </Button>
        </CardFooter>
      </Card>
    </SplideSlide>
  )
}
