let peliculas=[
    {
        nombre:"Black adam ultimonuevo",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/Black%20adam%20ultimonuevo.jpg?alt=media&token=811598ed-99ed-4814-bbb3-26c5a878811a"
    },
    {
        nombre:"EL CATACLISMO1",
        duracion:60,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/EL%20CATACLISMO1.jpg?alt=media&token=1ea7292e-783c-4b5e-88b5-533d549bf1ae"
    },
    {
        nombre:"ESTAMOS HECHOS PARA AMARNOS1",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/ESTAMOS%20HECHOS%20PARA%20AMARNOS1.jpg?alt=media&token=356e0cd3-ef61-4434-a825-d8424d248fc1"
    },
    {
        nombre:"LA JAURIA",
        duracion:160,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/LA%20JAURIA.jpg?alt=media&token=40550641-7034-414b-99c5-03aea40c02b4"

    },
    {
        nombre:"LA MUJER REY NUEVO POSTER1",
        duracion:150,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/LA%20MUJER%20REY%20NUEVO%20POSTER1.jpg?alt=media&token=b1d6d0af-4acd-43e2-ae46-78eb33bc46d6"
    },
    {
        nombre:"ONEPIECE1",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/ONEPIECE1.jpg?alt=media&token=368287d0-0362-462e-b6fd-8d6b2750a4ed"
    },
    {
        nombre:"SONRIE1",
        duracion:60,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/SONRIE1.jpg?alt=media&token=5966335a-8ae3-4a4c-98e9-b4692e1e86e4"
    },
    {
        nombre:"hallowen ultimo poster",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=ecf054c2-06e3-473d-b9b9-57d29f5825f7"
    },
    {
        nombre:"hallowen ultimo poster",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=ecf054c2-06e3-473d-b9b9-57d29f5825f7"
    },
    {
        nombre:"hallowen ultimo poster",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=ecf054c2-06e3-473d-b9b9-57d29f5825f7"
    },
    {
        nombre:"hallowen ultimo poster",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=ecf054c2-06e3-473d-b9b9-57d29f5825f7"
    },
    {
        nombre:"hallowen ultimo poster",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=ecf054c2-06e3-473d-b9b9-57d29f5825f7"
    },{
        nombre:"hallowen ultimo poster",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadanielescudero.appspot.com/o/hallowen%20ultimo%20poster.jpg?alt=media&token=ecf054c2-06e3-473d-b9b9-57d29f5825f7"
    },
]
let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)
    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","W-100")
    fila.appendChild(foto)
})