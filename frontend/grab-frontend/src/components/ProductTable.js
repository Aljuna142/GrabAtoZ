import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductTable = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>More Information</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Brand</Text>
          <Text style={styles.cell}>{product.brand}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Model Number</Text>
          <Text style={styles.cell}>{product.modelNumber}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Processor</Text>
          <Text style={styles.cell}>{product.processor}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Memory RAM</Text>
          <Text style={styles.cell}>{product.memoryRam}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Storage</Text>
          <Text style={styles.cell}>{product.storage}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Graphics</Text>
          <Text style={styles.cell}>{product.graphics}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Keyboard</Text>
          <Text style={styles.cell}>{product.keyboard}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Wi-Fi</Text>
          <Text style={styles.cell}>{product.wifi}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Battery</Text>
          <Text style={styles.cell}>{product.battery}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Display Resolution</Text>
          <Text style={styles.cell}>{product.resolution}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Power Supply</Text>
          <Text style={styles.cell}>{product.powerSupply}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Bluetooth</Text>
          <Text style={styles.cell}>{product.bluetooth}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Webcam</Text>
          <Text style={styles.cell}>{product.webcam}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Speaker</Text>
          <Text style={styles.cell}>{product.speaker}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Ports</Text>
          <Text style={styles.cell}>{product.ports}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cell}>Color</Text>
          <Text style={styles.cell}>{product.color}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
  },
  table: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
});

export default ProductTable;
