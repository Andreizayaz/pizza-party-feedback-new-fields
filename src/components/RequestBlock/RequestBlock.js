import React, {useContext} from 'react';
import { Container } from '../Container';
import { Text } from '../Text';
import { MainPizzaAppContext } from '../../context';

export function RequestBlock() {
  const { countDots } = useContext(MainPizzaAppContext);

  return (
    <Container classes={["pizza-section__top", "request-block"]}>
      <Container classes={["request-block__wait-info"]}>
        <Text classes={["request-block__text", "text"]} text='Loading' />
        <Container classes={["dots-list"]}>
          {new Array(countDots).fill(1).map((item, index) => 
            <Container key={item += index} classes={["dots-list__dot"]}/>
          )}
        </Container>
      </Container>
    </Container>
  )
}
