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
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.dataValidation = this.dataValidation.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
    });
  }

  onInputChange({ target }) {
    const { id } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [id]: value }, () => { this.dataValidation(); });
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
    } = this.state;
    return (
      <div id="main">
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
        />
      </div>
    );
  }
}

export default App;
