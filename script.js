// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = new Vue(
    {
        el: '#root',
        data: {
            title: 'Primo titolo con Vue',
            miaImg: 'https://unsplash.it/600/300?image=171'
        }
    }
);
