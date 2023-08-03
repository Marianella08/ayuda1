import '../src/styles/tarjetas.css'
import '../src/App.css'
import React from "react";
import Testimonio from './components/testimonio';
import Tarjetas from './components/tajetas';

function App() {
  return (
    <div className="App">

      <div className="container">
        <Tarjetas
        imagen='Daichi_Sawamura'
        name='Daichi Sawamura'
        numero='1'
        año='Tercer grado'
        posicion='Captain, Wing Spiker'
        descripcion='aaaaaaaa'
        />
        <Tarjetas
        imagen='Koshi_Sugawara'
        name='Koshi Sugawara'
        numero='2'
        año='Tercer grado'
        posicion='Vice-Captain, Setter'
        />
        <Tarjetas
        imagen='Asahi_Azumane'
        name='Asahi Azumane'
        numero='3'
        año='Tercer grado'
        posicion='Ace, Outside Hitter'
        />
        <Tarjetas
        imagen='Yu_Nishinoya'
        name='Yu Nishinoya'
        numero='4'
        año='Segundo grado'
        posicion='Libero'
        />
        <Tarjetas
        imagen='Ryunosuke_Tanaka'
        name='Ryunosuke Tanaka'
        numero='5'
        año='Segundo grado'
        posicion='Wing Spiker'
        />
        <Tarjetas
        imagen='Chikara_Ennoshita'
        name='Chikara Ennoshita'
        numero='6'
        año='Segundo grado'
        posicion='Left-wing Spiker'
        />
        <Tarjetas
        imagen='Hisashi_Kinoshita'
        name='Hisashi Kinoshita'
        numero='7'
        año='Segundo grado'
        posicion='Pinch Server, Wing Spiker'
        />
        <Tarjetas
        imagen='Narita_Kazuhito'
        name='Narita Kazuhito'
        numero='8'
        año='Segundo grado'
        posicion='Middle Blocker'
        />
        <Tarjetas
        imagen='Tobio_Kageyama'
        name='Tobio kageyama'
        numero='9'
        año='1'
        posicion='Setter'
        />
        <Tarjetas
        imagen='Shoyo_Hinata'
        name='Hinata Shoyo'
        numero='10'
        año='1'
        posicion='Middle Blocker'
        />
        <Tarjetas
        imagen='Kei_tsukishima'
        name='Kei Tsukishima'
        numero='11'
        año='1'
        posicion='Middle Blocker'
        />
        <Tarjetas
        imagen='Tadashi_Yamaguchi'
        name='Tadashi Yamaguchi'
        numero='12'
        año='1'
        posicion='Pinch Server, Middle Blocker '
        />
      </div>
    </div>
  )
}

export default App
