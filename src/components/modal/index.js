import React, { Component } from 'react';
import {
  BackHandler,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AlertComponent from './alert';
import ModalComponent from './modal';
import OptionsModal from './optionsModal';

//package
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

let $this;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.modals = [];
    
    // Bind the method to the current instance
    this.onBackPress = this.onBackPress.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress() {
    if (this.modals.length) {
      let topModal = this.modals[this.modals.length - 1];
      if (topModal) {
        if (topModal.onBackClose()) {
          Modal.hide(topModal);
        }
        return true;
      }
    }
    return false;
  }

  static hideModal() {
    if (this.modals.length) {
      let topModal = this.modals[this.modals.length - 1];
      if (topModal) {
        if (topModal.onBackClose()) {
          Modal.hide(topModal);
        }
        return true;
      }
    }
    return false;
  }

  static show(component, onBackClose = true, nestedModalsAllowed) {
    class ModalComponent {
      onBackClose = () => {
        return onBackClose;
      };

      nestedModalsAllowed = () => {
        return nestedModalsAllowed;
      };

      getComponent = () => {
        return (
          <View style={styles.wrapper}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.backTouch}
              onPress={() => {
                if (onBackClose) {
                  this.modals.pop();
                  this.forceUpdate();
                }
              }}
            />
            {component.getComponent()}
          </View>
        );
      };
    }

    let comp = new ModalComponent();

    Keyboard.dismiss();
    this.modals.push(comp);
    this.forceUpdate();

    return comp;
  }

  static hide(comp) {
    if (comp) {
      let index = this.modals.indexOf(comp);
      if (index > -1) {
        this.modals.splice(index, 1);
        this.forceUpdate();
      }
    } else {
      this.modals.pop();
      this.forceUpdate();
    }
  }

  static hideAll() {
    this.modals = [];
    this.forceUpdate();
  }

  render() {
    if (!this.modals.length) {
      if (this.props.onLayout) {
        this.props.onLayout();
      }
      return null;
    }

    return (
      <SafeAreaView style={styles.wrapper} onLayout={this.props.onLayout}>
        <View style={styles.modalContainer}>
          {this.modals.map((modal, index) => {
            if (modal.nestedModalsAllowed()) {
              return <React.Fragment key={index}>{modal.getComponent()}</React.Fragment>;
            }
          })}
          {this.modals[this.modals.length - 1]?.getComponent()}
        </View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backTouch: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  wrapper: {
    paddingVertical: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    marginBottom: 15,
    borderRadius: 20,
    paddingVertical: 10,
  },
  secondaryButton: {
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 0.5,
    paddingVertical: 10,
  },
  linkButton: {
    marginBottom: 15,
    paddingVertical: 10,
  },
});
Modal.propTypes = {
  onLayout: PropTypes.func,
};
export default Modal;
