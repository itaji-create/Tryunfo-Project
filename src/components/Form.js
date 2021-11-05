import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="cardName">
          <input type="text" name="cardName" id="cardName" data-testid="name-input" />
        </label>
        <label htmlFor="descrition">
          <textarea data-testid="description-input" id="descrition" />
        </label>
        <label htmlFor="attribute1">
          <input type="number" data-testid="attr1-input" id="attribute1" />
        </label>
        <label htmlFor="attribute2">
          <input type="number" data-testid="attr2-input" id="attribute2" />
        </label>
        <label htmlFor="attribute3">
          <input type="number" data-testid="attr3-input" id="attribute3" />
        </label>
        <label htmlFor="img">
          <input id="img" data-testid="image-input" />
        </label>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="ST">
          Super Trunfo
          <input type="checkbox" id="ST" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
