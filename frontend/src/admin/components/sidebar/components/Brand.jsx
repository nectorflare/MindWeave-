// import React from 'react';

// // Chakra imports
// import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

// // Custom components
// import { HSeparator } from 'components/separator/Separator';

// export function SidebarBrand() {
//   //   Chakra color mode
//   let logoColor = useColorModeValue('navy.700', 'white');

//   return (
//     <Flex align="center" direction="column">
//       <Text
//         h="26px"
//         my="32px"
//         color={logoColor}
//         fontSize="xl"
//         fontWeight="bold"
//         textAlign="center"
//         lineHeight="1.2"
//       >
//         MINDWEAVE FOUNDATION
//       </Text>
//       <HSeparator mb="20px" />
//     </Flex>
//   );
// }

// export default SidebarBrand;
import React from 'react';

// Chakra imports
import { Flex, Image, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HSeparator } from 'components/separator/Separator';

// Logo import
import logo from 'assets/img/logo.jpeg';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex align="center" direction="column">
      <Image
        src={logo}
        alt="Mindweave Foundation Logo"
        h="120px"
        my="8px"
        objectFit="contain"
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
