import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
//package
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { baseStyle, colors, sizes } from '../../constant/theme';

class AlertComponent {
  constructor(message, type = 'alert', header = '', onOkPress) {
    this.message = message;
    this.type = type;
    this.onOkPress = onOkPress;
    this.header = header ? header : this.getHeader();
  }

  getHeader = () => {
    let {type} = this;
    switch (type) {
      case 'alert':
        return 'Alert';
      case 'info':
        return 'Information';
      case 'warning':
        return 'Warning';
      case 'success':
        return 'Success';
    }
  };

  createHeader = () => {
    let {header} = this;
    if (!header) {
      return null;
    }
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{header}</Text>
      </View>
    );
  };

  createBody = () => {
    let {message} = this;
    return (
      <View style={styles.body}>
        <Text style={styles.bodyText}>{message}</Text>
      </View>
    );
  };

  createFooter = () => {
    return (
      <Button
        title={'OK'}
        type={'clear'}
        TouchableComponent={TouchableOpacity}
        activeOpacity={0.5}
        buttonStyle={styles.footerButton}
        titleStyle={styles.footerButtonText}
        onPress={this.onOkPress}
      />
    );
  };

  getComponent = () => {
    return (
      <View>
        <View style={styles.container}>
          {this.createBody()}
          {this.createFooter()}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    minWidth: '75%',
    maxWidth: '85%',
    borderRadius: 10,
    backgroundColor: 'white_FF',
    shadowColor: 'grey_DD',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 5,
    elevation: 2,
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 0,
  },
  headerText: {
    fontWeight: '500',
    textAlign: 'center',
  },
  body: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  bodyText: {
    textAlign: 'center',
    // color: "red",
    ...baseStyle.txtStyleOutInterRegular(sizes.size2, colors.black_00),
  },
  footerButton: {
    padding: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#ddd',
    overflow: 'hidden',
  },
  footerButtonText: {
    textAlign: 'center',
    fontWeight: '500',
  },
});

AlertComponent.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  header: PropTypes.string,
  onOkPress: PropTypes.func,
};

export default AlertComponent;
