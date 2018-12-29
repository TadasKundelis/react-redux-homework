import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../../src/components/Card';

describe('<Card />', () => {
  const mockOnAddHeart = jest.fn();
  const mockOnRemoveHeart = jest.fn();
  const movie = {
    backdrop_path: '',
    original_title: 'movie title',
    overview: '',
    release_date: '2018 01 01',
    vote_average: 8,
    vote_count: 80,
  };
  const data = {
    isHearted: false,
    onAddHeart: mockOnAddHeart,
    onRemoveHeart: mockOnRemoveHeart,
    movie,
  };

  const wrapper = mount(<Card {...data} />);
  const instance = wrapper.instance();
  const spy = jest.spyOn(instance, 'toggleSummary');

  it('should display original title', () => {
    expect(wrapper.find('.card__title').text()).toBe(movie.original_title);
  });
  it('should have fa-heart-o css class if isHearted prop is set to false', () => {
    expect(wrapper.find('.fa-heart-o').length).toBe(1);
  });
  it('should display release date', () => {
    expect(wrapper.find('.card__subtitle span').at(0).text()).toBe(movie.release_date);
  });
  it('should display vote_average and vote_count', () => {
    expect(wrapper.find('.card__subtitle span').at(1).text()).toBe(`${movie.vote_average} (${movie.vote_count} votes)`);
  });
  it('should call onAddHeart function', () => {
    wrapper.find('.card__like').simulate('click');
    expect(mockOnAddHeart.mock.calls.length).toBe(1);
  });

  it('should call onRemoveHeart function', () => {
    wrapper.setProps({ isHearted: true });
    wrapper.find('.card__like').simulate('click');
    expect(mockOnRemoveHeart.mock.calls.length).toBe(1);
  });
  it('should call toggleSummary function', () => {
    wrapper.instance().forceUpdate();
    wrapper.find('.card-info__header').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  it('should set state to open when ".card-info__header" is clicked', () => {
    wrapper.setState({ open: false }, () => {
      wrapper.find('.card-info__header').simulate('click');
      expect(wrapper.state('opened')).toEqual(true);
    });
  });
  it('should display overview if state.opened is set to true', () => {
    expect(wrapper.find('.card-info__description').text()).toEqual(movie.overview);
  });
});
