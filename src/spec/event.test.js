import {
  allAddresses,
} from '../redux/address/address';
import MockLocalStorage from './mockFn/localStorage';

describe('Unit tests for \'src/redux/address/address\'', () => {
  jest.mock('../redux/address/address');
  let expectedOutputAction;
  const dispatchMock = (input) => {
    expectedOutputAction = input;
  };
  // eslint-disable-next-line no-unused-vars
  global.localStorage = new MockLocalStorage();
  const mockToken = '<TOKEN>';

  // Mock address data
  const addressesData = [{
    street: 'Street',
    external_number: '123',
    internal_number: '456',
    postal_code: '12345',
    colony: 'Colony',
    municipality: 'Municipality',
    city: 'City',
    state: 'State',
    country: 'Country',
  }];

  // Action Types
  const ALL_ADDRESSES = 'ALL_ADDRESSES';

  describe('action creators', () => {
    it('responds correctly to a call for \'allAddresses\' thunk', async () => {
      fetch.mockResponseOnce(JSON.stringify(addressesData));
      localStorage.token = JSON.stringify(mockToken);
      await allAddresses()(dispatchMock);
      expect(expectedOutputAction.type).toEqual(ALL_ADDRESSES);
      expect(expectedOutputAction.payload).toEqual(addressesData);
    });
  });
});
