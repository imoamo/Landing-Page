import React from 'react';
import Styles from './Section_1.module.css';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import dashboard from '../../Images/Dashboard.png';
import layout from '../../Images/layout.png';
import img_2 from '../../Images/img2.png';

const Section_1 = () => {
    return <>
        <Box className={Styles.parent}>
            <Box className={Styles.info}>
                <Text className={Styles.info_1}>We provide various kind of learning modules for you</Text>
                <Text className={Styles.info_2}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem </Text>
            </Box>
            {/* grid */}
            <SimpleGrid w={'85%'}
                margin={'auto'}
                mt={'4.5rem'}
                columns={3}
                spacing={'8rem'}
            >
                <Box className={Styles.card}
                     boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
                >
                    <Box
                    >
                        <Image w={'50%'} src={img_2} />
                    </Box>
                    <Text mt={'1.4rem'} textAlign={'center'} fontSize={'2.4rem'}>Learn Anything</Text>
                    <Text color={'#6B6969'} mt='.5rem' textAlign={'center'} fontSize={'1.6rem'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</Text>
                </Box>

                <Box className={Styles.card}
                    boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
                    background={'#FAF8E3'}
                >
                    <Box
                    className={Styles.card_1}
                    >
                        <Image w={'50%'} src={dashboard} />
                    </Box>
                    <Text mt={'1.4rem'} textAlign={'center'} fontSize={'2.4rem'}>Flexible Learning</Text>
                    <Text color={'#6B6969'} mt={'.5rem'} textAlign={'center'} fontSize={'1.6rem'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When</Text>
                </Box>

                <Box className={Styles.card}
                  boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
                >
                    <Box>
                        <Image  w={'50%'} src={layout} />
                    </Box>
                    <Text mt={'1.4rem'} textAlign={'center'} fontSize={'2.4rem'}>Expert Connect</Text>
                    <Text color={'#6B6969'} mt={'.5rem'} textAlign={'center'} fontSize={'1.6rem'}>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable</Text>
                </Box>
            </SimpleGrid>
        </Box>
    </>
}

export default Section_1;