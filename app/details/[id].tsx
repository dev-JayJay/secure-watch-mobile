import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import ThemeView from '../../components/theme/ThemeView';

const incidentDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <ThemeView safe={true} className="bg-white/50">
      <Text>this is the Incident with the  ID: {id}</Text>
    </ThemeView>
  );
}

export default incidentDetails;