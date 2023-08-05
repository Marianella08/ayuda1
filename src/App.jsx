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
        altura='176.7cm'
        food='Shoyu ramen'
        apodo=''
        cumple='December 31'
        />
        <Tarjetas
        imagen='Koshi_Sugawara'
        name='Koshi Sugawara'
        numero='2'
        año='Tercer grado'
        posicion='Vice-Captain, Setter'
        altura='174.6 cm'
        food='Super Spicy Mapo Tofu'
        apodo=''
        cumple='June 13'
        />
        <Tarjetas
        imagen='Asahi_Azumane'
        name='Asahi Azumane'
        numero='3'
        año='Tercer grado'
        posicion='Ace, Outside Hitter'
        altura='186.4 cm'
        food='Tonkotsu Ramen'
        apodo=''
        cumple='January 1'
        />
        <Tarjetas
        imagen='Yu_Nishinoya'
        name='Yu Nishinoya'
        numero='4'
        año='Segundo grado'
        posicion='Libero'
        altura='160.5 cm'
        food='Garigari-kun Popsicles (soda flavor)'
        apodo=''
        cumple='October 10'
        />
        <Tarjetas
        imagen='Ryunosuke_Tanaka'
        name='Ryunosuke Tanaka'
        numero='5'
        año='Segundo grado'
        posicion='Wing Spiker'
        altura='178.2 cm'
        food='Melonpan'
        apodo=''
        cumple='March 3'
        />
        <Tarjetas
        imagen='Chikara_Ennoshita'
        name='Chikara Ennoshita'
        numero='6'
        año='Segundo grado'
        posicion='Left-wing Spiker'
        altura='176.1 cm'
        food='Sea pineapple'
        apodo=''
        cumple='December 26'
        />
        <Tarjetas
        imagen='Hisashi_Kinoshita'
        name='Hisashi Kinoshita'
        numero='7'
        año='Segundo grado'
        posicion='Pinch Server, Wing Spiker'
        altura='175.8 cm'
        food='Pickled ginger'
        apodo=''
        cumple='February 15'
        />
        <Tarjetas
        imagen='Narita_Kazuhito'
        name='Narita Kazuhito'
        numero='8'
        año='Segundo grado'
        posicion='Middle Blocker'
        altura='180.9 cm'
        food='Tamagoyaki'
        apodo=''
        cumple='August 17'
        />
        <Tarjetas
        imagen='Tobio_Kageyama'
        name='Tobio kageyama'
        numero='9'
        año='Primer Grado'
        posicion='Setter'
        altura='181.9cm'
        food='Milk, Pork curry with a slow cook egg on top'
        apodo=''
        cumple='December 22'
        />
        <Tarjetas
        imagen='Shoyo_Hinata'
        name='Hinata Shoyo'
        numero='10'
        año='Primer Grado'
        posicion='Middle Blocker'
        altura='164.2cm'
        food='Tamago Kake Gohan, Meat Buns'
        apodo=''
        cumple='June 21'
        />
        <Tarjetas
        imagen='Kei_tsukishima'
        name='Kei Tsukishima'
        numero='11'
        año='Primer Grado'
        posicion='Middle Blocker'
        altura='190.1 cm'
        food='Strawberry Shortcake'
        apodo=''
        cumple='September 27'
        />
        <Tarjetas
        imagen='Tadashi_Yamaguchi'
        name='Tadashi Yamaguchi'
        numero='12'
        año='Primer Grado'
        posicion='Pinch Server, Middle Blocker '
        altura='180.0 cm'
        food='Soft, floppy french fries'
        apodo=''
        cumple='November 10'
        />
      </div>
    </div>
  )
}

export default App
