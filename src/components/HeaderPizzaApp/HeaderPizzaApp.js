import React from 'react';
import {Header} from '../Header';
import {Container} from '../Container';
import { H1, H2 } from '../Headings';
import { Img } from '../Img';

export function HeaderPizzaApp() {
  return (
    <Header classes={["header"]}>
      <Container classes = {["header__container", "container"]}>
        <H1 classes={["header__hidden"]} text='Did You Like Pizza Party?' />
        <H2 classes={["header__heading"]} text='Did You Like Pizza Party'/>
        <Container classes={["header__image", "image"]}>
          <Img imgSource="assets/img/pizza.png" altText="pizza"/>
        </Container>
      </Container>
    </Header>
  )
}
