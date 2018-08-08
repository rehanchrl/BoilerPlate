import React from 'react';
import { shallow } from 'enzyme';

import NewMessageForm from '../../app/sampleTesting/NewMessageForm';

describe('NewMessageForm', () => {
  function testID(id) {
    return cmp => cmp.props().testID === id;
  }

  describe('clicking save', () => {
    const messageText = 'Hello world';

    let saveHandler;
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<NewMessageForm />);
      saveHandler = jest.fn().mockName('saveHandler');
      wrapper = shallow(<NewMessageForm onSave={saveHandler} />);

      wrapper.findWhere(testID('messageText'))
        .simulate('changeText', messageText);
      wrapper.findWhere(testID('saveButton'))
        .simulate('press');
    });

    it('clears the message field', () => {
      expect(wrapper.findWhere(testID('messageText')).props().value)
        .toEqual('');
    });

    it('calls the save handler', () => {
      expect(saveHandler).toHaveBeenCalledWith(messageText);
    });
  });
});