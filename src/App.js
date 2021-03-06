import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
      deck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.dataValidation = this.dataValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.hasTrunfo = this.hasTrunfo.bind(this);
  }

  onSaveButtonClick() {
    this.setState((prevState) => ({ deck: [...prevState.deck, this.deckSave()] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  onInputChange({ target }) {
    const { id } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [id]: value }, () => { this.dataValidation(); });
  }

  deckSave = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    return {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
  }

  hasTrunfo() {
    const { deck } = this.state;
    const result = deck.some((e) => e.cardTrunfo === true);
    return result;
  }

  dataValidation() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const sum = parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3);
    const maxAttr = 90;
    const maxSum = 210;
    if (!cardName || !cardDescription || !cardImage
      || !cardAttr1 || !cardAttr2 || !cardAttr3
      || cardAttr1 < 0 || cardAttr1 > maxAttr || cardAttr2 < 0
      || cardAttr2 > maxAttr || cardAttr3 < 0 || cardAttr3 > maxAttr
      || sum > maxSum) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  }

  // deleteCard foi feito com base nos codigos do site
  // https://cursos.alura.com.br/forum/topico-remover-elemento-do-array-que-esta-no-state-64599
  deleteCard({ target }) {
    const { deck } = this.state;
    const magicNumber = -1;
    const name = target.parentNode.firstChild.innerText;
    let i = deck.findIndex((card) => card.cardName === name);
    if (i === magicNumber) i = 0;
    deck.splice(i, 1);
    this.setState({ deck });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      deck,
    } = this.state;
    return (
      <>
        <div className="main">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.hasTrunfo() }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            deleteButton={ false }
          />
        </div>
        <div className="pageDeck">
          {deck.map((card) => (<Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            deleteCard={ this.deleteCard }
            deleteButton={ card }
          />))}
        </div>
      </>
    );
  }
}

export default App;
