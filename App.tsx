import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Login from './Login';
import EmpreendimentoForm from './components/EmpreendimentoForm';

export default function App() {
  return (
    <Login/>
    //<EmpreendimentoForm /> //ta com algum problema isso aqui
  );
}