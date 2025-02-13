import PropTypes from 'prop-types';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

class ModalComponent {
  constructor(header, body, ...buttons) {
    this.header = header;
    this.body = body;
    this.buttons = buttons;
  }

  createHeader = () => {
    let { header } = this;

    if (!header) {
      return null;
    }
    return React.isValidElement(header) ? (
      header
    ) : (
      <View style={styles.header}>
        {header.text ? (
          <Text style={[styles.headerText, header.style]}>{header.text}</Text>
        ) : null}
      </View>
    );
  };

  createBody = () => {
    let { body } = this;

    return React.isValidElement(body) ? (
      body
    ) : (
      <ScrollView style={styles.body}>
        <Text style={[styles.bodyText, body.style]}>{body.text}</Text>
      </ScrollView>
    );
  };

  createFooter = () => {
    let { buttons } = this;

    if (!buttons) {
      return null;
    }

    return (
      <View style={{ paddingHorizontal: 10 }}>
        {buttons.map((button) => {
          return button.map((buttonComponent) => {
            if (buttonComponent) {
              return buttonComponent.getComponent();
            }
          });
        })}
      </View>
    );
  };

  getComponent = () => {
    return (
      <View style={styles.container}>
        {this.createHeader()}
        {this.createBody()}
        {this.createFooter()}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    minWidth: "75%",
    maxWidth: "85%",
    borderRadius: 10,
    backgroundColor: "white_FF",
    shadowColor: "grey_DD",
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
    fontWeight: "500",
    textAlign: "center",
  },
  body: {
    flexGrow: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 20,
  },
  bodyText: {
    padding: 10,
    paddingTop: 0,
    textAlign: "center",
  },
  headerLogo: {
    marginTop: 20,
    height: 45,
    width: 45,
    alignSelf: "center",
    marginBottom: 15,
  },
});

ModalComponent.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.object,
    }),
    PropTypes.element,
  ]),
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.object,
    }),
    PropTypes.element,
  ]),
  buttons: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        getComponent: PropTypes.func,
      })
    )
  ),
};

export default ModalComponent;
