import React from "react";
import { Box, Text, Grid, Flex, Image, Center, Img } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Icon } from '@chakra-ui/react'
import { CiMoneyCheck1, CiMoneyBill } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import uuid from "react-uuid";
export const FooterCard1 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize={18} fontWeight="700">
        {heading}
      </Text>
      <Box>
        {type.map((i, index) => (
          <Box key={uuid()}>
            <Link to={`/${i.pordType}`}>
              <Text fontSize="15px">{i.labels}</Text>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard2 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize={18} fontWeight="700">
        {heading}
      </Text>
      <Box>
        {type.map((i, index) => (
          <Box key={uuid()}>
            <Text fontSize="15px">{i.labels}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export const FooterCard3 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize={18} fontWeight="700">
        {heading}
      </Text>
      <Box>
        {type.map((i, index) => (
          <Box key={uuid()}>
            <Text fontSize="15px">{i.labels}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard4 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize={18} fontWeight="700">
        {heading}
      </Text>
      <Box>
        {type.map((i, index) => (
          <Box key={uuid()}>
            <Text fontSize="15px">{i.labels}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export const FooterCard5 = ({ type, heading }) => {
  return (
    <Box ml={115} cursor="pointer" display={{ lg: 'block', base: 'none' }}>
      <Text fontSize={18} fontWeight="700">
        {heading}
      </Text>
      <Image w={1000} h={'auto'} src='https://shopfront-cdn.tekoapis.com/static/vnpay_banks.png' />

    </Box>
  );
};

export const FooterCard6 = ({ type, heading }) => {
  return (
    <Box cursor="pointer">
      <Text fontSize={18} fontWeight="700">
        {heading}
      </Text>
      <Box>
        <Flex>
          <Link>
            <Box mr={5}>  <Center><Icon fontSize={40} as={CiMoneyBill} /></Center> <Text>Tiền mặt</Text></Box>
          </Link>
          {/* <Link>
            <Box mr={5}> <Center><Icon fontSize={40} as={GoClock} /></Center> <Text>Trả góp</Text></Box>
          </Link> */}
          <Link>
            <Box mr={5}> <Center><Icon fontSize={40} as={CiMoneyCheck1} /></Center> <Text>Banking</Text></Box>
          </Link>
        </Flex>
      </Box>

    </Box>
  );
};

// export const FooterCard2 = () => {
//   return (
//     <Box p={2} justifyContent="center">
//       <Flex mt="-2%" gap="2" wrap="wrap">
//         <Box w="18%" m="auto">
//           <Box>
//             <Text fontWeight="700">FOLLOW US</Text>
//           </Box>
//           <Box backgroundColor="whiteAlpha.900" w="30%">
//             <Grid
//               templateColumns="repeat(3, 1fr)"
//               m="auto"
//               backgroundColor="#003380"
//               color="white"
//             >
//               <Box _hover={{ color: "whiteAlpha.600" }} cursor="pointer">
//                 <AiFillFacebook size="20px" />
//               </Box>
//               <Box _hover={{ color: "whiteAlpha.600" }} cursor="pointer">
//                 <TfiTwitter size="20px" />
//               </Box>
//               <Box _hover={{ color: "whiteAlpha.600" }} cursor="pointer">
//                 <CiYoutube size="20px" />
//               </Box>
//             </Grid>
//           </Box>
//         </Box>
//         <Box w="72%">
//           <Text fontWeight="700">
//             EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
//           </Text>
//           <Flex justifyContent="left" gap="2" mt="2" cursor="pointer">
//             <Image
//               src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
//               alt="Google Play Store"
//               w="11%"
//               objectFit="cover"
//             />
//             <Image
//               src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
//               alt="Apple Store"
//               objectFit="cover"
//               w="11%"
//             />
//           </Flex>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export const FooterCard4 = () => {
//   return (
//     <Box backgroundColor="#0a244a" p="2">
//       <Center lineHeight="15px" borderColor="white.500" w="5%" m="auto" p="3">
//         <Text fontSize="14px" fontWeight="600" p="1">
//           <u>Disclaimer</u>
//         </Text>
//       </Center>
//       <Center>
//         <Text fontSize="14px" w="92%" m="auto" textAlign="center" p="1">
//           Product prices, offers and availability are subject to change from
//           time to time. All prices are inclusive of taxes. Product colours &
//           images are only for illustration and they may not exactly match with
//           the actual product. Product specs are subject to change & may vary
//           from actual product. While every care is taken to avoid inaccuracies
//           in content, these are provided as is, without warranty of any kind.
//         </Text>
//       </Center>
//       <Center
//         mb="2"
//         borderBottom="1px"
//         borderBottomColor="whiteAlpha.400"
//         p="1"
//       >
//         <Text fontSize="14px" w="90%" m="auto" textAlign="center"></Text>
//       </Center>
//       <Center>
//         <Text fontSize="14px" p="1">
//           {" "}
//           © 2022 Reliance Digital. All Rights Reserved.
//         </Text>
//       </Center>
//     </Box>
//   );
// };
