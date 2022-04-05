import React, {useContext} from 'react';
import { Container } from '../Container';
import { H3 } from '../Headings';
import { Text } from '../Text';
import { StarRating } from './StarRating';
import { Button } from '../Buttons';
import { MainPizzaAppContext } from '../../context';

export function CardRead({ cardContent }) {
  // const { name, comments: { phone, comment } } = cardContent;
  const { name, comments } = cardContent;
  const { partyGuests, setIsLoaded, setIsVisibleTable, setIsVisibleCard } = useContext(MainPizzaAppContext);

  const deleteUser = () => {
    const dataIndex = partyGuests.indexOf(cardContent);
    partyGuests.splice(dataIndex, 1, { ...cardContent, comments: {} });
    localStorage.setItem('partyGuests', JSON.stringify(partyGuests));
    setIsVisibleCard(false);
    setIsVisibleTable(true);
    setIsLoaded(false);
  }

  return (
    <Container classes={["card"]}>
      <Container classes={["empty-form", "empty-form__relative"]}>
        <Button classes={["btn-delete"]} text='delete' callback={deleteUser}/>
        <Container classes={["name-field"]}>
          <H3 classes={["name-field__title"]} text='name'/>
          <Text classes={["name-field__name"]} text={name}/>
        </Container>
        <StarRating classes={["stars"]} />
        {
          Object.entries(comments).filter(item => !item.includes('rating')).map(item =>
            <Container classes={["empty-form__row"]}>
              <label className="label">{item[0]}</label>
              <Text classes={["text"]} text={item[1]}/>
            </Container>
            )
        }
      </Container>
    </Container>
  )
}
