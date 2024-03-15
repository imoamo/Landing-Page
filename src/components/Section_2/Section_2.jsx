import React from 'react';
import Styles from './Section_2.module.css';
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import bg from '../../Images/bg.png';
import next from '../../Images/next.png';
import bag from '../../Images/bag.png';
import { FaCheck } from "react-icons/fa";
import circle from '../../Images/circle.png';

const Section_2 = () => {
    return <>
        <Box className={Styles.parent}>
            <Text className={Styles.heading}>Why Us</Text>
            <Text className={Styles.text}>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>
            {/* two template columns */}

            <SimpleGrid columns={2} spacing={'5rem'}
                w={'90%'}
                m={'auto'}
                mt={'4rem'}
            >
                <Box className={Styles.Box_1} >
                    <Box position={'relative'}>
                        <Image w={'98%'} src={bg} />

                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                        >
                            <Image w={'70%'} src={next} />
                        </Box>
                    </Box>
                </Box>

                <Box className={Styles.Box_2}

                    mt={'.25rem'}>
                    <Text className={Styles.Box_2_info_1}>Crafting Your Dream Career: Building a Path You Love with us</Text>
                    <Text className={Styles.Box_2_info_2}>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>
                    <Text className={Styles.Box_2_info_3}>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</Text>
                    <Button fontSize={'2rem'} className={Styles.btn}
                        pt={'2rem'}
                        pb={'2rem'}
                        pl={'4rem'}
                        pr={'4rem'}
                        borderRadius={'20px'}
                        backgroundColor={'rgb(255,236,5)'}
                    >Get More</Button>
                </Box>
            </SimpleGrid>
            {/* Third last section */}

            <Box className={Styles.container_3}>
                <Text className={Styles.heading_2}>We Completed 1200+ Certification Program Successfully & Counting</Text>
                <Text className={Styles.c3_text}>
                    At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
                </Text>

                <SimpleGrid columns={4} spacing={'8rem'}
                    mt={'6rem'}
                    className={Styles.grid}
                >

                    <Box display={'flex'} columnGap={'1.5rem'}
                        alignItems={'center'}
                    >
                        <Box >
                            <FaCheck className={Styles.icon} />
                        </Box>
                        <Box >
                            <Text color={'#1453FF'} fontSize={'2rem'}>100+</Text>
                            <Text color={'#1453FF'} fontSize={'1.7rem'}>Batch Complete</Text>
                        </Box>
                    </Box>

                    <Box display={'flex'}>
                        <Box>
                            <Image w={'75%'} src={bag} />
                        </Box>
                        <Box ml={'-1rem'}>
                            <Text color={'#1453FF'} fontSize={'2rem'}>50+</Text>
                            <Text fontSize={'1.7rem'}>Active Batches</Text>
                        </Box>
                    </Box>

                    <Box display={'flex'}>
                        <Box>
                            <Image w={'75%'} src={circle} />
                        </Box >
                        <Box ml={'-1rem'}>
                            <Text color={'#1453FF'} fontSize={'2rem'}>10,000+</Text>
                            <Text fontSize={'1.7rem'}>Student Satisfied</Text>
                        </Box>
                    </Box>

                    <Box display={'flex'}>
                        <Box>
                            <Image w={'75%'} src={circle} />
                        </Box>
                        <Box ml={'-1rem'}>
                            <Text color={'#1453FF'} fontSize={'2rem'}>10+</Text>
                            <Text fontSize={'1.7rem'}>Course Modules</Text>
                        </Box>
                    </Box>

                </SimpleGrid>
            </Box>
        </Box>
    </>
};
export default Section_2