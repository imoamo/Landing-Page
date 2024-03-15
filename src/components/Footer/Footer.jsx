import React from 'react';
import Styles from './Footer.module.css';
import { Box, Button, Input, InputGroup, InputRightElement, SimpleGrid, Text, Image, Flex } from '@chakra-ui/react';
import logo from '../../Images/logo.png';
import fb from '../../Images/fb.png';
import pt from '../../Images/pt.png';
import link from '../../Images/link.png';
import x from '../../Images/x.png';

const Footer = () => {
    return <>
        <Box className={Styles.container}>
            <Box className={Styles.c1}>
                <Text className={Styles.heading}>Contact Us!</Text>
                <Text className={Styles.info}>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</Text>
            </Box>

            <Box className={Styles.c2}>
                <InputGroup>
                    <InputRightElement w={'10rem'}
                        mt={'1.3rem'}
                    >
                        <Button
                            h='3rem' size='lg'
                            pt={'1rem'}
                            pb={'1rem'}
                            pl={'2.5rem'}
                            pr={'2.5rem'}
                            background={'rgb(255,236,5)'}
                            borderRadius={'2rem'}
                        >Send</Button>
                    </InputRightElement>
                    <Input color={'white'} placeholder='Email here'
                        p={'2.5rem'}
                        background={'#ffffff'}
                        borderRadius={'5rem'}
                    />
                </InputGroup>
            </Box>
        </Box>
        {/* footer */}
        <footer className={Styles.footer}>
            <SimpleGrid columns={4} spacing={'5rem'} className={Styles.f1}>
                <Box>
                    <Box display={'flex'}
                        className={Styles.box_1}
                    >
                        <Image w={'22%'} src={logo} />
                        <Text ml={'1rem'} mt={'.5rem'}>Learning Exp.</Text>
                    </Box>

                    <Flex className={Styles.flex_1}>
                        <Image src={fb} />
                        <Image src={x} />
                        <Image src={link} />
                        <Image src={pt} />
                    </Flex>
                </Box>

                <Box className={Styles.box_2}>
                    <Text className={Styles.bh}>Links</Text>
                    <Box className={Styles.bt}>
                        <Text>Home</Text>
                        <Text>Pricing</Text>
                        <Text>Download</Text>
                        <Text>About</Text>
                        <Text>Service</Text>
                    </Box>
                </Box>

                <Box className={Styles.box_3}>
                    <Text className={Styles.bh}>Support</Text>
                    <Box className={Styles.bt}>
                        <Text>FAQ</Text>
                        <Text>How it Works</Text>
                        <Text>Features</Text>
                        <Text>Contact</Text>
                        <Text>Reporting</Text>
                    </Box>
                </Box>

                <Box className={Styles.box_4}>
                    <Text className={Styles.bh}>Contact Us</Text>
                    <Box className={Styles.bt}>
                        <Text>+880 12345678</Text>
                        <Text>youremail@gmail.com</Text>
                        <Text>Pune City</Text>
                    </Box>
                </Box>

            </SimpleGrid>

            <Box className={Styles.last}>
                <Text>Copyright & Design By @Learning Exp.</Text>
                <Flex
                    w={'30%'}
                    justifyContent={'space-evenly'}
                >
                    <Text>Terms of use</Text>
                    <Text>|</Text>
                    <Text>Privacy Policy</Text>
                </Flex>
            </Box>
        </footer>
    </>
};

export default Footer;