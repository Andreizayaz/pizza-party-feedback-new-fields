import React, {useContext} from 'react';
import { Container } from '../Container';
import { Table, Caption, Thead, Tbody, TableRow, Th, Td } from '../Table';
import { Button } from '../Buttons';
import { MainPizzaAppContext } from '../../context';
import { getClasses } from '../../helpers';

export function PizzaTable() {
  const { partyGuests, setIsVisibleTable, setIsVisibleCard, setCardContent } = useContext(MainPizzaAppContext);

  const clearData = async () => {
    localStorage.removeItem('partyGuests');
    setIsVisibleTable(false);
    window.location.reload();
  }

  const showCard = (name) => {
    const cardContent = partyGuests.find(item => item.name === name);
    setCardContent(cardContent);
    setIsVisibleCard(true);
    setIsVisibleTable(false);
  }
  
  return (
    <Container classes={["main__pizza"]}>
      <Container classes={["container"]}>
        <Container classes={["container__table"]}>
          <Table classes={["pizza__table", "table"]}>
            <Caption classes={["table__caption"]} text='Pizza Party Feedback' />
            <Thead classes={["table__header"]}>
              <TableRow>
                {['Num', 'Name'].map(item=><Th key={item} text={item}/>)}
              </TableRow>
            </Thead>
            <Tbody classes={["table__body"]}>
              {partyGuests.map((item, index) =>
                <TableRow key={item.name} classes={getClasses(item)}
                  callback={ item.eatsPizza?()=>showCard(item.name):null}>
                  <Td text={index + 1}/>
                  <Td text={item.name} />
              </TableRow>)}
            </Tbody>
          </Table>
          <Container classes={["flex-block"]}>
            <Button classes={["action-btn", "action-btn_clear"]} text='Clear app' callback={clearData}/>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
