import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Styles from './Section.module.css';
import black from '../../Images/black.png';
import Riad from '../../Images/Riad.png';
import star from '../../Images/star.png';
const Section_3 = () => {
    return <>
        <Box className={Styles.parent}>

            <Flex className={Styles.parent_child}>
                <Box className={Styles.box_1}>
                    <Text className={Styles.heading}>Our Students Feedback</Text>
                    <Text className={Styles.info}>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</Text>
                </Box>

                <Box className={Styles.box_2}>
                    <Button
                        pt={'2rem'}
                        pb={'2rem'}
                        pr={'3.5rem'}
                        pl={'3.5rem'}
                        borderRadius={'10px'}
                    >Read More <Image src={black} /></Button>
                </Box>
            </Flex>
            {/* container */}

            <Box className={Styles.container}>
                <Box>
                    <Image
                    rounded={'2xl'}
                    w={'70%'} src={Riad} />
                </Box>

                <Box className={Styles.c2}>
                    <Flex>
                        <Image src={star} />
                        <Image src={star} />
                        <Image src={star} />
                        <Image src={star} />
                        <Image src={star} />
                    </Flex>
                    <Text className={Styles.info_2}>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque <br />Laudantium,<br />  Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo"</Text>
                    <Text className={Styles.info_3}>Riad Isalm</Text>
                    <Text className={Styles.info_4}>Product Manager. <span>@Learning.Com</span></Text>
                </Box>
            </Box>

        </Box>
    </>
}

export default Section_3;