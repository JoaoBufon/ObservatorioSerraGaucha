import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Picker } from '@react-native-picker/picker';

export default function EmpreendimentoForm() {
  const [nome, setNome] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [issqn, setIssqn] = useState('');
  const [numeroAlvara, setNumeroAlvara] = useState('');
  const [registradaComoMEI, setRegistradaComoMEI] = useState(false);
  const [cnpj, setCnpj] = useState('');
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [cadasturObrigatorio, setCadasturObrigatorio] = useState(false);
  const [cadasturNumero, setCadasturNumero] = useState('');
  const [cadasturValidade, setCadasturValidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [coordenadas, setCoordenadas] = useState('');
  const [nomeGestor, setNomeGestor] = useState('');
  const [cpfGestor, setCpfGestor] = useState('');
  const [telefoneGestor, setTelefoneGestor] = useState('');
  const [celularGestor, setCelularGestor] = useState('');
  const [emailGestor, setEmailGestor] = useState('');
  const [apresentacao, setApresentacao] = useState('');
  const [telefoneContato, setTelefoneContato] = useState('');
  const [diasHorarios, setDiasHorarios] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Empreendimento</Text>

      {/* Nome */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      {/* Razão Social */}
      <TextInput
        style={styles.input}
        placeholder="Razão Social"
        value={razaoSocial}
        onChangeText={setRazaoSocial}
      />

      {/* Nome Fantasia */}
      <TextInput
        style={styles.input}
        placeholder="Nome Fantasia"
        value={nomeFantasia}
        onChangeText={setNomeFantasia}
      />

      {/* Inscrição Estadual */}
      <TextInput
        style={styles.input}
        placeholder="Inscrição Estadual"
        value={inscricaoEstadual}
        onChangeText={setInscricaoEstadual}
        keyboardType="numeric"
      />

      {/* ISSQN */}
      <TextInput
        style={styles.input}
        placeholder="ISSQN (%)"
        value={issqn}
        onChangeText={setIssqn}
        keyboardType="numeric"
      />

      {/* Nº Alvará */}
      <TextInput
        style={styles.input}
        placeholder="Nº Alvará"
        value={numeroAlvara}
        onChangeText={setNumeroAlvara}
        keyboardType="numeric"
      />

      {/* Check box - Registrada como MEI */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={registradaComoMEI}
          onValueChange={setRegistradaComoMEI}
        />
        <Text style={styles.checkboxLabel}>Registrada como MEI?</Text>
      </View>

      {/* CNPJ */}
      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />

      {/* Tipo de Empresa */}
      <Picker
        selectedValue={tipoEmpresa}
        style={styles.picker}
        onValueChange={(itemValue: string) => setTipoEmpresa(itemValue)}
      >
        <Picker.Item label="Hospedagem" value="hospedagem" />
        <Picker.Item label="Atrativo" value="atrativo" />
        {/* Adicione mais opções conforme necessário */}
      </Picker>

      {/* CADASTUR - Check box Obrigatoriedade */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={cadasturObrigatorio}
          onValueChange={setCadasturObrigatorio}
        />
        <Text style={styles.checkboxLabel}>CADASTUR Obrigatório?</Text>
      </View>

      {/* CADASTUR - nº */}
      <TextInput
        style={styles.input}
        placeholder="CADASTUR - nº"
        value={cadasturNumero}
        onChangeText={setCadasturNumero}
        keyboardType="numeric"
      />

      {/* CADASTUR - Validade */}
      <TextInput
        style={styles.input}
        placeholder="CADASTUR - Validade"
        value={cadasturValidade}
        onChangeText={setCadasturValidade}
      />

      {/* Endereço */}
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />

      {/* Coordenadas */}
      <TextInput
        style={styles.input}
        placeholder="Coordenadas"
        value={coordenadas}
        onChangeText={setCoordenadas}
      />

      {/* Nome do Gestor Responsável */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Gestor Responsável"
        value={nomeGestor}
        onChangeText={setNomeGestor}
      />

      {/* CPF do Gestor Responsável */}
      <TextInput
        style={styles.input}
        placeholder="CPF do Gestor Responsável"
        value={cpfGestor}
        onChangeText={setCpfGestor}
        keyboardType="numeric"
      />

      {/* Telefone do Gestor Responsável */}
      <TextInput
        style={styles.input}
        placeholder="Telefone do Gestor Responsável"
        value={telefoneGestor}
        onChangeText={setTelefoneGestor}
        keyboardType="phone-pad"
      />

      {/* Celular do Gestor Responsável */}
      <TextInput
        style={styles.input}
        placeholder="Celular do Gestor Responsável"
        value={celularGestor}
        onChangeText={setCelularGestor}
        keyboardType="phone-pad"
      />

      {/* E-mail do Gestor Responsável */}
      <TextInput
        style={styles.input}
        placeholder="E-mail do Gestor Responsável"
        value={emailGestor}
        onChangeText={setEmailGestor}
        keyboardType="email-address"
      />

      {/* Apresentação do Empreendimento */}
      <TextInput
        style={styles.input}
        placeholder="Apresentação do Empreendimento"
        value={apresentacao}
        onChangeText={setApresentacao}
      />

      {/* Telefone para contato */}
      <TextInput
        style={styles.input}
        placeholder="Telefone para contato"
        value={telefoneContato}
        onChangeText={setTelefoneContato}
        keyboardType="phone-pad"
      />

      {/* Dias e Horários de Atendimento */}
      <TextInput
        style={styles.input}
        placeholder="Dias e Horários de Atendimento"
        value={diasHorarios}
        onChangeText={setDiasHorarios}
      />

      {/* Botão de Cadastro */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar Empreendimento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2C4CA4',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});