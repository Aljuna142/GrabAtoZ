
 import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';

const ResponsiveGrid = ({ children }) => {
  const { width } = useWindowDimensions();

  let numColumns;
  let cardWidth;

  if (width <= 600) {
    numColumns = 2; // For small screens, display two cards in row-wise direction
  } else if (width <= 1200) {
    numColumns = 3; // For medium screens, display three cards in row-wise direction
  } else {
    numColumns = 4; // For large screens, display four cards in row-wise direction
  }

  cardWidth = `${(100 / numColumns).toFixed(2)}%`; // Calculate card width based on the number of columns

  return (
    <View style={styles.container}>
      {React.Children.toArray(children).reduce((rows, child, index) => {
        if (index % numColumns === 0) rows.push([]);
        rows[rows.length - 1].push(child);
        return rows;
      }, []).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((col, colIndex) => (
            <View key={colIndex} style={[styles.col, { width: cardWidth }]}>
              {col}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: 5, // Add padding to the container
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 10, // margin between rows
  },
  col: {
    flex: 1,
    marginHorizontal: 5,
    maxWidth: '100%', //  max width of cards to fit in columns
  },
});

export default ResponsiveGrid;



