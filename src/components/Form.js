import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <h1>Adicionar card</h1>
        <label htmlFor="cardName">
          Nome
          <br />
          <input
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            id="cardName"
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="cardDescription">
          Descrição
          <br />
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            id="cardDescription"
          />
        </label>
        <br />
        <label htmlFor="attribute1">
          Attr01
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            id="attribute1"
          />
        </label>
        <br />
        <label htmlFor="attribute2">
          Attr02
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            id="attribute2"
          />
        </label>
        <br />
        <label htmlFor="attribute3">
          Attr03
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            id="attribute3"
          />
        </label>
        <br />
        <label htmlFor="img">
          Imagem
          <input
            id="img"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="rare">
          Raridade
          <br />
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="ST">
          Super Trunfo
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="ST"
            data-testid="trunfo-input"
          />
        </label>
        <br />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
