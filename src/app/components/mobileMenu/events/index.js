/*import runMobileMenuAction from "./actions";

class MobileMenuController {
  subscribers = [];
  state = { isActive: false };
  addEventListener = (name, subscriber) => {
    this.subscribers.push({
      name,
      func: subscriber,
    });
  };
  removeEventListener = (name, subscriber) => {
    const subscriberIndex = this.subscribers.findIndex(
      (item) => item.name === name && item.func === subscriber
    );
    this.subscribers.splice(subscriberIndex, 1);
  };
  removeAllListeners = (name, subscriber) => {
    this.subscribers = [];
  };
  emit = (name, payload) => {
    const response = runMobileMenuAction(name, this.subscribers, payload);
    this.subscribers.forEach((item) => {
      if (item.name == name) {
        item.func(response);
      }
    });
  };
}
const _mobileMenuController = new MobileMenuController();
export default _mobileMenuController;*/

import runMobileMenuAction from "./actions";

class MobileMenuController {
  subscribers = [];

  state = {
    isActive: false,
  };

  addEventListener = (name, subscriber) => {
    this.subscribers.push({
      name: name,
      func: subscriber,
    });
  };

  removeEventListener = (name, subscriber) => {
    const subscriberIndex = this.subscribers.findIndex(
      (item) => item.name === name && item.func === subscriber
    );
    this.subscribers.splice(subscriberIndex, 1);
  };

  removeAllListeners = () => {
    this.subscribers = [];
  };

  emit = (name, payload) => {
    const response = runMobileMenuAction(name, this.state, payload);

    this.subscribers.forEach((item) => {
      if (item.name === name) {
        item.func(response);
      }
    });
  };
}

const _mobileMenuController = new MobileMenuController();
export default _mobileMenuController;
