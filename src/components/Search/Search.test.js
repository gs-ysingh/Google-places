import React from 'react';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import { Search } from './Search.jsx';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Search />', () => {
  it(' should render', () => {
    const wrapper = shallow(
        <Search />
    );
    expect(wrapper).toHaveLength(1);
  });
})