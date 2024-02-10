// Import stylesheets
import './style.css';

// Write Javascript code!

// Definizione della classe Libro
class Libro {
  constructor(posizione, autore, titolo, utentePrestito) {
    this.posizione = posizione;
    this.autore = autore;
    this.titolo = titolo;
    this.utentePrestito = utentePrestito;
  }
}

// Definizione della classe Archivio
class Archivio {
  constructor(arrayLibri) {
    this.arrayLibri = arrayLibri;
  }

  // Metodo per trovare i libri che corrispondono ad una certa stringa nel titolo
  trovaLibri(stringaDaCercare) {
    return this.arrayLibri.filter(libro => libro.titolo.toLowerCase().includes(stringaDaCercare.toLowerCase()));
  }
}

// Esempio di utilizzo delle classi

// Array contenente gli oggetti con autore e titolo dei libri
const arrayLibri = [
  new Libro(1, "Dante Alighieri", "Divina Commedia", ""),
  new Libro(2, "Alessandro Manzoni", "I Promessi Sposi", ""),
  new Libro(3, "Boccaccio", "Decameron", "")
];

// Creazione dell'oggetto Archivio
const archivio = new Archivio(arrayLibri);

// Sequenza di caratteri da cercare nei titoli
const stringaDaCercare = "ome";

// Trovare i libri che corrispondono alla sequenza di caratteri nel titolo
const libriCorrispondenti = archivio.trovaLibri(stringaDaCercare);

// Visualizzare i libri corrispondenti
let contenuto; 
if (libriCorrispondenti.length === 1) {
  contenuto = "Autore: " + libriCorrispondenti[0].autore + " | Titolo: " + libriCorrispondenti[0].titolo;
} else {
  contenuto = "Numero di libri corrispondenti: " + libriCorrispondenti.length;
}


const appDiv = document.getElementById('app');
appDiv.innerHTML = contenuto;