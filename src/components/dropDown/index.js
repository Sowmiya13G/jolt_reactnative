import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// packages
import PropTypes from "prop-types";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

// styles
import styles from "./styles";

//components
import Spacer from "../spacer";
// constant
import { iconPathURL } from "../../constant/iconpath";
import { baseStyle, colors, sizes } from "../../constant/theme";

//timeout for typing
var typingTimeout = null;

const DropDown = (props) => {
  //props
  const {
    title,
    placeholder,
    dropdownIcon = iconPathURL.dropdown,
    value = null,
    onTypingEnd,
    dropdownData,
    toDisableOtherScroll,
    enabelLocalSearch = false,
    onSelectItem,
    editable = true,
    noDataText = "No data found!",
    customLabelStyle,
    multiSelect,
    customDropdownContainerStyle,
    errText,
    showErrText,
    onDropdownOpen,
    noData,
    customStyle,
    customeTitleStyle,
    viewType,
    isReq = false,
    isEdit = true,
    isIcon = true,
    edit = true,
  } = props;

  //local state
  const [showDropdown, setShowDropdown] = useState(false);
  const [text, setText] = useState(value?.label || "");
  const [searchedDropdownData, setSearchedDropdownData] =
    useState(dropdownData);
  //useeffect
  useEffect(() => {
    return () => {
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, []);

  // to disable other scrolls on screen use this props
  useEffect(() => {
    Boolean(toDisableOtherScroll) && toDisableOtherScroll(showDropdown);
  }, [showDropdown]);

  //refresh dropdown data
  useEffect(() => {
    setSearchedDropdownData(dropdownData);
  }, [dropdownData]);

  // refresh value data
  useEffect(() => {
    setText(value?.label || "");
  }, [value]);

  // handle user typing
  const handleTypingEnd = (value) => {
    Boolean(onTypingEnd) && onTypingEnd(value);
  };

  // search loacl data while search
  const searchfilter = (text) => {
    var data = [];
    if (text) {
      const newData = dropdownData?.filter((item) => {
        const itemdata = item?.label
          ? item?.label?.toUpperCase()
          : "".toUpperCase();
        const textdata = text?.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });
      setSearchedDropdownData(newData);
      data = newData;
    } else {
      setSearchedDropdownData(dropdownData);
      data = dropdownData;
    }

    if (data.length <= 0) {
      Boolean(noData) && noData(1);
    } else {
      Boolean(noData) && noData(0);
    }
  };

  return (
    <>
      <View
        style={[
          viewType ? styles.fields : styles.container,
          viewType && Boolean(errText) && styles.errorField,
          { ...customStyle },
        ]}
      >
        {viewType && <Spacer height={hp("0.8%")} />}
        {Boolean(title) && (
          <>
            <Text
              style={[
                viewType
                  ? baseStyle.txtStyleOutInterBold(sizes.size2, colors.black)
                  : baseStyle.txtStyleOutInterMedium(
                      sizes.size2,
                      colors.otpColor
                    ),
                viewType && styles.label,
                { ...customLabelStyle },
              ]}
            >
              {title}
              {isReq && <Text style={styles.blackColor}>*</Text>}
            </Text>
            <Spacer height={hp("0.5%")} />
          </>
        )}
        <TouchableOpacity
          onPress={() => {
            if (!edit) return;

            if (isEdit) {
              setShowDropdown(!showDropdown);
              !showDropdown && Boolean(onDropdownOpen) && onDropdownOpen();
            }
          }}
          disabled={editable}
          style={[
            styles.titleContainer,
            { ...(showDropdown && styles.oBottonBorderRadius) },
            { ...(Boolean(errText) && { borderColor: colors.red }) },
            { ...customeTitleStyle },
          ]}
        >
          <TextInput
            value={
              multiSelect
                ? Boolean(value) && value?.length > 0
                  ? value?.map((x) => x.label)?.join()
                  : ""
                : text.length > 25
                ? text.slice(0, 35) + "…"
                : text
            }
            onChangeText={(value) => {
              if (typingTimeout) clearTimeout(typingTimeout);
              setText(value);
              enabelLocalSearch && searchfilter(value);
              typingTimeout = setTimeout(() => handleTypingEnd(value), 1000);
            }}
            placeholder={placeholder}
            placeholderTextColor={colors.placeHolderTextColor}
            style={styles.placeholder}
            onFocus={() => setShowDropdown(true)}
            editable={editable}
          />
          <TouchableOpacity
            disabled={!editable}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            {isIcon && (
              <Image
                source={dropdownIcon}
                style={[
                  styles.dropdownIcon,
                  { ...(showDropdown && styles.rotate90Deg) },
                ]}
              />
            )}
          </TouchableOpacity>
        </TouchableOpacity>
        {showDropdown && (
          <View
            style={[
              styles.dropdownContainer,
              {
                height: searchedDropdownData.length < 3 ? hp("8%") : hp("14%"),
              },
              customDropdownContainerStyle,
            ]}
          >
            <ScrollView nestedScrollEnabled={true}>
              {searchedDropdownData.length > 0 ? (
                searchedDropdownData.map((item, index) => {
                  const isItemSelected = multiSelect
                    ? value?.findIndex((x) => x.value == item.value) != -1
                    : value?.value == item?.value;
                  return (
                    <View key={`${index}${placeholder}`}>
                      {index != 0 && <Spacer height={hp("1%")} />}
                      <TouchableOpacity
                        onPress={() => {
                          !multiSelect && setShowDropdown(false);
                          setSearchedDropdownData(dropdownData);
                          setText(item?.label);
                          Boolean(onSelectItem) && onSelectItem(item);
                        }}
                        style={styles.dropdownTextContainer}
                      >
                        <Text style={styles.placeholder}>{item?.label}</Text>
                        {isItemSelected && (
                          <Image
                            source={iconPathURL.tick}
                            style={styles.selectedIcon}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  );
                })
              ) : (
                <Text style={styles.nodataText}>{noDataText}</Text>
              )}
            </ScrollView>
          </View>
        )}
      </View>
      {showErrText && Boolean(errText) && (
        <Text
          style={[
            viewType
              ? baseStyle.txtStyleOutInterMedium(sizes.size1, colors.red)
              : baseStyle.txtStyleOutInterRegular(sizes.size1, colors.red),
            viewType && styles.label,
          ]}
        >
          {viewType && "*"} {errText}
        </Text>
      )}
    </>
  );
};

DropDown.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  dropdownIcon: PropTypes.number,
  value: PropTypes.object,
  onTypingEnd: PropTypes.func,
  dropdownData: PropTypes.array.isRequired,
  toDisableOtherScroll: PropTypes.func,
  enabelLocalSearch: PropTypes.bool,
  onSelectItem: PropTypes.func,
  editable: PropTypes.bool,
  noDataText: PropTypes.string,
  customLabelStyle: PropTypes.object,
  multiSelect: PropTypes.bool,
  customDropdownContainerStyle: PropTypes.object,
  errText: PropTypes.string,
  showErrText: PropTypes.bool,
  onDropdownOpen: PropTypes.func,
  noData: PropTypes.func,
  customStyle: PropTypes.object,
  customeTitleStyle: PropTypes.object,
  viewType: PropTypes.bool,
  isReq: PropTypes.bool,
};

export default DropDown;
