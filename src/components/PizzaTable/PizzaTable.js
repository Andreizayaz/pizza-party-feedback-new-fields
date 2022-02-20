import React, {useContext} from 'react';
import { Container } from '../Container';
import { Table, Caption, Thead, Tbody, TableRow, Th, Td } from '../Table';
import { ActionButton } from '../Buttons';
import { MainPizzaAppContext } from '../../context';
import { getClasses } from '../../helpers';

export function PizzaTable() {
  const { partyGuests, setIsLoaded, setIsVisibleLoadingText } = useContext(MainPizzaAppContext);
  
  return (
    <Container classes={["main__pizza"]}>
      <Container classes={["container"]}>
        <Container classes={["container__table"]}>
          <Table classes={["pizza__table", "table"]}>
            <Caption classes={["table__caption"]} text='Pizza Party Feedback' />
            <Thead classes={["table__header"]}>
              <TableRow>
                {['Num', 'Name'].map(item=><Th text={item}/>)}
              </TableRow>
            </Thead>
            <Tbody classes={["table__body"]}>
              {partyGuests.map((item, index) =>
                <TableRow classes={getClasses(item)}>
                  <Td text={index + 1}/>
                  <Td text={item.name} />
              </TableRow>)}
            </Tbody>
          </Table>
          <ActionButton/>
        </Container>
      </Container>
    </Container>
  )
}
