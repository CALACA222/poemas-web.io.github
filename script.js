const poemas = [
  //1ro poema
  {
  titulo:"Letras Que Nacen De Ti",
  contenido:"Algunos son solo poemas, otros saolo versos, pero todos te pertenecen. Son tuyos sin tus palabras y caricias, estas letras no exitirian."
},
//2do poema
{
  titulo:"El cambio del corazón",
  contenido:"De reprocharle todo a la vida, a agradecerte por ponerte en la mia; de no encontarme conforme con nada, a desear que no te vayas; de correr cuando algo falla, a intentarlo una y otra vez para que no te vayas. Así es como un hombre cambia cuando encunetra a la mujer que ama."
},
//3ro poema
{
  titulo:"Luz encendida",
  contenido:"Bajo el cielo estrellado, en tu mirada encuentro mi hogar, Tu esencia es el faro que guia mi camino sin cesar.Eres mas que un cuerpo, eres un alma radiente, Una dama real,autentica y elegante.No es falta de respeto, es admiracion sincera,Deseo profundo que en mi pecho reverbera.Quiero cuidarte como el más valioso tesoro,Y en cada gesto, domsotarte mi amor oro.Abrazarte con ternura, sentir tu piel cercana,Tocarte con pasión, fundirnos en una danza.Eres mi amada, mi compañera en esta vida, Y en cada momento eres mi luz encendida."
},
//4to poema
{
  titulo:" El sentido de amar",
  contenido:" Te amo, pero ¿qué es amar?Es mirar a tus ojos y saber que en ellos encuentro mi hogar,besar tus labios y sentir que son mi dulce despertar,tomar tu mano y saber que juntos podemos volar.Es ver tu sonrisa y encontrar en ella mi felicidad,abrazarte y sentir que en tus brazos la tranquilidad.Por ti, amor, vale la pena luchar,porque contigo, mi vida cobra sentido, mi amor, mi eternidad."
},
//5to poema
{
  titulo:" Un futuro Soñado contigo",
  contenido:" ¿Cómo expresar lo que anhelo contigo, mi amada? Sueño con ser un caballero, solicitar tu mano con la delicadeza de una rosa y unir nuestros destinos en el sagrado lazo del matrimonio. Quisiera ser un rebelde, pero no para causar estragos, sino para robar tu corazón sin dejar huella, conquistarte con el fuego de mi pasión. Imagino un futuro colmado de amor y risas, donde nuestros hijos sean la manifestación de nuestra unión, y juntos, como almas gemelas destinadas, cuidemos de ellos con ternura y dedicación. Visualizo un hogar donde solo reinen la lealtad y la fidelidad, donde tú y yo seamos los guardianes de nuestros fieles compañeros de cuatro patas, compartiendo cada latido de nuestro amor en la eternidad de su mirada"
},
//6to poema
{
  titulo:"Desnuda eres poesia ",
  contenido:"En la intimidad, desnuda sobre mí,tu belleza resplandece, no tiene fin.Como la luna en su plenitud,tu piel desnuda es mi beatitud.En cada curva, un suspiro nace,en cada beso, el éxtasis se hace.Desnuda sobre mí, eres poesía,tu cuerpo es arte, pura armonía.En cada caricia, el mundo desvanece,y en tus ojos, el universo florece.Encima de mí, sin ropa, eres sublime,un sueño hecho realidad, un éxtasis sublime."
},
//7mo poema
{
  titulo:"El encanto de tu magia",
  contenido:"Es un misterio para mí, una obsesión indescifrable, este vínculo que me une a ti. Tu figura tiene un magnetismo inexplicable que me atrae una y otra vez hacia ti. Tus consejos son mi refugio en los momentos de angustia, tu voz un bálsamo que calma mi alma inquieta. ¿Qué magia posees, qué encanto desprendes, para que una mujer tan hermosa como tú me haya cautivado de esta manera? Y ahora que has tejido tus hechizos sobre mí, te ruego que no me sueltes, que permanezcas a mi lado, porque sin ti, mi mundo carecería de luz y color"
},
//8vo poema
{
  titulo:"Quiero vivirte",
  contenido:"Sabes que te quiero, no dejo de pensar, sabes que te extraño, aunque ayer te vi pasar. Me rindo a la soledad, enfrento el miedo al amor, solo quiero vivirlo contigo, sin temor. Quiero verte feliz, buscarme cuando estés mal, ser tu poeta, tu guía, tu confidente especial. Tu maestro y aprendiz, tu guardián leal, el niño que vuelve a ti, en cualquier temporal. Quiero tocarte, besarte, desvestirte con pasión, hacerte el amor, en la noche o en la canción. Y también quiero admirarte, como obra de arte, que embriaga al pintor, con su encanto y su parte."
},
//9no poema
{
  titulo:"Por favor quedate",
  contenido:"Si te quedaste y me mostraste cómo se vive sin soledad, ahora no te vayas porque aunque ha sido poco tiempo, me acostumbré a apreciar tu mirada, a levantarme con ansias sabiendo que mi princesa me espera en su casa, sabiendo que no soy perfecto y que lo sabes, y que con mis fallos y errores aún te quedaste. Me acostumbré a pensar en el mañana, porque esperan un mañana en donde te quedes, es mejor que pasar un hoy sin saber quién soy"
},
//10mo poema
{
  titulo:"Lo que me das",
  contenido:"Al final, no eres lo que esperaba, pero me gusta lo que me das. Es distinto, es verdad, pero mi corazón lo siente real, y estoy decidido a darte y apoyarte en lo que más pueda ayudarte, aunque al final alguien decida robarte, y me tenga que quedar agradecido y resentido con la vida por ponerte en la mía y luego en la de alguien más."
},
//11ro poema
{
  titulo:"Un amor anormal",
  contenido:"Te amo de una manera tan anormal. No te amo con el corazón, pues el cuerpo se muere y ese órgano se acabó. No te amo con palabras, aunque las uso para recordártelo por si se te olvida. No solo son tus besos o tu voz, ni solo es tu cuerpo lo que a mí me atrapó, Son esos momentos donde nada es como se planeó, Esos momentos donde solo somos los dos."
},
//12do poema
{
  titulo:"Tu silenciosa presnecia",
  contenido:"Y así, no necesitas decir nada; tu presencia impregna mi alma de una paz que ha sido anhelada por mucho tiempo. Aunque mis letras puedan cansar, no encuentro otro modo de expresar lo importante que eres para este mortal, y el amor y la ilusión que me llegan cada día cuando recibo tu mensaje de buenos días"
},
//13ro poema
{
  titulo:"La rosa de mi anhelo",
  contenido:"Eres la rosa que anhelo entre mis manos, pues en tu esencia encuentro el hechizo que embriaga mi ser. Como un niño ante su tesoro más preciado, estoy dispuesto a desafiar las espinas para estar junto a ti, mi amor"
},
//14to poema
{
  titulo:"Deuda de amor",
  contenido:"El precio del amor, no lo quiero pagar, porque solo empezará a cobrar cuando te tenga que extrañar, cuando las risas y las citas sean recuerdos que dolerán en el pecho. Por eso, no te vayas y quedemos en deuda así, nada más."
},
//15to poema
{
  titulo:" La privacidad de mi amor",
  contenido:"Si mis poemas te los digo en privado, no es porque me dé vergüenza demostrar cuánto te amo, sino porque en versos expreso lo que siento, y lo que siento en cada verso es que te hago el amor. Es mi intimidad, es desnudarme ante ti mostrándote cómo soy, y aunque solo hayas visto los románticos..."
},
//16to poema
{
  titulo:"¿Quien diria?",
  contenido:"¿Quién diría que de escribirte por curiosidad, pasaría el tiempo y cada mensaje tuyo sería mi felicidad ?¿Quién diría que siendo completos desconocidos, pasarías a ser mi refugio donde suelto todos mis complejos más escondidos? ¿Quién diría que sin siquiera verte, antes de conocerte ya habías cambiado mi rumbo? Y no sé si durará para siempre o mañana se acabará, solo sé que desde que estás, no puedo ver a nadie más. No hay otra sonrisa que ayude a pintar la mía, ni otros ojos en donde me guste perderme. No hay hombro más cómodo que el tuyo donde lleno de cansancio o desilusionado encuentro confort y paz. Y como dije al principio, ¿quién diría que con el tiempo te volverías en mi niña, mi princesa, mi amor, mi mundo y mi vida?"
},
//17mo poema
{
  titulo:"Mi mejor regalo eres tu",
  contenido:"Hoy la pasé increíble y espero que tú también. Gracias por salir a caminar y solo con tu compañía calmar mi ansiedad. Gracias por regalarme tu tiempo, gracias solo por estar, gracias por existir y demostrarme la felicidad. Sé que no te entiendo y que la soledad no te da miedo. Sé que sola puedes con mucho y no me necesitas para nada, la verdad, y solo te quedas por ayudarme y porque disfrutar de mi presencia, quiero pensar, sea la razón por la cual a mi lado quieras estar. Solo espero que mis pequeñas molestias te causen algo de felicidad"
},
//18vo poema
{
  titulo:"Gracias por existir",
  contenido:"Gracias por tan maravillosa mañana. Desearía poder regalarte un pedacito, tan solo eso, de la felicidad que tú me das. Curas cosas que no te tocan, pero las tocas y se van. Aún con tus demonios y tormentos, decides aparecerte cuando la tormenta me atrapa, y no deja escapar. Y de la manera más hermosa, no insistes, solo estás, esperas que me suelte y que yo mismo me pueda desahogar."
},
//19no poema
{
  titulo:"El mejor poema siempre seras tu",
  contenido:"Eres un poema, de esos que me lleva tiempo entender, y cuando lo logro, un sentimiento llena mi ser. Estremeces mi piel. La diferencia está en que siempre hay algo nuevo que descubrir, y cada vez que te leo, solo siento cómo me estremeces a mil"
},
//20mo poema
{
  titulo:"Mi mejor compania",
  contenido:"En la calma de la noche, brillas como estrella guía, Acompañando mis pasos con amor y alegría. En tu mirada encuentro paz y armonía, Eres mi luz, mi fuerza, mi compañía. Tu dulce voz me susurra al oído, Palabras de aliento, amor y sentido. Eres mi refugio en este mundo herido, Mi niña, mi guía, mi amor querido."
},
//21ro poema
{
  titulo:"",
  contenido:""
},
//22do poema
{
  titulo:"",
  contenido:""
},
//23ro poema
{
  titulo:"",
  contenido:""
},
//24to poema
{
  titulo:"",
  contenido:""
},
//25to poema
{
  titulo:"",
  contenido:""
},
//26to poema
{
  titulo:"",
  contenido:""
},
//27mo poema
{
  titulo:"",
  contenido:""
},
//28vo poema
{
  titulo:"",
  contenido:""
},
//29no poema
{
  titulo:"",
  contenido:""
},
//30mo poema
{
  titulo:"",
  contenido:""
},
//31ro poema
{
  titulo:"",
  contenido:""
},
//32do poema
{
  titulo:"",
  contenido:""
},];
