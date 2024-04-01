import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Stack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import AddTaskBtn from '../AddTaskBtn';

import Logo from './Logo';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLightMode = colorMode === 'light';

  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Logo isLightMode={isLightMode} />
        </Box>

        <Flex alignItems="center">
          <Stack direction="row" spacing={5}>
            <AddTaskBtn />

            <Button onClick={toggleColorMode}>{isLightMode ? <MoonIcon /> : <SunIcon />}</Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
