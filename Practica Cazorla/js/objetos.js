const inicio = {
    titulo: "Bienvenido al Parque Natural de las Sierras de Cazorla",
    parrafos: [
        "El Parque Natural de las Sierras de Cazorla, Segura y Las Villas, situado en la provincia de Jaén, es el mayor espacio protegido de España y el segundo de Europa. Declarado Reserva de la Biosfera por la UNESCO, este impresionante paraje abarca más de 200,000 hectáreas de bosques, montañas, y ríos que ofrecen un refugio único para la biodiversidad. Es hogar de especies emblemáticas como el quebrantahuesos, el águila real y el ciervo, además de contar con una rica variedad de flora autóctona como el pino salgareño y el tejo.",
        "Explorar este parque es sumergirse en una experiencia natural única. Sus rutas de senderismo, como la emblemática Ruta del Río Borosa, te llevan a través de cañones, cascadas y cristalinas pozas de agua, mientras que sus miradores ofrecen vistas espectaculares del entorno montañoso. Además, su red de ríos y embalses hace que el parque sea ideal para actividades como el piragüismo, la pesca, o simplemente disfrutar de la serenidad de la naturaleza. Las Sierras de Cazorla también destacan por su riqueza cultural, con pueblos como Cazorla, Segura de la Sierra y Hornos, donde la historia y la arquitectura tradicional andaluza se mezclan armoniosamente con el paisaje.",
        "Visitar este parque es mucho más que una escapada rural; es una oportunidad para conectar con la naturaleza en su estado más puro. Tanto si buscas aventura como tranquilidad, el Parque Natural de las Sierras de Cazorla, Segura y Las Villas te ofrece una experiencia inolvidable. Desde el avistamiento de fauna hasta la degustación de su exquisita gastronomía local, como el aceite de oliva virgen extra, cada rincón de este espacio natural te invita a descubrir la esencia del paraíso andaluz."
    ]
};




const especies = {
    titulo: "Especies animales del Parque",
    animales: [
        {
            nombre: "Cabra Montesa",
            descripcion: "La cabra montesa es un mamífero nativo de las montañas de la península ibérica. Es conocida por su habilidad para escalar en terrenos rocosos y su agilidad para moverse por acantilados escarpados.",
            imagen: "cabraMontesa.png"
        },
        {
            nombre: "Jabalí",
            descripcion: "El jabalí es un mamífero omnívoro conocido por su cuerpo robusto, su pelaje espeso y sus colmillos curvados. Es común en los bosques del Parque Natural de las Sierras de Cazorla.",
            imagen: "jabali.jpg",
        },
        {
            nombre: "Quebrantahuesos",
            descripcion: "El quebrantahuesos es una especie de ave rapaz conocida por su capacidad para romper huesos. Es un ave de gran tamaño, con plumaje de tonos naranjas y blancos, que habita en acantilados rocosos.",
            imagen: "quebrantahuesos.jpg",
        },
    ]
};

const reservas = {
    titulo: "Reservas",
    descripcion: [
        "El acceso al Parque es gratuito, siempre que se respeten las normas de conducta y preservación del mismo",
        "No obstante también se dispone de servicios adicionales, como visitas guiadas, aulas educativas..."
    ],
    horarios: {
        titulo: "Horarios y Reservas",
        visitasGuiadas: {
            verano: {
                titulo: "Temporada de Verano",
                horarios: ["10:00 - 13:00", "16:00 - 18:00"],
                tarifas: {
                    individual: "5 € persona",
                    grupos: "3 € persona"
                }
            },
            invierno: {
                titulo: "Temporada de inverno",
                horarios: ["11:00 - 14:00"],
                tarifas: {
                    individual: "4 € persona",
                    grupos: "2 € persona"
                }
            }
        },
        aulaEducativa: {
            verano: {
                horarios: ["9:00 - 10:00", "15:00 - 16:00"],
                tarifa: "25 €"
            },
            invierno: {
                horarios: ["10:00 - 11:00"],
                tarifa: "25 €"
            }
        }
    },
    contacto: {
        titulo: "Contacto",
        descripcion: "Si estás pensando visitar el parque con un grupo, por favor rellena el siguiente formulario:"
    }
};

const galeria = {
    titulo: "Galeria",
    imagenes: [
        "imagen1.jpg",
        "imagen2.jpg",
        "imagen3.jpg",
        "imagen4.jpg"
    ]
};



export { inicio, especies, reservas, galeria };