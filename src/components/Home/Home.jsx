import React from 'react';
import Styles from "./Home.module.css";
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import img_1 from '../../Images/img1.png';
import arrow from '../../Images/arrow.png';
import laptop from '../../Images/laptop.png';
import next from '../../Images/next.png';
import { color } from 'framer-motion';

const Home = () => {
    return (
        <Box className={Styles.parent}>
            {/* Navbar */}
            <Box className={Styles.wrapper}>


                <Flex className={Styles.navbar}>
                    <Box className={Styles.logo_box} >
                        <Image w={'60%'} src={img_1} />
                    </Box>

                    <Box className={Styles.link}>
                        <Link>Home</Link>
                        <Link>Services Us</Link>
                        <Link>Why Us</Link>
                        <Link>Our Goals</Link>
                        <Button
                            pl='2rem'
                            pr='2rem'
                            pt='1.5rem'
                            pb='1.5rem'
                        >Contact Us</Button>
                    </Box>
                </Flex>
                {/* Navbar end */}
                <Flex columnGap={'5rem'} className={Styles.container}>
                    <Box className={Styles.child_1}>
                        <Text fontSize='4rem'>We Create Learning Experience With Excellent Technology.</Text>
                        <Text w={'85%'} mt={'2rem'} fontSize={'2rem'} color={'rgb(241,240,248)'}>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— All Included In Your Subscription</Text>

                        <Flex mt='5rem'
                            alignItems={'center'}
                        >
                            <Button
                                pl='2rem'
                                pr='2rem'
                                pt='2.5rem'
                                pb='2.5rem'
                                borderRadius='50px'
                                fontSize={'1.5rem'}
                                background={'rgb(255, 236, 5)'}
                            >Book Demo Class</Button>

                            <Box ml={'2rem'} display={'flex'}>
                                <Text fontSize={'2rem'}
                                    cursor={'pointer'}
                                    _hover={{ transform: "scale(1.1)" }}
                                    transition="transform 0.2s"
                                >Explore More</Text>
                                <Box ml={'1.5rem'}>
                                    <Image src={arrow} />
                                </Box>
                            </Box>


                        </Flex>
                    </Box>
                    <Box className={Styles.container_2}>
                        <Box position={'relative'}>
                            <Image w={'100%'} src={laptop} />
                            <Box
                                position="absolute"
                                top="50%"
                                left='50%'
                                transform="translate(-50%, -50%)"
                            >
                                <Image w={'70%'} src={next} />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
};

export default Home;