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
  titulo:"",
  contenido:""
},
//62do poema
{
  titulo:"",
  contenido:""
},
//63ro poema
{
  titulo:"",
  contenido:""
},
//64to poema
{
  titulo:"",
  contenido:""
},
//65to poema
{
  titulo:"",
  contenido:""
},
//66to poema
{
  titulo:"",
  contenido:""
},
//67mo poema
{
  titulo:"",
  contenido:""
},
//68vo poema
{
  titulo:"",
  contenido:""
},
//69no poema
{
  titulo:"",
  contenido:""
},
//70mo poema
{
  titulo:"",
  contenido:""
},
//71ro poema
{
  titulo:"",
  contenido:""
},
//72do poema
{
  titulo:"",
  contenido:""
},
//73ro poema
{
  titulo:"",
  contenido:""
},
//74to poema
{
  titulo:"",
  contenido:""
},
//75to poema
{
  titulo:"",
  contenido:""
},
//76to poema
{
  titulo:"",
  contenido:""
},
//77mo poema
{
  titulo:"",
  contenido:""
},
//78vo poema
{
  titulo:"",
  contenido:""
},
//79no poema
{
  titulo:"",
  contenido:""
},
//80mo poema
{
  titulo:"",
  contenido:""
},
];