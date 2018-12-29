import React from 'react';
import { shallow, mount } from 'enzyme';
import { Genres } from '../../src/components/Genres';

describe('<Genres />', () => {
  const mockSetSelectedGenre = jest.fn();
  const mockFetchGenres = jest.fn();
  const genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
  ];
  const data = {
    genres,
    setSelectedGenre: mockSetSelectedGenre,
    fetchGenres: mockFetchGenres,
  };

  const wrapper = mount(<Genres {...data} />);
  const { id, name } = genres[2];
  it('should create number of divs equal to genres array length', () => {
    expect(wrapper.find('.genre')).toHaveLength(genres.length);
  });
  it('should display genre name', () => {
    expect(wrapper.find('.genre').at(2).text()).toEqual(name);
  });
  it('should call setSelectedGenre function with correct data', () => {
    wrapper.find('.genre').at(2).simulate('click');
    expect(mockSetSelectedGenre).toHaveBeenCalledWith(id, name);
  });
  it('should call fetchGenres function on mount', () => {
    expect(mockFetchGenres).toHaveBeenCalled();
  });
});
