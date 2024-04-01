import { Container, Flex } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Column from '../components/Column';
import { ColumnType } from '../domain';

const Dashboard = () => {
  return (
    <Container maxWidth="container.xl" px={0} py={8}>
      <DndProvider backend={HTML5Backend}>
        <Flex
          direction="row"
          justifyContent={{ base: 'start', lg: 'center' }}
          overflowX="auto"
          gap={8}
          px={{ base: 4, lg: 0 }}
        >
          <Column column={ColumnType.TO_DO} />
          <Column column={ColumnType.IN_PROGRESS} />
          <Column column={ColumnType.BLOCKED} />
          <Column column={ColumnType.COMPLETED} />
        </Flex>
      </DndProvider>
    </Container>
  );
};

export default Dashboard;
