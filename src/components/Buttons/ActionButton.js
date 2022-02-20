import React, {useContext} from 'react';
import { Container } from '../Container';
import { Button } from '.';
import { MainPizzaAppContext } from '../../context';

export function ActionButton() {
  const { setIsLoaded, setIsVisibleLoadingText } = useContext(MainPizzaAppContext);

  const clickHandler = () => {
    localStorage.removeItem('partyGuests');
    setIsLoaded(false);
    setIsVisibleLoadingText(true);
    window.location.reload();
  }

  return (
    <Container classes={["flex-block"]}>
      <Button classes={["action-btn", "action-btn_clear"]} text='Clear app' callback={clickHandler}/>
    </Container>
  )
}
