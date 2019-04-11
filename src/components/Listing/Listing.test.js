import React from 'react';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import { Listing } from './Listing';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Listing />', () => {
  it(' should render', () => {
    const wrapper = shallow(
        <Listing />
    );
    expect(wrapper).toHaveLength(1);
  });
})