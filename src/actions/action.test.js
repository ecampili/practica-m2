
import { addCart, removeCart } from './index.js';

describe('Action Creators', () => {
  it('Debería retornar una action con las propiedades type "ADD_CART" y payload: Este contiene un id que se extrae de la api', () => {
    const payload = { id: 1 };
    expect(addCart(payload)).type.toEqual("ADD_CART");
  });
  it('Debería retornar una action con las propiedades type "REMOVE_CART" y payload, su valor lo recibe por argumento:', () => {
    expect(removeTodo(2)).toEqual({
      type: 'REMOVE_CART',
      payload: 2
    })
  })
});
