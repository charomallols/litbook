import DonQuijoteDeLaMancha from './images/DonQuijoteDeLaMancha.jpg';
import LaMetamorfosis from './images/LaMetamorfosis.jpg';
import CienAñosDeSoledad from './images/CienAñosDeSoledad.jpg';
import ElNombreDeLaRosa from './images/ElNombreDeLaRosa.jpg';
import LaSombraDelViento from './images/LaSombraDelViento.jpg';
import Aquitania from './images/Aquitania.jpg';

export default function getBooks(){
    return [
      { id: 'DonQuijoteDeLaMancha', name: 'Don Quijote de la Mancha', logo: DonQuijoteDeLaMancha, details: 'Es una novela escrita por el español Miguel de Cervantes Saavedra. Publicada su primera parte con el título de El ingenioso hidalgo don Quijote de la Mancha a comienzos de 1605, es la obra más destacada de la literatura española y una de las principales de la literatura universal.' },
      { id: 'LaMetamorfosis', name: 'La Metamorfosis', logo: LaMetamorfosis, details: 'Al despertar Gregorio Samsa una mañana, tras un sueño intranquilo, encontróse en su cama convertido en un monstruoso insecto' },
      { id: 'CienAñosDeSoledad', name: 'Cien años de soledad', logo: CienAñosDeSoledad, details: 'La obra más emblemática de Gabriel García Márquez «Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo.' },
      { id: 'ElNombreDeLaRosa', name: 'El Nombre de la Rosa', logo: ElNombreDeLaRosa, details: 'El nombre de la rosa es una novela histórica de misterio escrita por Umberto Eco y publicada en 1980. Ambientada en el turbulento ambiente religioso del siglo XIV, la novela narra la investigación que realizan fray Guillermo de Baskerville y su pupilo Adso de Melk alrededor de una misteriosa serie de crímenes que suceden en una abadía del norte de Italia' },
      { id: 'LaSombraDelViento', name: 'La sombra del viento', logo: LaSombraDelViento, details: 'La sombra del viento es una novela de Carlos Ruiz Zafón publicada en 2001, el primer libro de la saga del Cementerio de los libros olvidados y un superventas mundial, con más de quince millones de ejemplares vendidos en 36 idiomas diferentes. La crítica la tildó como «una de las grandes revelaciones literarias de los últimos tiempos».' },
      { id: 'Aquitania', name: 'Aquitaia', logo: Aquitania, details: 'PREMIO PLANETA 2020 Un poderoso thriller histórico que atraviesa un siglo repleto de venganzas, incestos y batallas.«Actúa como un león. Arremete como un águila. Ejecuta como un escorpión.»' }
    ];
  }