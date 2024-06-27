import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body, Button } from 'native-base';

const ProfileScreen = () => {
  const handleEditProfile = () => {
    // Logic to handle edit profile action
    console.log('Edit profile clicked');
  };

  return (
    <Container style={styles.container}>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text style={styles.title}>Profile</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.label}>Username:</Text>
              <Text style={styles.info}>John Doe</Text>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.info}>john.doe@example.com</Text>
              {/* Add more profile information as needed */}
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Button style={styles.editButton} onPress={handleEditProfile}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#44B318',
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
