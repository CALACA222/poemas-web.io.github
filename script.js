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
  titulo:"Busacando ser tu refugio",
  contenido:"Bajo el manto de la noche oscura y fría, Mi princesa, en tus sueños, te envío esta melodía. Que las sombras guarden tus penas y agonía, Mientras te abrazo en mi alma con devoción sombría. Que en tus sueños, guerrera, despliegues tu valentía, Y enfrentes tus demonios con entereza y osadía. Que las estrellas te guíen en esta travesía, Y en cada paso, encuentres paz y armonía. Descansa en mi amor, en esta noche sombría, Que en tus sueños, princesa, siempre estaré, noche y día. En la oscuridad, mi luz te acompañaría, Hasta que el alba rompa esta oscuridad vacía."
},
//22do poema
{
  titulo:"Imperfecciones perfectas",
  contenido:"Mi niña, en tus imperfecciones es donde encuentro la perfección, porque a pesar de que te veas tan dañada o rota, decides darme lo mejor de ti. Como lo dije, para mí no hay nadie más después de ti. Fuiste luz cuando la oscuridad se apoderó de mí, fuiste y eres mi motor cuando siento que no hay nada por qué seguir. Y si no lo ves así, es porque lo estoy haciendo mal. Así me cuesta la vida demostrar que eres lo mejor del mundo, pero lo haré."
},
//23ro poema
{
  titulo:"Hermosa de pies a corazón",
  contenido:"Eres tan hermosa, pero no lo digo por tu piel. Tu belleza se aprecia como cuando, lleno de cansancio, contemplas el atardecer. No solo es lo visual, es el contexto que hay detrás, la historia que se cuenta en ese día. Aunque no haya sido la mejor, ese atardecer te hace desear volverlo  a ver"
},
//24to poema
{
  titulo:"Escritos de mi corazón",
  contenido:"Hay van otros versos, son de esos que ya no tardan en surgir, que solo al pensar en tu sonrisa el cielo deja de ser gris, que solo al pensarte las palabras vuelven a fluir, y de tantas maneras en las que te puedo decir te amo, decido hacerlo con un lápiz en la mano. Puedo escribir una y mil razones por las cuales estar a tu lado me hace feliz, pero hoy decido recordarte que eres mi musa y yo tu aprendiz. Aprendo a querer y aunque aún no sé si lo hago bien, lo hago de corazón, pues es el que guía cuando comienzo a escribir. Y aunque esté algo deteriorado, tus palabras ayudan a que se sienta feliz."
},
//25to poema
{
  titulo:"Loca ironía",
  contenido:"En ti, hallar paz, ¡qué dulce ironía!, Eres mi locura, mi amor, mi poesía"
},
//26to poema
{
  titulo:" Me quiciste aun sabiendo que no soy lo mejor para ti",
  contenido:"Me quisiste aún sabiendo que soy así, que no me nacía darte flores hasta que entendí que ese simple gesto te hace feliz."
},
//27mo poema
{
  titulo:"Aún perdido busco estar para ti",
  contenido:"  Bajo la luz de esta noche sin fin, no puedo dejar de admirarte, de sentir el miedo de mostrarme tal como soy, temeroso de no ser lo que esperas de mí. Perdóname por compartir lo negativo, pero en esta oscuridad, es lo único que encuentro. Aún así, mi corazón late por ti, sin medida, anhelando el momento en que pueda brillar para ti. Cada momento a tu lado es un regalo divino, aunque a veces me sienta perdido en el camino. Pero en tus ojos encuentro mi guía, y en tu amor, mi razón para seguir cada día. Entonces aquí estoy, desnudando mi alma, con la esperanza de que me aceptes sin calma. Porque a pesar de mis fallas y errores, mi amor por ti sigue siendo el más sincero. Así que perdóname por soltar lo malo, y permíteme mostrarte lo que soy de verdad. En cada verso de este poema sincero, encuentra mi amor, mi ser, mi eterna entrega."
},
//28vo poema
{
  titulo:"Perdon por volverte lo mejor de mí",
  contenido:"Perdón pido por atreverme a escribirte, por tomarte como musa, mas la luna, sincera, no me inspira así."
},
//29no poema
{
  titulo:"La princesa y heroina de mi vida",
  contenido:"El alma necesitaba ser escuchada, y justo cuando casi sin voz me quedaba, aparece una linda y dulce princesa encantada, tan natural, tan real, auténtica de verdad, cambia mi mundo, y mi deseo más profundo es permanecer a su lado por la eternidad."
},
//30mo poema
{
  titulo:"Mi sueño en vida",
  contenido:"En el éter de la noche, tu presencia resplandece, inundando mi realidad con su luz que enloquece. Cada encuentro contigo, un sueño se desata, un mundo donde no quiero despertar, donde nada se arrebata. Tus ojos son estrellas que guían mi camino, tu voz, un susurro que acaricia mi destino. En la danza del tiempo, eres mi melodía, un sueño eterno que en mi alma perdura cada día. Así, entre sueños y realidades entrelazadas, nuestro amor florece en las noches iluminadas. Y aunque el alba nos separe, y la luz del día aparezca, en mi corazón, tu presencia nunca desaparece."
},
//31ro poema
{
  titulo:"Te amo",
  contenido:"Te amo, te amo sin usar la razón, te amo sin entender por qué lo hago, te amo porque a tu lado todo se vuelve más claro."
},
//32do poema
{
  titulo:"Mostrando heridas",
  contenido:"Si ante ti desnudo mi ser, ¿juzgarás mis heridas con desdén, o acaso, admirarás su querer? ¿Mis errores marcarás con afán, o, tomándome la mano, dirás, eso es pasado, volvamos a empezar? Son dudas que en mí se apoderan, cuando el vacío me atrapa sin tregua. Mas cuando llegas, todo se aclara, pues tu apoyo incondicional siempre me ampara."
},
//33ro poema
{
  titulo:"La estrella más hermosa",
  contenido:"Nunca vi una estrella tan majestuosa; cuando la vi, dudé. Es así, pues siempre las veía de lejos hasta que te conocí"
},
//34to poema
{
  titulo:"Eres parte de mi",
  contenido:"Pueden mis ojos no verte, o mis manos no tocarte, pero de mi corazón y mi alma, ya formas parte"
},
//35to poema
{
  titulo:"Deseando tus besoso",
  contenido:"Con besos que encantan, la oscuridad se desvanece, Anhelados y dulces, causan batallas si no me los concedes"
},
//36to poema
{
  titulo:"Dos corazónes unidos",
  contenido:"Entre la brisa suave y el sol radiante, cada instante se llena de vida vibrante. Gracias por recargar mi día, con tu luz que nunca se apaga, tu guía. En cada palabra hallamos armonía, un eco de amor que nunca se desvía. Así juntos, en este viaje sin final, nuestros corazones laten en un mismo ritual. Gracias por ser la chispa que enciende la alegría, en este sendero donde cada paso es poesía. Tus besos son un bálsamo que calma el alma, una melodía suave en la noche más calma. En cada roce, en cada susurro, siento que el mundo se detiene, que es más puro. Tu amor es un refugio, un santuario, donde encuentro paz, donde no hay contrarío"
},
//37mo poema
{
  titulo:"Apostando todo al amor",
  contenido:"En el casino del amor, jugué mi suerte,  sabiendo que perderlo todo era una certeza.  Pero tu amor, mi tesoro, valió la pena,  y por ti, arriesgo todo en esta danza incierta."
},
//38vo poema
{
  titulo:"Café",
  contenido:"Deseo café, el café de tus ojos, esos tan preciosos que causan insomnio en mi ser"
},
//39no poema
{
  titulo:"Dueña de mi corazón",
  contenido:"Te invito a pasar un ratito por mi corazón. Ponte cómoda, por favor, ya es tu hogar; te lo adueñaste cuando tu sonrisa me dejaste apreciar."
},
//40mo poema
{
  titulo:"Mía",
  contenido:"En el eco de la noche, susurros de deseo, Usted es mía, en cada paso, en cada anhelo. Toco su alma con ternura, la abrazo con pasión, En este universo de amor, todo está en su canción. En cada mirada, un universo revelado, En cada caricia, un nuevo mundo es creado. Usted es mi sueño, mi razón de existir, En este abrazo eterno, todo está por descubrir. Así en el fulgor del día, y en el silencio de la noche, Usted es mía, y en su amor, todo está bien y todo es derroche."
},
//41ro poema
{
  titulo:"Mi felicidad viene de ti",
  contenido:"Tu en mi cielo eres la estrella más brillante, humilde e impresionante. Cuando todo estaba oscuro, bajaste, y cuando descubrí la felicidad, te quedaste."
},
//42do poema
{
  titulo:"Descubriendo el amor",
  contenido:"Pregúntame qué es querer, y mi respuesta es 'no sé'. Pregúntame qué es amar, y como gran ignorante, conmigo la respuesta no encontrarás. Pero soy más de ciencia, y no puedo quedarme sin poderlo explicar. Por eso, quédate conmigo y descubramos cómo es que es mi forma de amar"
},
//43ro poema
{
  titulo:"Solo quedate hasta hacerte feliz",
  contenido:"Quédate. Vamos, dime que sí. Quédate cuando yo dude de mí. Quédate cuando el mundo se me haga inmenso y me dé miedo salir. Quédate porque encontraste algo bueno, porque disfrutas y te hago feliz. Si en algún momento deja de serlo, solo huye de mí."
},
//44to poema
{
  titulo:"Por y Para tí",
  contenido:"Cuando la luna sea más fría, o el sol te quite la sed, cuando la lluvia nos empape, no importa dónde estés. Si la angustia te molesta y de nadie quieres saber, y cuando la felicidad te envuelva, ahí me vas a tener"
},
//45to poema
{
  titulo:"El lugar más hermoso simpre sera donte estes tú",
  contenido:"Si me vieras como yo te veo, entenderías que en un mundo de cuerpos  imperfectos, tú vuelves perfecto al tuyo, y no lo digo solo por tu piel o por esos ojos que brillan cuando me ven, es por cómo eres, la vida que le das, irradias magia, una esencia especial, y una belleza así es imposible de encontrar, por eso, mi niña, lo más bello y hermoso es poderte apreciar.Palabras para describirte no hay, por eso te pongo como ejemplo lo más hermoso que he podido apreciar. Comparo ojos con el resplandor dorado de los atardeceres más sublimes, tus manos con la suavidad y la delicadeza de las semás exquisitas, y tu voz con la armonía celestial de las mejores melodías. Tú no solo eres bella, eres amor, el ade mi vida y el mejor poema que pude encontrar.Al imaginar un ángel, solo pienso en ti. Ni mil flores se compararían a tu fragancia. Siempre la mejor melodía serávoz. Tus palabras reconfortantes son el refugio que me salva cuando el abismo me traga, y esos ojos que nunca puapartar de mi mente, son faros de luz que iluminan mi camino en la oscuridad más profunda; ni mil atardeceres jamásacercarán a su esplendor."
},
//46to poema
{
  titulo:"La estrella mas hermosa",
  contenido:"Contando estrellas me hallarás, pero falta una; y aunque la luna pregunta, no puedo revelar dónde está. Pues es mía, es la verdad, es mi princesa, mi niña y mi amor por la eternidad. Por eso, estrella mía, buenas noches y que tengas un hermoso descansar. Gracias por ser mi estrella fugaz y cumplir mi deseo de encontrar a una hermosa princesa."
},
//47mo poema
{
  titulo:"Eres mi todo",
  contenido:"Cuando me preguntan qué eres para mí, la respuesta más simple sería 'mi todo', pero te lo pongo más claro: en geografía, eres mi mundo; en historia, la reina de mi corazón; en matemáticas, la solución a mis problemas; en medicina, la cura para mis dolencias; y si hablamos de mitología, eres mi diosa y yo tu devoto. Para los astrónomos, eres mi universo, y en el arte, eres mi lienzo perfecto que se adapta a mi pincel."
},
//48vo poema
{
  titulo:"La esperanza halle en tí",
  contenido:"Sea de día, recién levantado y algo malhumorado; igual en mi mente estás. O en la noche, ya fatigado y algo golpeado por el día laboral, solo pensarte me relaja y al hablarte me recargo, y me dan ganas de mañana despertar."
},
//49no poema
{
  titulo:"Un mensaje para mi amor",
  contenido:"Es un mensaje de buenos días, desearía que vieras el más hermoso amanecer, pero ni siquiera eso se compara con la hermosura de este ser. Tus ojos brillan como el sol y tu sonrisa me brinda calor. Al final, no fue un mensaje, solo describí lo hermosa que te ves hoy. El cansancio me ganó, la rutina terminó mi día, pero mi princesa, la luz de mi mundo, me levanta. Sus risas y caricias son mi motor, y como agradecimiento no puedo hacer más que mostrar mi gratitud en versos y metáforas. La luna en tus pupilas está, y el brillo de una estrella tiene tu caminar. La magia de una diosa es tu amar, y todo eso tengo la dicha de disfrutar"
},
//50mo poema
{
  titulo:"Mi estrella fugaz",
  contenido:"Eres una estrella en mi vida, una luz en la noche más oscura. Solo pido que la estrella que me ilumina no sea fugaz, que se quede en mi cielo. Todas las noches, antes de irme a acostar, deseo mirarte, y entre besos y caricias, encontrar mi descanso después de un día tan largo. Al despertar, deseo que no sea el sol quien me levante, sino la luz de tu mirar."
},
//51ro poema
{
  titulo:"Mi metafora perfecta",
  contenido:"Metáforas y letras trato de encontrar para crear el poema perfecto, pero al mirarte me doy cuenta de que ya está, pues al mirarte no encuentro palabras para expresar lo que llegas a causar. Contigo solo siento y el tiempo queda atrás; todo pasa a segundo plano y ahí, en tus brazos, encuentro mi hogar. Tus labios que arden son donde me quiero quemar, y donde encuentro tus risas me quiero quedar. Y si la tormenta toma prisa y te quiere atrapar, recuerda que a mis brazos puedes volar."
},
//52do poema
{
  titulo:"Cortando distancias",
  contenido:"Latidos unidos por el hilo del destino, que con amor crecen y florecen solo al verte, y caminar de tu mano es mi más grande regalo; el tiempo ha hecho que la distancia ya no sea tan pesada, pues disfruto de verte aunque sea una vez a la semana."
},
//53ro poema
{
  titulo:"La historia sin final",
  contenido:"Sabes que me gusta leer, y aunque me falta mucho por aprender e historias por descubrir, solo quiero que la historia que estamos escribiendo no tenga fin. Habrá problemas, a veces parecerá que esto puede acabar, pero si tienes dudas y no quieres hablar, por más molesto que esté, solo pide que te abrace y ahí entenderás que, pase lo que pase, por ti voy a pelear."
},
//54to poema
{
  titulo:"Una princesa real",
  contenido:"En la sencillez yace su nobleza,   sin corona, princesa es,   en su ser, la realeza   sin caballero, dama sin estrés.   Ser ella misma, su fortaleza,   brilla con luz propia, ¡oh qué belleza"
},
//55to poema
{
  titulo:"El cuento mas bello",
  contenido:"En un mundo de sueños y encanto, tu mirada es el cuento más bello. La vida, contigo, es un viaje mágico, donde cada momento es especial. Entre risas y suspiros, te encuentro, en cada mirada, un universo. Juntos, tejemos la tela de los días, con hilos de amor y alegría. En el libro de nuestras vidas, tu nombre brilla como estrella guía. Un cuento, un sueño, hecho realidad, contigo, la vida es más que especial."
},
//56to poema
{
  titulo:"Altras mi reloj",
  contenido:"Bajo el ala del reloj, contemplo el vuelo del tiempo, A tu lado, sus alas son suaves y el viento es lento, Pero sin ti, el tic-tac se vuelve un lamento, Y el reloj se detiene, en un triste tormento. Cada segundo junto a ti, una melodía en mi pecho, Cada momento sin ti, un eco de un viejo despecho, En tu mirada encuentro mi norte, mi rumbo perfecto, Sin ti, el reloj se vuelve un enemigo infecto. En el abrazo del ayer, en el susurro del mañana, Tu presencia da sentido a la vida, mi sirena lejana, Sin ti, el tiempo se desvanece, sin rumbo ni ganas, A tu lado, el tiempo vuela, en un vuelo sin mañana"
},
//57mo poema
{
  titulo:"Tus pinceladas de amor ",
  contenido:"En el lienzo del tiempo,  tú pintas mis días grises,  con pinceladas de amor,  y versos que embellecen el corazón"
},
//58vo poema
{
  titulo:"Durmiendo junto a un angel",
  contenido:"Cuando en la noche encuentro tu aroma, ese que me embriaga y me invita a descansar, acompañado de la calidez, que solo en tus brazos puedo hallar, ahí son buenas noches, pues un ángel me acompaña y mis miedos se van.Dulce? Dulce es tu aroma, ese  dónde encuentro paz, calor? Calor solo hallo en tus brazos pues son mi escape de efría soledad, y la soledad, ella ya no está, pues sabe que contigo, ella aquí  ya no tiene lugar, y no se fue sola,llevó a tristeza y ansiedad dijo que eres tan buena que por un tiempo en mi no las vas encontrar  Mis miedos, si, ellos también se fueron, el miedo a darlo todo, pues estoy seguro que por ti  vale la pena arriesgporque si no es contigo, yo no quiero a nadie mas. "
},
//59no poema
{
  titulo:"Hablando con el corazón",
  contenido:"En el silencio de las palabras no pronunciadas, late un eco que susurra tu nombre. Es como si mi corazón, en un acto de valentía, se presentara ante ti con un sutil hola, mi niña. En ese instante, me pide que no sonrías, pues la sola visión de tu rostro acelera mi pulso y desata un frenesí en mi interior. Me confiesa que ya no hay vuelta atrás, que desde el momento en que decidiste posar tu mirada sobre mí, me convertiste en tuyo sin opción alguna. Y, sinceramente, no deseo escapar de este hechizo, porque al fin y al cabo, ¿quién querría huir de la felicidad?"
},
//60mo poema
{
  titulo:" Más halla de la magia",
  contenido:"Bajo la sombra de nuestra complicidad, tejiendo historias en un universo particular. En este cuento que entre ambos se cuela, hallé la dicha de un eterno amar. Te confieso, en letras trazadas con ternura, mi impulso de escribirte, de expresar mi sentir. En cada relato, en cada trazo de mi pluma, hallo la razón para contigo existir. Encontré en ti el anhelo de un mañana, un siempre que abarca más allá del tiempo. Contigo, descubrí la magia que emana de un amor que trasciende cualquier lamento."
},
//61ro poema
{
  titulo:"Escucha mi corazón",
  contenido:"¿Escuchas ese tucun tucun? Sí, sin duda es él. Se desespera cuando sabe que te voy a ver, ansioso por salir de mi pecho para poder contemplarte, para posarse en tus manos y dejarte claro que late únicamente por ti Hey, mira, ¿sabes dónde estás? No, me contesta, porque la tristeza le hace sentir mal. Mi pecho se abre y mi corazón empieza a hablar. Si el mundo te pone triste, te agobia y sientes que ya no quieres seguir más, recuerda que en mi pecho late con fervor mi corazón, que está dispuesto a lo que sea solo por verte feliz y mejor."
},
//62do poema
{
  titulo:"Mi sol en esta fria soledad",
  contenido:"Porque el mundo es así  El mundo es un invierno implacable, ese vasto exterior que me toca enfrentar. Sin embargo, tu amor y pasión son el sol que me brinda calor, iluminando mi camino y mostrándome que, contigo, este desierto helado puede florecer en primavera. Y tus besos me ayudan a sentir en paz y mejor, por eso, Si tus besos arden, quémame con pasión. Si tu boca es un veneno, déjame beber de ella y esperar el más grato final. Porque si un beso tuyo es la muerte, estaría gustoso de probarlo y tener un hermoso final"
},
//63ro poema
{
  titulo:"Vamos a mirarnos el alma",
  contenido:"¿Qué te parece si te invito a mirarnos el alma, a tocarnos donde nos marcaron, y dar un beso para su cicatrización, a besarnos sin control, dejando el tiempo en segundo plano, y dando paso a la pasión? Embriágame con tu canto, esa dulce melodía que es tu voz, cuéntame lo que encanta, y lo que detestas de tu alrededor"
},
//64to poema
{
  titulo:"Pedazo de cielo a mi lado",
  contenido:"Luna, deja de mirarla con tanta devoción. Sé que su belleza resplandece como la de una estrella que una vez iluminó los cielos, pero ahora es mía. Puedes estar tranquila, porque atesoraré el pedacito de cielo que me regalaste. Prometo cuidar de él con todo mi amor, apreciando cada destello y cada sombra, protegiéndolo con el mismo fervor con el que se cuida un sueño hecho realidad"
},
//65to poema
{
  titulo:"Mi vicio tu mirar",
  contenido:"Cómo extraño ese dulce atardecer; anhelo verlo otra vez. Aunque apenas ayer te vi, ya es un vicio perderme en tu mirar. Nunca me cansaré de contemplar esos ojos, de en su brillo eterno, mi reflejo hallar."
},
//66to poema
{
  titulo:"Gracias solo por estar",
  contenido:"Ven, dame la mano y no dejemos de intentar. Ven, mira mis heridas y con tu presencia sé que sanarán. Gracias por querer a alguien que es tan difícil de amar, gracias por quedarte cuando ni yo siento que por mi valga la pena luchar"
},
//67mo poema
{
  titulo:"Armando lo que la inseguridad rompio en mí",
  contenido:"Hey, ya vete, ya llevas demasiado tiempo habitando dentro de mí. La verdad, ya estoy harto. Pero no entiendo cómo sacarte de aquí; no puedo estar tranquilo, pues cuando sales, a quien amo llegas a herir. Maldita inseguridad, que no me deja seguir. Te presentas como una tormenta, pintando todo mi día soleado en un oscuro y nublado día gris. Destruyes el arcoíris que ella con tanto esmero pintó para mí, y ella, con tanta paciencia, retoma las piezas y lo vuelve a reconstruir. Y ahí, solo ahí, es cuando vuelvo a sonreír, pues hay alguien que, por más difícil que sea quererme, siente que vale la pena y no se rinde ante ti"
},
//68vo poema
{
  titulo:"Mi felcicidad habla de tí",
  contenido:"¿Por qué sales tan seguido? Ya llevo tiempo viéndote por aquí, le pregunté con curiosidad. Es que esa niña, tan preciosa y divina, como estrella brillante en la noche se adivina. Ella ilumina mi vida, mi sendero, y su risa es el sol que disipa mi desespero. Cada vez que la veo, mi corazón se enciende, en un ritmo alegre, en un latido que sorprende. Su presencia es la brisa que acaricia mi piel, el susurro del viento, el dulce sabor a miel. Es su amor la razón que me impulsa a salir, a buscarla en cada esquina, a soñar y a vivir. Ella es mi musa, mi poema sin fin, la melodía perfecta en mi canto matinal. Así que cuando me ves, es por ella que estoy aquí, siguiendo su luz, en un mundo de amor sin fin. Contesto mi felicidad  y me puse a sonreír "
},
//69no poema
{
  titulo:"Ojala pueda ser el dueño de tu corazón",
  contenido:"Toc, toc, toc, ¿me abres la puerta, por favor? Ya he decidido, quiero vivir en tu corazón, Entrar como dueño, ser tu única razón, De las risas y alegrías, de tu más profundo amor. Quiero ser el dueño de tus noches en desvelo, Donde la incomodidad y el pensar no te dejan soñar, Pues contigo, amor mío, yo te quiero acompañar, Para que sepas que a mi lado, nunca más estarás en duelo. Déjame ser el faro en tu oscuridad, El consuelo en tus lágrimas, la paz en tu ansiedad, Conmigo, solo amor y felicidad hallarás, Y en mis brazos, siempre segura estarás. Así que abre tu puerta, déjame entrar, Prometo ser tu apoyo, tu risa y tu paz, Juntos venceremos cualquier tempestad, Y en mi corazón, para siempre tú estaras"
},
//70mo poema
{
  titulo:"La causa de mi serotonina eres tú",
  contenido:"Gracias por la serotonina que en mi cuerpo haces brotar,   pues tomas mis penas, las ahuyentas, y las dejas atrás.   Sé que no soy el mejor poeta, ni el más romántico quizás,   pero cada palabra escrita en verso nace al verte a ti brillar. Eres mi musa, la única que me enseñó a amar,   la inspiración que mis días viene a iluminar.   Contigo mis sueños se hacen realidad,   y en tus ojos encuentro la pura felicidad. Por ti los días grises se tornan en color,   y cada noche oscura se llena de tu fulgor.   Eres la melodía que mi alma aprendió a entonar,   el susurro suave que mis penas viene a calmar. Gracias por ser la estrella en mi cielo a guiar,   por ser el latido que no deja de vibrar.   En tus brazos encuentro mi paz, mi verdad,   y en cada verso, nuestro amor quedará inmortalizado, sin más Mi serotonina se activa de inmediato,   cuando tu anatomía contemplo en lo alto.   En tus curvas, dispuesto a morir,   mi corazón pisa a fondo, empieza a latir.   Causas palpitaciones, un nuevo compás,   mi cuerpo en sintonía, una mágica paz.   Sin duda es magia, no hay otra verdad,   que en tu presencia encuentro mi felicidad."
},
//71ro poema
{
  titulo:"Días buenos o malos ahí quiero estar",
  contenido:"Aunque a veces un día gris mi compañía no pueda evitar, sea que disfrutemos del más hermoso arcoíris o que la tempestad no nos deje en paz, contigo siempre estaré, en cada instante, sin cesar, no solo en los días buenos, sino en los malos también te voy a acompañar. Cuando el sol brille y el cielo azul nos haga suspirar, o cuando las nubes oscuras intenten nuestro ánimo apagar, mi amor por ti será un refugio, un puerto al que puedas llegar, porque juntos enfrentamos todo, lo bello y lo que nos hace temblar. En cada risa, en cada llanto, en la calma y en el pesar, mi corazón a tu lado, con un abrazo te sabrá consolar, seré tu fiel compañero, en cualquier lugar y en cualquier azar, porque nuestro amor es fuerte, y juntos nada nos podrá separar."
},
//72do poema
{
  titulo:"Con ganas de tí",
  contenido:"Es otro día que me quedo con las ganas  De mirar tus ojos, y en tus brazos hallar mis mañanas.  Sé que esto es momentáneo, una breve tempestad,  Pues en un futuro tú serás la reina de mi hogar, mi eternidad.Aunque esta distancia no la disfrute, la puedo soportar,  Sabiendo que en el mañana, juntos nos vamos a despertar.  Tu amor es mi consuelo, mi fuerza en la soledad,  Y en tus abrazos, encontre la paz y la verdad.Cada noche sueño con tu piel, tan suave, tan cercana,  Y el dulce susurro de tu voz que mi corazón engalana.  Pronto serás mi reina, mi sol, mi amor eterno,  Y aunque el día de hoy no te pude apreciar, nuestro amor es tan tierno.En el horizonte veo nuestro futuro, brillante y sereno,  Y espero el día en que a tu lado despierte, sin más freno.  La distancia es solo un desafío, una prueba de este amor,  Que se hará más fuerte, más puro, lleno de fervor.Así, aguardo con paciencia, cada día un poco más,  Porque sé que al final, en tus brazos, encontraré mi paz.  Y mientras tanto, te sueño, te extraño, con cada despertar,  Sabiendo que un día, a tan bella reina encontrare en mi hogar"
},
//73ro poema
{
  titulo:"¿Como es que de mí te llegaste a enamorar?",
  contenido:"Conoces mi mundo, lo que quedó, cuando al borde del colapso mi alma cedió. Tú supiste salvarme, sin dudar, sin temer, has visto a mis demonios, y aún así, sigues en mi ser. Me miraste en mis sombras, me viste sufrir, y a pesar de todo, nunca te alejaste de mí. Ahora dime, amor, con toda sinceridad, ¿cómo es que de mí te llegaste a enamorar? En mis noches más oscuras, tu luz brilló, tu amor incondicional mi vida transformó. Conoces mis temores, mis heridas más profundas, y con cada caricia, mi alma fecunda. Tus palabras dulces, tu ternura sin igual, son las que me hacen soñar con un futuro ideal. Ahora dime, amor,  ¿cómo es que de mí te llegaste a enamorar, alma enamorada?"
},
//74to poema
{
  titulo:"No hay tristeza cuando estas tú",
  contenido:"Hoy no hay tristeza; al llegar tú, hizo maletas y se fue.  Aunque a veces regresa, su visita es breve,  pues entiende que mientras tú estés aquí,  ella no es bienvenida y debe partir.Se fue, se marchó, y por mucho tiempo ahí se quedó,  porque tu luz ilumina hasta el rincón más oscuro,  y tu presencia transforma mi mundo inseguro.Contigo, la alegría florece y el dolor se desvanece,  cada día a tu lado es un regalo, un presente,  y la tristeza, al verte, pierde su poder,  sabe que en tu abrazo no tiene lugar donde volver.Tu sonrisa es el sol que mi corazón calienta,  tu amor, la razón por la que el alma se alienta.  Gracias a ti, la melancolía no puede permanecer,  pues eres mi refugio, mi paz, mi renacer"
},
//75to poema
{
  titulo:"Conoces mis abismos",
  contenido:"Sé que no soy el mejor, que en mis manos, a veces, te hago daño sin querer, sin ninguna mala intención. Aunque has visto mis abismos y mi peor versión, siento tu amor en cada mirada, en cada canción. Tu sonrisa, como un rayo de sol en la tormenta, me hace olvidar el dolor que en mi alma se asienta. En tus o encuentro estrellas que guían mi camino, en tus brazos, el refugio donde hallo mi destino. Eres el faro en mi noche oscura, mi calma  en la tempestad, la melodía dulce que calma mi ansiedad. Con tu amor,  sombras se disipan, los miedos se desvanecen, y en tu luz, mis sueños renacen y florecen. Eres mi paz, mi cielo estrellado, la esperanza que nunca he dejado. Por ti, sigo soñando con un mañana brillante, donde el amor sea nuestro eterno estandarte."
},
//76to poema
{
  titulo:"Tú tristeza es mía",
  contenido:"Sé que te amo, esa es mi verdad, soy un cobarde que le huye a la tristeza  Pero si tú te pones triste, amor mío, tomaré tu tristeza, la haré mía, pues el El frío no te puede atormentar  No quiero verte llorar, ni un instante, pues tu sonrisa es mi faro constante. Seré tu refugio, tu abrigo en tormenta, el que a tu tristeza siempre enfrenta. Cada lágrima tuya, en mi pecho se posa, convertiré en risa tu pena dolorosa. Déjame ser el sol que tu noche ilumina, el que en tus días oscuros, la esperanza destina. Por ti, cruzaría mares y montañas, cambiaría la tristeza por mil caricias y entrañas. Quiero ver tus ojos brillar como estrellas, y sentir que en tus labios, florecen centellas. Eres mi sueño, mi anhelo profundo, la razón por la que enloquezco y me hundo. En cada latido, en cada suspiro, estás tú, mi amor, mi único delirio. Así que si alguna vez la tristeza te invade, déjame ser el que de tu lado no se aparte. Tomaré tu dolor, lo haré mío sin miedo, para que tú, mi vida, encuentres en mí tu cielo"
},
//77mo poema
{
  titulo:"De a buneas y de a malas",
  contenido:"Niña de mi vida, niña que me enamoró, Quiéreme en las buenas y cuando el dolor me nubló. Cuando no sepa cómo llamar tu atención, Quiéreme en mi sonrisa y en mi confusión. Ámame de verdad, sin reservas ni temor, Date la oportunidad de entregarlo todo, por favor. Pues te aseguro, mi amor, que yo lo hago sin vacilar, Y aunque temo que alguien te pueda robar. Darte todo es mi forma de demostrar, Cuánto te ama este simple mortal. En cada suspiro, en cada despertar, Eres mi sol, mi luna y mi estrella polar. Cuando la risa me cueste y el llanto me alcance, Sé mi refugio, sé mi mejor chance. Pues en tu abrazo encuentro la paz, En tu amor, mi alma se siente capaz. Así que, niña de mis sueños y anhelos, Deja que este amor nos eleve como velos. Que nuestra pasión sea un fuego inmortal, Tú y yo, juntos, en un amor celestial. "
},
//78vo poema
{
  titulo:"Mí amor por tí",
  contenido:"Es un secreto a voces, en cada rincón conocido, No hay alma que lo ignore, ni corazón que lo haya omitido. Pero si acaso lo olvidas, déjame recordarte, Que este simple humano, sin grandezas a su parte, Te ama con una fuerza que nunca había sentido. Con cada amanecer, en cada tenue rayo, Te llevo en mi pecho, eres mi dulce desmayo. Sin ser impresionante, ni tener brillo deslumbrante, Mi amor por ti crece, es constante y galopante. Eres la musa que inspira mis sueños y anhelos, El faro que me guía en mis días más desvelos. Te amo con una pasión que no tiene medida, Como nunca antes había amado en mi vida. Cada latido de mi corazón susurra tu nombre, Eres el fuego que arde en este humilde hombre. Déjame amarte, sin reservas ni temor, Porque en ti he encontrado mi verdadero amor. Si alguna vez dudas o te sientes perdida, Recuerda que mi amor por ti nunca decaerá en esta vida. Te amo con un fervor profundo y eterno, Y siempre te amaré, más allá del tiempo y del invierno."
},
//79no poema
{
  titulo:"Mí mundo sin tí",
  contenido:"Imagina un mundo sin belleza, sin brillos, Donde los sueños se pierden en sombríos pasillos, Un lugar sin amor, sin gestos tan tiernos, Donde el alma se enfría en inviernos eternos. Así era mi mundo, un desierto de pena, Hasta que apareciste, mi dulce sirena, Con tu atención, tu risa y tu voz melodiosa, Hiciste florecer mi vida, radiante y hermosa. Todo era gris, sin color, sin sentido, Hasta que te encontré, y todo ha revivido, Tu amor trajo colores, tan vivos, tan puros, Pintando mi vida con matices seguros. Cada gesto tuyo, una caricia al viento, Cada palabra, un susurro de aliento, Has llenado de luz mis oscuros rincones, Convirtiendo mis penas en dulces canciones. Tú eres mi sol, mi luna, mi estrella, En este mundo que ahora es tan bello, Gracias a ti, todo tiene razón, Eres la musa que inspira mi canción."
},
//80mo poema
{
  titulo:"Me disculpo por llegar a desordenar",
  contenido:"Por favor, disculpa si llegué a tu mundo y lo puse de cabeza, sin pedir permiso, sin previo aviso, sin tu promesa. Sé que es difícil adaptarse a alguien que busca cambiar, pero aún estoy perdido, sin saber qué quiero lograr. En mi caos, tú, princesa, trajiste dulce orden, tu sonrisa y ternura, mi corazón desborden. Me enseñaste una rutina, una nueva realidad, que contigo a mi lado, es pura felicidad. Perdón por alterar tu vida sin previo aviso, es que tú lo hiciste primero, y yo te sigo. Pensé que tal vez, como a mí me fascinó, a ti también te encantaría este amor que nos unió. Si me dejas seguirte, prometo hacerte soñar, con un mundo de amor donde solo tú y yo podemos volar. A tu lado, cada día se convierte en poesía, una melodía de amor, de alegría y fantasía. Perdón si tu mundo trastorné sin preguntar, es que en tu desorden, encontré mi hogar. Y si te atreves a soñar y volar conmigo, seremos dos almas, en un eterno abrigo. Así que, princesa, te pido una oportunidad, de convertir nuestro caos en pura felicidad. Con rimas y versos, te expreso mi sentir, eres mi musa, mi razón para vivir. Y amor, no importa si estás feliz, triste o enojada, de todas formas te ves hermosa, amada. Pero mi forma favorita de verte, sin dudar, es cuando estás feliz, cuando te veo brillar."
},
//81ro poema
{
  titulo:"Quisiera ser ese arista que logre deslumbrarte",
  contenido:"Princesa de mi cuento, ya es hora de partir, Disfruto ser el pincel que, sobre tu piel, arte va a esculpir. Disfruto imaginarte y solo con pensarte, Versos puedo dedicarte, amor puro y constante. Quisiera ser poeta, completo y sincero, Y con mis poemas, hacerte volar ligero. Quisiera ser cantante y a tu oído regalar, Una melodía dulce, que te haga soñar. Quisiera ser pintor y con un cuadro retratar, La belleza infinita que en ti puedo encontrar. Quiero ser tu guardián, la persona que, aunque algo torpe, Siempre te considera su más preciada joya y norte, y de tu mano caminar así el futuro que aunque sea duro contigo amor quiero estar  Y aunque aún no es el momento, ansío el día especial, Cuando en mi cama te vea, al despertar, mi ideal. Hasta entonces, con cada verso, con cada sueño, Te guardo en mi corazón, mi amor eterno y pequeño."
},
//82do poema
{
  titulo:"El Atardecer de Tu Mirada",
  contenido:"Cuando el reloj marca la hora de partir,  el sol empieza a dibujar su despedida,  y mis pasos cansados encuentran alivio,  como quien se encamina a casa, al fin.Tus ojos, dos soles en el horizonte,  prometen el calor que anhela mi ser,  como el cielo teñido de fuego y calma,  donde el día se rinde a la noche serena.En cada paso hacia ti, siento el peso  de las horas disiparse en el viento,  y mi alma, como el cielo al atardecer,  se tiñe de paz, de promesas cumplidas.Tus brazos, mi refugio al final del día,  como el hogar que aguarda con su abrazo,  y en tu risa, el canto de los pájaros  que celebran el descanso merecido.Así, en tu amor encuentro la tregua,  como quien llega a casa tras la jornada,  y en tus besos, el suave atardecer  que anuncia la calma, la paz renovada."
},
//83ro poema
{
  titulo:"Tu mi magía en este mundo tan real",
  contenido:"Te miro y sonrío; al tocarme, me haces sentir especial.  La magia despierta y empieza a brillar.  Tus ojos son estrellas que guían mi camino,  en tu risa encuentro el refugio divino.Te beso y espero en tu corazón poder habitar.  No hay mujer en el mundo tan especial.  Mi niña, acepta ya que este loco poeta te ama sin igual.  Espero tenerte por la eternidad"
},
//84to poema
{
  titulo:" Mí mas hermosos amanecer",
  contenido:"En el día cansado, golpeado por la jornada laboral, cuando la confusión me embriaga y la frustración se apodera, ahí, en medio del caos, te encuentro. Eres el atardecer que pinta de oro el cielo, la última luz que acaricia el día con ternura. Cuando la noche se cierne y el mundo se aquieta, tu presencia es la promesa de un nuevo amanecer. Eres el amanecer que disipa la niebla, el primer rayo que ilumina mi alma. Tu amor es el alba que despierta mis sueños, el sol que calienta mis mañanas frías. Eres el refugio en la tormenta, la calma en la tempestad, un remanso de paz cuando no siento a nadie más. Eres ese rincón sereno donde mi alma descansa, la quietud que me envuelve y me libera de la carga. Eres el susurro suave en mis noches intranquilas, el abrazo silencioso que todo lo sana. En tus brazos encuentro la paz, en tu presencia, el descanso, y así, entre metáforas y sueños, me devuelves la esperanza."
},
//85to poema
{
  titulo:"El arte de ser encuentro en usted ",
  contenido:"Eres arte, no solo por tu belleza física, eres la pintura que aquel artista incomprendido decidió pintar con tal devoción, que al apreciarla, no solo ves el dibujo, sino su emoción. Eres canción, y no esa canción con melodía pegajosa que ahora está de moda, no, eres esa canción que escuchas una vez y es suficiente para entender que letras como esas son difíciles de encontrar y entender, y espero con esto puedas comprender, que eres musa, sirena y mi mujer"
},
//86to poema
{
  titulo:"¿Comó fue?",
  contenido:"¿Cómo fue que sin conocerte tomaste mi ser, mi alma, mi mente, y mi corazón al revés? Ha pasado un año desde aquel momento, esta noche agradezco por ser mi aliento. Quisiera no ser tan cobarde y en tus oídos, dedicar estos versos mientras siento tus latidos. Tu aroma, tu cuerpo, todo en ti aprecio, sabes que eres mi reina, mi princesa, mi anhelo. Eres mi luz, mi confidente, mi mujer, agradezco cada día por tenerte con placer."
},
//87mo poema
{
  titulo:"La soledad ya no estas desde que estas",
  contenido:"Ya sea que estés presente en la habitación o no, desde que te conocí, sentirme solo ya no es una opción. A pesar de la distancia que me obliga a dormir sin tu calor, tus palabras y mensajes diarios siempre llegan a mi corazón. Pensarte es mi recordatorio constante de cuánto agradezco tener a mi lado a una mujer tan real, auténtica y radiante, gracias a la vida."
},
//88vo poema
{
  titulo:"Avisle a la luna",
  contenido:" Buenas noches, ¿cómo estás?   ¿Ya le has dicho a la luna    que ya no volverás,   que tu brillo es solo mío   y en mis noches solo brillarás? Que ahora brillas para mí   y aunque sea egoísta,   no te dejaré partir,   pues tu luz es mi guía,   mi estrella en la noche oscura y fría"
},
//89no poema
{
  titulo:"Quiero un beso porfavor",
  contenido:" Un beso se da con los labios. Pero cuando se ama, se siente con el corazón, y con razón, el mío late a mil cuando te lo doy. Quiero un beso no solo hoy, ni mañana, lo quiero siempre, ya sea en la noche o en la mañana, ya sea para descansar, o que con tus labios empiece mi mañana."
},
//90mo poema
{
  titulo:"Mirame como a nadie más",
  contenido:"Mira hacia mi, pero hazlo como si no vieras a nadie más, Porque tu mirada cálida es algo que no puedo dejar de apreciar, es donde encuentro consuelo, es mi refugio  encuentro mi hogar, Tócame, y mientras lo haces, prométeme la exclusividad Porque tus caricias y besos,  sanan mis heridas y me ayudan a levantar, Quiero compartir contigo mis alegrías, Pero promete que cuando caiga no te marcharas, que así como apareciste cua la soledad me ahogaba y no podía respirar, así como rompiste mis cadenas, y me enseñaste lo que es amar, qued aunque páresca que no me pueda salvar"
},
//91ro poema
{
  titulo:"Tomame",
  contenido:"Acércate y tómame, toma mis manos, toma mi alma, toma mi ser. Te pertenezco, eso lo tienes que entender. En tus manos cuelga mi vida, en tus manos encuentro mi bien. Mi corazón ya no es mío, dejó de serlo cuando te empecé a ver. Lo robaste, bueno, ni eso, él se salió de mi pecho y se postró ante tus pies. En ti encontró consuelo y ahora quiere vivir contigo, quiere apreciar tu ser"
},
//92do poema
{
  titulo:"Tu mi todo",
  contenido:"Puede que no posea riquezas ni tesoros,  pero cuando estás a mi lado, siento que lo tengo todo.  ¿Cómo podría no ser feliz,?si en cada uno de tus abrazos encuentro el consuelo y la calma  Tus brazos son mi refugio, mi hogar en medio del caos,  y en ellos hallo la paz que no puedo encontrar en ningún otro lugar.  ¿Cómo no mejorar cada día?si tu presencia en mi vida la convierte en algo tan real y vibranteTu amor transforma mis días grises en coloridos paisajes,  y me enseña que la verdadera riqueza está en la conexión sincera.  Con cada sonrisa tuya, cada gesto, cada palabra,  mi vida se vuelve más auténtica, más llena de significado.  Así que a pesar de las carencias materiales,  me siento pleno y agradecido,  porque en tu amor y compañía descubro un mundo entero,  y en tu abrazo encuentro todo lo que necesito para ser feliz"
},
//93ro poema
{
  titulo:"Caminemos despacio de la mano amor",
  contenido:"Hey, detente, camina lento que quiero apreciar tu olor. Vamos despacio, que de por sí el tiempo va rápido cuando estoy contigo. Así que, si el tiempo no se detiene, hagámoslo los dos, y así, si él decide seguir, quedémonos disfrutando el resto de nuestras vidas este amor."
},
//94to poema
{
  titulo:"Tu mirada mi mundo",
  contenido:"Se dice que un rey es el dueño del mundo, y al mirar tus ojos, siento que ya soy uno.  Me preguntarás por qué, de eso estoy  seguro  , y como un poeta inexperto ,te describo que es porque en ellos encuentro mi reino y veo mi futuro."
},
//95to poema
{
  titulo:"Mi camino oscuro se ilumina cuando estas",
  contenido:" En un camino oscuro me encuentro andando solo, y es solo por ti que no me siento así. Y así de cero pintaste paisajes donde no había nada, y de la nada te volviste mi todo. Todo lo bueno que hay es por ti. Por ti siento que soy feliz con lo que hay por aquí."
},
//96to poema
{
  titulo:"Amar es verte reir",
  contenido:"Si entiendo lo que es amar,   es verte feliz, sonreír,   y en tu risa encontrar mi paz,   es un mundo nuevo construir. Es saber que estás bien,   y que en cada batalla,   mi apoyo no tiene fin,   mi lealtad no se halla en vallas. Cuando el mundo está en tu contra,   no estarás sola en tu lucha,   en el campo de batalla,   mi presencia se escucha. En cada obstáculo, en cada pena,   en cada sueño que quieras alcanzar,   seré tu sombra y tu estrella,   y en tu vida, siempre estaré para amar Si creo que entiendo lo que es amar, creo que es verte feliz, sonreír, y así mi mundo se vuelv levantar. Es saber que estás bien y que cuentas conmigo para cualquier batalla que quie enfrentar. Que si el mundo está en tu contra, no estás sola, y en el campo de batalla me encontrarás"
},
//97mo poema
{
  titulo:"No puedo dejarte de pensar",
  contenido:"Pensarte es necesario cuando no estás; tu ausencia se convierte en un eco constante en mi mente. Hoy, que estás aquí, no encuentro otra forma de expresar lo que siento sino a través de palabras, antes de que el sueño me envuelva. Cada letra es un intento de capturar la esencia de tu presencia y mi deseo de que te quedes, eternamente presente en mi vida.Gracias por ser mi musa y mi luz en la oscuridad, por iluminar mis días y darle significado a noches. En tu compañía encuentro la inspiración y la claridad que me faltan en la soledad. Quepresencia nunca se apague y siempre seas la guía que ilumina mi camino"
},
//98vo poema
{
  titulo:"Te quiero ",
  contenido:"Te quiero de a buenas y de a malas también,   te quiero, con plata y cuando nos falte el pan.   Te quiero como quieren los pobres,   sea en la salud o en la enfermedad.   Te quiero así porque, así como aman los pobres, es el amor   que nunca te va a dejar.   Aunque la riqueza salga por la puerta   y el hambre empiece a entrar,   ten por seguro que conmigo siempre vas a contar."
},
//99no poema
{
  titulo:" Vamos a comernos con amor",
  contenido:"Contigo, el sexo deja de ser solo eso y se convierte en amor. Más que eso, es una receta, una de esas antiguas que toma su tiempo para estar lista. Su cocción es a fuego lento, y cada momento en el que espero estar dentro hace que la sensación se intensifique aún más.Por eso en esta noche te pregunto cuando volveremos a cocinar "
},
//100mo poema
{
  titulo:"Reyna de mis letras y mi corazón",
  contenido:"Reyna no solo de mi corazón, sino también la dueña de estos textos, estos en que solo muestro, lo afortunado que me siento al poder llamarte amor, y esa es la razón, por la cual a diario, reviso mi diario,  y veo como mi corazón escribe por vos,Feliz cuando te ve, y triste cuando se va, y regresando a casa me reprocha el porque no nos quedaun ratito más"
},
//101ro poema
{
  titulo:"Esperando para despertar a tu lado",
  contenido:"Espero con ansias el día en que dormir a tu lado sea una realidad! Para en la noche, como un guardián leal, ponerte en mis brazos y que en mi pecho te puedas acurrucar! Acariciar tu cabeza y, como una obra de arte, contemplarte mientras empiezas a descansar! Así, con la dicha de tenerte a mi lado, poder despertar!"
},
//102do poema
{
  titulo:"La inspiracion de mis días",
  contenido:"Se dice que en los ojos correctos uno puede ver arte, y ante mis ojos, tú eres una verdadera obra maestra. Eres el ser brillante que no solo me inspira a escribir poesía, sino también a seguir adelante cada día. Eres, sin duda, un ser perfecto y refinado, no solo por tu belleza que se revela a simple vista, sino también por la calidad de cada palabra y caricia que de ti recibo. Te admiro profundamente y te amo más de lo que las palabras pueden expresar. A través de este texto, quiero agradecerte por ser parte de mi historia, que antes era monótona y aburrida, hasta que llegaste tú para darle sentido y color a mi vida."
},
//103ro poema
{
  titulo:"De mi mente no te puedo sacar",
  contenido:"Dime qué voy a hacer si en mi mente estás, y no es que vayas y vengas, simplemente solo estás, y no me malinterpretes, no te quiero sacar, claro que no, si es lo único bueno que en mí puedo encontrar, entre pensamientos caóticos, entre el estrés y en muchos casos la ansiedad. Me alegra que te apoderes de mi mente, ya que gracias a eso en mi cabeza encuentro paz"
},
//104to poema
{
  titulo:"Un te quiero desde el corazón",
  contenido:"Te digo que te quiero, pero no es solo con la voz, y tú ya entendiste que lo dice el corazón. De corazón, cada 'te amo' es puro y sincero. Y siendo sincero, espero tenerte en las buenas, obvio que sí, y en las malas no huyas de mí."
},
//105to poema
{
  titulo:"Entre el rudio que me atormenta tu voz mi paz",
  contenido:"Cuando entre gritos busco el silencio, tu voz me da paz, es mi despertar, y despertar de este sueño que tengo contigo jamás, y así jamás te irás, pues en tus manos encontré refugio, en tus besos mi hogar, y en tu corazón es donde quiero habitar, y así con la mirada en el cielo gritar a los cuatro vientos lo que es el amor de verdad"
},
//106to poema
{
  titulo:"Lento lento amor",
  contenido:"Lento lento como hacerte el amor, es pasar mis deseos sobre tu interior, tocarle el alma y el corazón, y entre tus sábanas desenfreanrme hoy, está noche te apoderaste de mi mente, y de manera demente hoy me hace falta tus besos tu aroma y tu voz Lento, lento, como el ritmo de una pasión contenida,  Deslizo mis deseos, como tinta en una carta perdida,  Toco tu alma y tu corazón, en cada latido sin medida,  Y entre tus sábanas busco perderme, en una danza compartida.Esta noche, tu esencia se apodera de mi mente inquieta,  Como un fuego que arde sin freno, mi deseo se inquieta,  Anhelo tus besos, tu aroma, y esa voz que me despierta,  Cada pensamiento tuyo es una llama ardiente que nunca se aleja"
},
//107mo poema
{
  titulo:"Rosa Negra",
  contenido:"En el jardín de los sueños quebrados,  donde el tiempo se torna eterno y gris,  florece una rosa negra, solitaria,  bajo el manto de un cielo sin matiz.Sus pétalos, sombras de la noche,  sus espinas, susurros de dolor,  cada gota de rocío en su fragancia  es un lamento de amor y desamor.No es en su oscura esencia la maldición,  sino en la promesa de lo que se oculta:  un deseo de transformación y redención,  una historia que el corazón sepulta.Por cada rosa negra que en tus manos caiga,  encierra el misterio de un amor profundo,  donde el final y el comienzo se abrazan,  en el enigma de un ciclo sin mundo."
},
//108vo poema
{
  titulo:"En el vasto mundo a tu lado me hallo",
  contenido:"En el vasto mar de tu ser profundo, donde los sueños y deseos se encuentran, soy un iceberg, tranquilo y moribundo, que en tu amor inmenso se sustenta. Bajo el hielo frío de mi apariencia, se oculta un mundo ardiente y candente, donde la pasión se revela en presencia, como llamas ocultas en un océano latente. Solo tú, con tu cálido resplandor, has derretido mis capas de hielo, mostrando al mundo mi núcleo de amor, como el sol que en el polo descubre el cielo. Tu luz ha roto el hielo que me encierra, y en tu calidez, he aprendido a abrirme, como un iceberg en primavera que se desgarra, en tu presencia, me permito finalmente ser. En el vasto cielo de mi vida, tú eres mi estrella más brillante. Aunque los días puedan nublarse y las noches se tornen largas, quiero que sepas que cada instante a tu lado es un regalo que atesoro profundamente. Tus lágrimas son preciosas, y en cada una de ellas veo el reflejo de tu fortaleza y de la bell que llevas dentro. Aunque las sombras de la tristeza y la ansiedad te envuelvan, quiero ser la  que te guía, el refugio donde encuentras paz. Eres el latido de mi corazón, el susurro de mis sueños, y no hay nada que desee más que ve sonreír con la alegría que mereces. Mi amor por ti es infinito, y agradezco cada día que pasa juntos. Nunca olvides que, a pesar de las tormentas, siempre estaré a tu lado, dispuest sostenerte y a compartir cada momento de la travesía. Eres mi todo, y mi vida no sería completa sin ti. Gracias por ser tú y por permitir que forme pa de tu historia. Juntos, podemos enfrentar cualquier desafío, y cada día a tu lado es una bendición."
},
//109no poema
{
  titulo:"Tu en mi mente mi esperanza",
  contenido:"En cada pensamiento tuyo encuentro una chispa de esperanza que ilumina mi camino. Aunque la vida nos presente retos, saber que tengo a alguien tan maravilloso como tú en mi vida es la fuerza que me impulsa a seguir adelante. Tu presencia es el faro que guía mis días y tu amor, el aliento que renueva mi ánimo. Imagi nuestro futuro juntos me llena de una determinación renovada; tus sueños y los nuestros comparti son el motivo por el cual me levanto con esperanza cada mañana. Eres la razón de mi alegría y el motor de mi perseverancia. Cada momento contigo es un tesoro  valoro profundamente, y tu felicidad es mi mayor deseo. Estoy aquí para ti, siempre, para abraza en las dificultades y celebrar cada victoria, por pequeña que sea. Gracias por ser mi inspiración y por darme la motivación para seguir adelante. Eres mi vida, mi a y mi motivo para luchar."
},
//110mo poema
{
  titulo:"Quiero compartir mí tiempo contigo",
  contenido:"Tiempo compartido, momentos de amor, Con cada segundo, mi corazón late más fuerte. En tu presencia, todo brilla con más luz, Y mi alma se llena de alegría y calor. Cada instante contigo es un regalo divino, Un tesoro que atesoro en lo profundo de mi ser. Tu sonrisa es el sol que ilumina mi día, Y tu amor es el aire que me hace vivir. Así que gracias, mi amor, por estar aquí, Por compartir conmigo tus momentos más queridos. Eres la melodía que hace cantar mi corazón, Y contigo, todo es más bello y verdadero."
},
//111ro poema
{
  titulo:"",
  contenido:""
},
//112do poema
{
  titulo:"",
  contenido:""
},
//113ro poema
{
  titulo:"",
  contenido:""
},
//114to poema
{
  titulo:"",
  contenido:""
},
//115to poema
{
  titulo:"",
  contenido:""
},
//116to poema
{
  titulo:"",
  contenido:""
},
//117mo poema
{
  titulo:"",
  contenido:""
},
//118vo poema
{
  titulo:"",
  contenido:""
},
//119no poema
{
  titulo:"",
  contenido:""
},
//120mo poema
{
  titulo:"",
  contenido:""
},
//121ro poema
{
  titulo:"",
  contenido:""
},
//122do poema
{
  titulo:"",
  contenido:""
},
//123ro poema
{
  titulo:"",
  contenido:""
},
//124to poema
{
  titulo:"",
  contenido:""
},
//125to poema
{
  titulo:"",
  contenido:""
},];