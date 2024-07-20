import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";

const SortDropdown = ({ onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("По умолчанию");

  const options = [
    "По умолчанию",
    "По дате подписки: сначала новые",
    "По дате подписки: сначала старые",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsVisible(false);
    onSelect(option);
  };

  const getButtonText = () => {
    if (selectedOption === "По умолчанию") {
      return (
        <Text style={styles.buttonText}>
          <Text style={styles.sortLabel}>Сортировка: </Text>
          <Text style={styles.sortOption}>По умолчанию</Text>
        </Text>
      );
    } else {
      return (
        <Text style={styles.buttonText}>
          <Text style={styles.sortLabel}>Сортировка: </Text>
          <Text style={styles.sortOption}>{selectedOption}</Text>
        </Text>
      );
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={styles.button}
      >
        {getButtonText()}
      </TouchableOpacity>
      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Сортировать</Text>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSelect(option)}
              style={styles.option}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedOption === option && styles.selectedOptionText,
                ]}
              >
                {option}
              </Text>
              <View
                style={[
                  styles.radio,
                  selectedOption === option && styles.radioSelected,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  sortLabel: {
    color: "rgba(255, 255, 255, 0.7)", // White with 70% opacity
  },
  sortOption: {
    color: "white", // Fully white
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  selectedOptionText: {
    color: "#A6499B",
    fontWeight: "bold",
  },
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
  },
  radioSelected: {
    backgroundColor: "#A6499B",
    borderColor: "#A6499B",
  },
});

export default SortDropdown;
