import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Card extends React.Component {
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
      deleteCard,
      deleteButton,
    } = this.props;
    return (
      <div className="card">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">
          Attr01...............................
          { cardAttr1 }
        </p>
        <p data-testid="attr2-card">
          Attr02...............................
          { cardAttr2 }
        </p>
        <p data-testid="attr3-card">
          Attr03...............................
          { cardAttr3 }
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo && <h4 data-testid="trunfo-card">Super Trunfo</h4> }
        {deleteButton && (
          <button
            type="button"
            onClick={ deleteCard }
            className="deleteButton"
            data-testid="delete-button"
          >
            Excluir
          </button>)}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteCard: PropTypes.func.isRequired,
  deleteButton: PropTypes.bool.isRequired,
};
export default Card;
