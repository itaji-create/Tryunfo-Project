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
      // hasTrunfo,
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
            className="formItem"
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
            className="formItem"
            value={ cardDescription }
            onChange={ onInputChange }
            id="cardDescription"
          />
        </label>
        <br />
        <label htmlFor="cardAttr1">
          Attr01
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="formItem"
            data-testid="attr1-input"
            id="cardAttr1"
          />
        </label>
        <br />
        <label htmlFor="cardAttr2">
          Attr02
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            className="formItem"
            data-testid="attr2-input"
            id="cardAttr2"
          />
        </label>
        <br />
        <label htmlFor="cardAttr3">
          Attr03
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            className="formItem"
            data-testid="attr3-input"
            id="cardAttr3"
          />
        </label>
        <br />
        <label htmlFor="cardImage">
          Imagem
          <input
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            className="formItem"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="cardRare">
          Raridade
          <br />
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            className="formItem"
            id="cardRare"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            className="formItem"
            id="cardTrunfo"
            data-testid="trunfo-input"
          />
        </label>
        <br />
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="formItem"
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
