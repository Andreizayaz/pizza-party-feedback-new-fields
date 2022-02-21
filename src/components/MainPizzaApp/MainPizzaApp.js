import React, { useState, useEffect } from 'react';
import { getRemoteData, getPartyData } from '../../helpers';
import { Main } from '../Main';
import { Section } from '../Section';
import { Container } from '../Container';
import { RequestBlock } from '../RequestBlock';
import { PizzaTable } from '../PizzaTable';
import { Card } from '../Cards';
import { MainPizzaAppContext } from '../../context';
import { URL_GUESTS_PARTY, URL_GUESTS_DIETS } from '../../data';

export function MainPizzaApp() {
  const [isVisibleLoadingText, setIsVisibleLoadingText] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [partyGuests, setPartyGuests] = useState([]);
  const [isVisibleTable, setIsVisibleTable] = useState(false);
  const [isVisibleCard, setIsVisibleCard] = useState(false);
  // const [countStars] = useState(5);
  const [cardContent, setCardContent] = useState({});

  const getData = async (urlGuests, urlDiets, asyncCallback) => {
    let data = JSON.parse(localStorage.getItem('partyGuests'));
    if (data) {
      setPartyGuests(data);
      return;
    }

    await getPartyData(urlGuests, urlDiets, asyncCallback);
    data = JSON.parse(localStorage.getItem('partyGuests'));
    setPartyGuests(data);
  }

  useEffect(() => {
    if (isLoaded) return;
    
    getData(URL_GUESTS_PARTY, URL_GUESTS_DIETS, getRemoteData);
    setIsLoaded(true);
    setIsVisibleLoadingText(false);
    setIsVisibleTable(true);
  });

  return (
    <Main classes={["main"]}>
      <Section classes={["main__order-pizza"]}>
        <Container classes={["container"]}>
          {isVisibleLoadingText && <RequestBlock />}
          <MainPizzaAppContext.Provider value={{ partyGuests, setIsLoaded, setIsVisibleLoadingText, setPartyGuests, setIsVisibleTable, setIsVisibleCard, setCardContent}}>
            { isLoaded && isVisibleTable && <PizzaTable/>}
          </MainPizzaAppContext.Provider>
          <MainPizzaAppContext.Provider value={{ partyGuests, setIsLoaded, cardContent, setIsVisibleTable, setIsVisibleCard }}>
            {isVisibleCard&&<Card/>}
          </MainPizzaAppContext.Provider>
        </Container>
      </Section>
    </Main>
  )
}
