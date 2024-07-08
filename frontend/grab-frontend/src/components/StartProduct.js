

/*import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'; // Ensure you have this package installed

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts }) => {
  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        showsPagination={true}
        height={400} // Set a fixed height for the swiper
        loop={false}
      >
        {productImages.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
  },
  swiper: {
    height: 400,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default StartProduct;*/







/*import React from 'react';
import { View, FlatList, Image, Button, StyleSheet, Dimensions } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts }) => {
  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const renderHorizontalImageSwiper = () => (
    <View style={styles.horizontalSwiperContainer}>
      <FlatList
        data={productImages}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
      />
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={() => console.log('Add to Cart pressed')} />
        <Button title="Buy Now" onPress={() => console.log('Buy Now pressed')} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
});

export default StartProduct;button*/
//layout good


/*import React from 'react';
import { View, FlatList, Image, Pressable, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts }) => {
  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    // Implement your logic for adding to cart here
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => (
    <View style={styles.horizontalSwiperContainer}>
      <FlatList
        data={productImages}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
      />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct; on;y pressable*/



/*dddimport React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts }) => {
  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    // Implement your logic for adding to cart here
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => (
    <View style={styles.horizontalSwiperContainer}>
      <FlatList
        data={productImages}
        horizontal={true}
        pagingEnabled={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;*/







/*import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts }) => {
  console.log('Rendering StartProduct component');

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    // Implement your logic for adding to cart here
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => {
    console.log('Rendering Horizontal Image Swiper');
    return (
      <View style={styles.horizontalSwiperContainer}>
        <FlatList
          data={productImages}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;vvv*/


/*add to cart functionality is missing otherwsie good working import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts,onPressAddToCart }) => {
  console.log('Rendering StartProduct component');

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    // Implement your logic for adding to cart here
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => {
    console.log('Rendering Horizontal Image Swiper');
    return (
      <View style={styles.horizontalSwiperContainer}>
        <FlatList
          data={productImages}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;*/

/*11111import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts, onPressAddToCart }) => {
  console.log('Rendering StartProduct component');

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    onPressAddToCart(); // Call the onPressAddToCart function passed from props
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => {
    console.log('Rendering Horizontal Image Swiper');
    return (
      <View style={styles.horizontalSwiperContainer}>
        <FlatList
          data={productImages}
          horizontal={true}
          pagingEnabled={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;withou scrooling*/


import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import SimilarProducts from './SimilarProducts';

const { width: screenWidth } = Dimensions.get('window');

const StartProduct = ({ product, similarProducts, onPressAddToCart }) => {
  console.log('Rendering StartProduct component');

  const productImages = [
    require('../assets/I/img1/11.png'),
    require('../assets/I/img1/12.png'),
    require('../assets/I/img1/13.png'),
  ];

  const handleAddToCart = () => {
    console.log('Add to Cart pressed');
    onPressAddToCart(); // Call the onPressAddToCart function passed from props
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
    // Implement your logic for buying now here
  };

  const renderHorizontalImageSwiper = () => {
    console.log('Rendering Horizontal Image Swiper');
    return (
      <View style={styles.horizontalSwiperContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={screenWidth} // Ensures each slide takes the full width of the screen
        >
          {productImages.map((item, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={item} style={styles.image} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHorizontalImageSwiper()}
      <SimilarProducts data={similarProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 8,
  },
  horizontalSwiperContainer: {
    width: '100%',
    marginBottom: 16,
  },
  imageContainer: {
    width: screenWidth,
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartProduct;







