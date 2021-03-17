import reducer from './index';
import { addTodo, removeTodo, toInProgress, toDone } from '../actions';

describe('reducer', () => {
  it('Deberia retornar el estado inicial', () => {
    expect(reducer(undefined, [])).toEqual([])
  })

  it('deberia agregar un producto al carrito cuando action type es "ADD_CART"', () => {
    const payload = {
      id: 1,
    }
    // fijarse bien en que solo toma el id.
    expect(reducer([], addCart(payload))).toHaveLength(1)
  })

  it('deberia agregar otro TODO sin mutar el state previo', () => {
    const payload = {
      id: 2,
    }
    const someState = [{
      id: 1,
      name: 'some product'
    }]
    expect(reducer(someState, addCart(payload))).toHaveLength(2)
  })

  it('deberia sacar un producto del carrito cuando action type es "RemoveCart"', () => {
    const payload = 1;
    const someState = [{
      id: 1,
      name: 'some product'
    }]
    expect(reducer(someState, removeCart(payload))).toHaveLength(0)
  })
});
