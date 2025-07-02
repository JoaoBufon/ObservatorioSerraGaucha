import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, Switch, TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';


const CadastroEmpreendimento = () => {
  const [nome, setNome] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [issqn, setIssqn] = useState('');
  const [numeroAlvara, setNumeroAlvara] = useState('');
  const [meiRegistrado, setMeiRegistrado] = useState(false);
  const [cnpj, setCnpj] = useState('');
  const [tipoEmpresa, setTipoEmpresa] = useState('');
  const [cadasturObrigatorio, setCadasturObrigatorio] = useState(false);
  const [cadasturNumero, setCadasturNumero] = useState('');
  const [cadasturValidade, setCadasturValidade] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [endereco, setEndereco] = useState('');
  const [coordenadas, setCoordenadas] = useState({ latitude: -23.0, longitude: -46.0 });
  const [gestorNome, setGestorNome] = useState('');
  const [gestorCpf, setGestorCpf] = useState('');
  const [gestorTelefone, setGestorTelefone] = useState('');
  const [gestorCelular, setGestorCelular] = useState('');
  const [gestorEmail, setGestorEmail] = useState('');
  const [apresentacao, setApresentacao] = useState('');
  const [fotos, setFotos] = useState<string[]>([]);
  const [videoLinks, setVideoLinks] = useState(['']);
  const [whatsapp, setWhatsapp] = useState('');
  const [redesSociais, setRedesSociais] = useState({ instagram: '', facebook: '', youtube: '' });
  const [telefoneContato, setTelefoneContato] = useState('');
  const [siteLink, setSiteLink] = useState('');
  const [reservasLinks, setReservasLinks] = useState(['']);
  const [roteirosSelecionados, setRoteirosSelecionados] = useState<string[]>([]);
  type DiaSemana = 'segunda' | 'terca' | 'quarta' | 'quinta' | 'sexta' | 'sabado' | 'domingo';
  type HorarioAtendimento = { ativo: boolean; inicio: Date; fim: Date };
  type DiasHorarios = { [key in DiaSemana]: HorarioAtendimento };

  const [diasHorarios, setDiasHorarios] = useState<DiasHorarios>({
    segunda: { ativo: false, inicio: new Date(), fim: new Date() },
    terca: { ativo: false, inicio: new Date(), fim: new Date() },
    quarta: { ativo: false, inicio: new Date(), fim: new Date() },
    quinta: { ativo: false, inicio: new Date(), fim: new Date() },
    sexta: { ativo: false, inicio: new Date(), fim: new Date() },
    sabado: { ativo: false, inicio: new Date(), fim: new Date() },
    domingo: { ativo: false, inicio: new Date(), fim: new Date() },
  });

  const tiposEmpresa = ['Hospedagem', 'Atrativo', 'Gastronomia', 'Outro'];
  const roteiroOptions = [ /* fetched from API */ ];

  const renderFotos = () => fotos.map((uri, idx) => (
    <Image key={idx} source={{ uri }} style={styles.thumb} />
  ));

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, response => {
      if (
        !response.didCancel &&
        !response.errorCode &&
        response.assets &&
        response.assets.length > 0
      ) {
        const uri = response.assets[0].uri;
        if (uri) {
          setFotos(prev => [...prev, uri]);
        }
      }
    });
  };

  const onDateChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (date) setCadasturValidade(date);
  };

  const formatCnpj = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0,14);
    return digits
      .replace(/(\d{2})(?=\d)/, '$1.')
      .replace(/(\d{2}\.\d{3})(?=\d)/, '$1.')
      .replace(/(\d{2}\.\d{3}\.\d{3})(?=\d)/, '$1/')
      .replace(/(\d{2}\.\d{3}\.\d{3}\/\d{4})(?=\d)/, '$1-');
  };

  const formatCpf = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0,11);
    return digits
      .replace(/(\d{3})(?=\d)/, '$1.')
      .replace(/(\d{3}\.\d{3})(?=\d)/, '$1.')
      .replace(/(\d{3}\.\d{3}\.\d{3})(?=\d)/, '$1-');
  };

  const formatPhone = (text: string) => {
    const digits = text.replace(/\D/g, '').slice(0,11);
    return digits
      .replace(/(\d{2})(?=\d)/, '($1) ')
      .replace(/(\(\d{2}\) \d{5})(?=\d)/, '$1-');
  };

  const submitForm = () => {
    const payload = { nome, razaoSocial, nomeFantasia, inscricaoEstadual, issqn, numeroAlvara, meiRegistrado, cnpj, tipoEmpresa, cadasturObrigatorio, cadasturNumero, cadasturValidade, endereco, coordenadas, gestorNome, gestorCpf, gestorTelefone, gestorCelular, gestorEmail, apresentacao, fotos, videoLinks, whatsapp, redesSociais, telefoneContato, siteLink, reservasLinks, roteirosSelecionados, diasHorarios };
    console.log('Payload:', payload);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome *</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Razão Social *</Text>
      <TextInput style={styles.input} value={razaoSocial} onChangeText={setRazaoSocial} />

      <Text style={styles.label}>Nome Fantasia *</Text>
      <TextInput style={styles.input} value={nomeFantasia} onChangeText={setNomeFantasia} />

      <Text style={styles.label}>Inscrição Estadual</Text>
      <TextInput style={styles.input} value={inscricaoEstadual} onChangeText={setInscricaoEstadual} keyboardType="numeric" />

      <Text style={styles.label}>ISSQN (%) *</Text>
      <TextInput style={styles.input} value={issqn} onChangeText={setIssqn} keyboardType="numeric" />

      <Text style={styles.label}>Nº Alvará *</Text>
      <TextInput style={styles.input} value={numeroAlvara} onChangeText={setNumeroAlvara} keyboardType="numeric" />

      {/* Novo checkbox para MEI */}
      <View style={styles.row}>
        <Text style={styles.label}>Registrada como MEI?</Text>
        <Switch
          value={meiRegistrado}
          onValueChange={setMeiRegistrado}
        />
      </View>

      {/* Campo CNPJ obrigatório */}
      <Text style={styles.label}>CNPJ *</Text>
      <TextInput
        style={styles.input}
        value={cnpj}
        onChangeText={text => setCnpj(formatCnpj(text))}
        keyboardType="numeric"
        placeholder="00.000.000/0001-00"
        maxLength={18}
      />

      {/* Tipo de empreendimento obrigatório */}
      <Text style={styles.label}>Tipo de Empreendimento *</Text>
        <Picker
            selectedValue={tipoEmpresa}
            onValueChange={setTipoEmpresa}
            style={styles.input}
          >
            <Picker.Item label="Hospedagem" value="Hospedagem" />
            <Picker.Item label="Atrativo" value="Atrativo" />
            <Picker.Item label="Gastronomia" value="Gastronomia" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>
      {/* CADASTUR - Obrigatoriedade */}
      <View style={styles.row}>
        <Text style={styles.label}>CADASTUR - Obrigatório?</Text>
        <Switch
          value={cadasturObrigatorio}
          onValueChange={setCadasturObrigatorio}
        />
      </View>

      {cadasturObrigatorio && (
        <>
          <Text style={styles.label}>CADASTUR - nº</Text>
          <TextInput style={styles.input} value={cadasturNumero} onChangeText={setCadasturNumero} keyboardType="numeric" />

          <Text style={styles.label}>CADASTUR - Validade</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text>{cadasturValidade.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={cadasturValidade}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}
        </>
      )}

      <Text style={styles.label}>Endereço *</Text>
      <TextInput style={styles.input} value={endereco} onChangeText={setEndereco} placeholder="Rua, nº, Bairro, CEP, Município" />

      <Text style={styles.label}>Nome do Gestor *</Text>
      <TextInput style={styles.input} value={gestorNome} onChangeText={setGestorNome} />
      {/* demais campos do gestor */}

       <Text style={styles.label}>CPF do Gestor *</Text>
      <TextInput
        style={styles.input}
        value={gestorCpf}
        onChangeText={text => setGestorCpf(formatCpf(text))}
        keyboardType="numeric"
        placeholder="000.000.000-00"
        maxLength={14}
      />

      <Text style={styles.label}>Telefone do Gestor *</Text>
      <TextInput
        style={styles.input}
        value={gestorTelefone}
        onChangeText={text => setGestorTelefone(formatPhone(text))}
        keyboardType="phone-pad"
        placeholder="(11) 91234-5678"
        maxLength={15}
      />

      <Text style={styles.label}>Celular do Gestor *</Text>
      <TextInput
        style={styles.input}
        value={gestorCelular}
        onChangeText={text => setGestorCelular(formatPhone(text))}
        keyboardType="phone-pad"
        placeholder="(11) 91234-5678"
        maxLength={15}
      />

      <Text style={styles.label}>Email do Gestor *</Text>
      <TextInput
        style={styles.input}
        value={gestorEmail}
        onChangeText={setGestorEmail}
        keyboardType="email-address"
        placeholder="email@dominio.com"
      />

      <Text style={styles.label}>Apresentação *</Text>
      <TextInput style={[styles.input, { height: 100 }]} value={apresentacao} onChangeText={setApresentacao} multiline />

      {/* Fotos */}
      <Text style={styles.label}>Fotos</Text>
      <View style={styles.photoContainer}>{renderFotos()}</View>
      {fotos.length < 10 && (
        <Button title="+ Adicionar Foto" onPress={pickImage} />
      )}

      {/* Vídeos externos */}
      <Text style={styles.label}>Vídeos Extras (Links)</Text>
      {videoLinks.map((link, idx) => (
        <TextInput
          key={idx}
          style={styles.input}
          value={link}
          onChangeText={text => {
            const arr = [...videoLinks]; arr[idx] = text; setVideoLinks(arr);
          }}
          placeholder="URL do vídeo"
        />
      ))}
      {videoLinks.length < 10 && <Button title="+ Adicionar Link" onPress={() => setVideoLinks([...videoLinks, ''])} />}

      {/* Redes Sociais */}
      <Text style={styles.label}>Redes Sociais</Text>
      <TextInput
        style={styles.input}
        placeholder="Instagram"
        value={redesSociais.instagram}
        onChangeText={text => setRedesSociais({ ...redesSociais, instagram: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Facebook"
        value={redesSociais.facebook}
        onChangeText={text => setRedesSociais({ ...redesSociais, facebook: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="YouTube"
        value={redesSociais.youtube}
        onChangeText={text => setRedesSociais({ ...redesSociais, youtube: text })}
      />

      {/* Site */}
      <Text style={styles.label}>Site</Text>
      <TextInput
        style={styles.input}
        placeholder="https://seusite.com"
        value={siteLink}
        onChangeText={setSiteLink}
      />

      {/* Reservas e Ingressos */}
      <Text style={styles.label}>Canais de Reservas e Ingressos</Text>
      {reservasLinks.map((link, idx) => (
        <TextInput
          key={idx}
          style={styles.input}
          placeholder="URL do canal"
          value={link}
          onChangeText={text => {
            const arr = [...reservasLinks]; arr[idx] = text; setReservasLinks(arr);
          }}
        />
      ))}
      {reservasLinks.length < 10 && <Button title="+ Adicionar Link" onPress={() => setReservasLinks([...reservasLinks, ''])} />}

      {/* Roteiros */}
      <Text style={styles.label}>Roteiros</Text>
      <Picker
            selectedValue={roteirosSelecionados}
            onValueChange={setRoteirosSelecionados}
            style={styles.input}
          >
            <Picker.Item label="roteiro1" value="roteiro1" />
            <Picker.Item label="roteiro2" value="roteiro2" />
          </Picker>

      {/* Dias e Horários de Atendimento */}
      <Text style={styles.label}>Dias e Horários de Atendimento</Text>
      {Object.keys(diasHorarios).map(dia => {
        const diaKey = dia as DiaSemana;
        return (
          <View key={dia}>
            <View style={styles.row}>
              <Text style={styles.label}>{dia.charAt(0).toUpperCase() + dia.slice(1)}</Text>
              <Switch
                value={diasHorarios[diaKey].ativo}
                onValueChange={val => setDiasHorarios({
                  ...diasHorarios,
                  [diaKey]: { ...diasHorarios[diaKey], ativo: val }
                })}
              />
            </View>
            {diasHorarios[diaKey].ativo && (
              <>
                <TouchableOpacity style={styles.input} onPress={() => { /* TODO: picker de hora início */ }}>
                  <Text>Início: {diasHorarios[diaKey].inicio.toLocaleTimeString()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.input} onPress={() => { /* TODO: picker de hora fim */ }}>
                  <Text>Fim: {diasHorarios[diaKey].fim.toLocaleTimeString()}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        );
      })}
      <Button title="Salvar Empreendimento" onPress={submitForm} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  label: { fontWeight: 'bold', marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 },
  mapContainer: { height: 200, marginTop: 8 },
  map: { flex: 1 },
  thumb: { width: 80, height: 80, marginRight: 8, marginTop: 8 },
  photoContainer: { flexDirection: 'row', flexWrap: 'wrap' },
});

export default CadastroEmpreendimento;