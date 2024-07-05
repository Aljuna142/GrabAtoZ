// CheckoutScreen.js

/*import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CheckoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checkout Screen</Text>
      <Button
        title="Go Back to Cart"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default CheckoutScreen;basic scrn*/



/*import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [], totalPrice = 0 } = route.params || {};

  // Define your discount and VAT rates
  const discountRate = 0.1; // 10%
  const vatRate = 0.2; // 20%

  const discount = totalPrice * discountRate;
  const vat = (totalPrice - discount) * vatRate;
  const finalPrice = totalPrice - discount + vat;

  // Render item in checkout
  const renderItem = ({ item }) => {
    const itemPrice = parseFloat(item.price);
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.quantity} x ${!isNaN(itemPrice) ? itemPrice.toFixed(2) : 'N/A'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.summary}>
        <Text style={styles.text}>Total Price: ${totalPrice.toFixed(2)}</Text>
        <Text style={styles.text}>Discount: -${discount.toFixed(2)}</Text>
        <Text style={styles.text}>VAT: +${vat.toFixed(2)}</Text>
        <Text style={styles.finalPrice}>Final Price: ${finalPrice.toFixed(2)}</Text>
      </View>
      <Button
        title="Go Back to Cart"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});





export default CheckoutScreen;good */
/*import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [], totalPrice = 0 } = route.params || {};

  // Define your VAT rate
  const vatRate = 0.05; // 5%

  // Calculate total discount
  const discount = cartItems.reduce((acc, item) => {
    if (item.discount) {
      const discountPercentage = parseFloat(item.discount) / 100;
      return acc + (item.price * item.quantity * discountPercentage);
    }
    return acc;
  }, 0);

  // Calculate VAT and final price
  const vat = (totalPrice - discount) * vatRate;
  const finalPrice = totalPrice - discount + vat;

  // Render item in checkout
  const renderItem = ({ item }) => {
    const itemPrice = parseFloat(item.price);
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.quantity} x ${!isNaN(itemPrice) ? itemPrice.toFixed(2) : 'N/A'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.summary}>
        <Text style={styles.text}>Total Price: ${totalPrice.toFixed(2)}</Text>
        <Text style={styles.text}>Discount: -${discount.toFixed(2)}</Text>
        <Text style={styles.text}>VAT: +${vat.toFixed(2)}</Text>
        <Text style={styles.finalPrice}>Final Price: ${finalPrice.toFixed(2)}</Text>
      </View>
      <Button
        title="Go Back to Cart"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default CheckoutScreen;*/


/*import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [], totalPrice = 0 } = route.params || {};

  // Define your discount and VAT rates
  const discountRate = 0.05; // 5%
  const vatRate = 0.05; // 5%

  // Calculate flat discount on total price
  const discount = totalPrice * discountRate;
  const discountedTotal = totalPrice - discount;

  // Calculate VAT on discounted total
  const vat = discountedTotal * vatRate;
  const finalPrice = discountedTotal + vat;

  // Render item in checkout
  const renderItem = ({ item }) => {
    const itemPrice = parseFloat(item.price);
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.quantity} x ${!isNaN(itemPrice) ? itemPrice.toFixed(2) : 'N/A'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.summary}>
        <Text style={styles.text}>Total Price: ${totalPrice.toFixed(2)}</Text>
        <Text style={styles.text}>Discount: -${discount.toFixed(2)}</Text>
        <Text style={styles.text}>VAT: +${vat.toFixed(2)}</Text>
        <Text style={styles.finalPrice}>Final Price: ${finalPrice.toFixed(2)}</Text>
      </View>
      <Button
        title="Go Back to Cart"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default CheckoutScreen;cal good*/



import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems = [], totalPrice = 0 } = route.params || {};

  // Define your discount and VAT rates
  const discountRate = 0.05; // 5%
  const vatRate = 0.05; // 5%

  // Calculate flat discount on total price
  const discount = totalPrice * discountRate;
  const discountedTotal = totalPrice - discount;

  // Calculate VAT on discounted total
  const vat = discountedTotal * vatRate;
  const finalPrice = discountedTotal + vat;

  // Navigate to UserDetailsScreen
  const navigateToUserDetails = () => {
    navigation.navigate('UserDetails', { totalPrice, cartItems });
  };

  // Render item in checkout
  const renderItem = ({ item }) => {
    const itemPrice = parseFloat(item.price);
    return (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.quantity} x ${!isNaN(itemPrice) ? itemPrice.toFixed(2) : 'N/A'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.summary}>
        <Text style={styles.text}>Total Price: ${totalPrice.toFixed(2)}</Text>
        <Text style={styles.text}>Discount: -${discount.toFixed(2)}</Text>
        <Text style={styles.text}>VAT: +${vat.toFixed(2)}</Text>
        <Text style={styles.finalPrice}>Final Price: ${finalPrice.toFixed(2)}</Text>
      </View>
      <Button
        title="Proceed to Checkout"
        onPress={navigateToUserDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  text: {
    fontSize: 16,
    marginVertical: 4,
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default CheckoutScreen;


