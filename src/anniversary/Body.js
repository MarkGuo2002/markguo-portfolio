import ImageContainer from './ImageContainer';
import ImageSlider from './ImageSlider';

import bestgift from './images/bestgift.jpg';
import cutelazo from './images/decoratives/cutelazo.gif';
import flower from './images/flower.gif';
import cutecat from './images/decoratives/cutecat.gif';

import first from './images/first.jpg';
import first2 from './images/first2.jpg';
import videocall2 from './images/videocall2.PNG';
import sillyselfie4 from './images/sillyselfie4.jpg';


export default function Body() {
    return (
        <div className='main-container flex flex-col gap-20 w-full items-center'>
            <div className='flex items-center justify-center flex-wrap gap-12'>
                <ImageContainer image={first} decoration={cutecat} />
                <ImageContainer image={first2} decoration={flower} isLeft={false} caption={"Mi niña viendo pececitos"}/>
            </div>
            <p data-aos="fade-down" data-aos-delay="300" className='intro text-base lg:text-xl'>
            <span className='text-3xl'>T</span>e acuerdas de estas fotos? Siendo tú seguro que sí jeje, es una pregunta que sobra un poco… Aún me acuerdo de ese primer día la vergüencita que me daba al sentar a tu lado y sacar fotos juntos, sentado al lado de una chica tan linda. Fue un día increible e inolvidable: las fotos que hicimos, nuestro viejo amigo señor meador, MariLing Monroe comiendo helado, visita al acuario, paseo nocturna por la playa… ¿Qué es lo que ha faltado ese día? Pensandolo ahora, quizás cogerte las manos cuando estábamos por la playa :P 
La verdad es que antes de que quedásemos ya pensaba en podríamos tener algo jeje, pero después de esos dos días en Gijón, ese ‘podríamos tener’ se convirtió en ‘tendremos’. Tras un casi un mes hablando todos los días, este mismo día pero hace un año, recibí el mensaje más bonito de mi vida… Sentía cosquillas en la tripa cuando leía tu mensaje, recuerdo que estaba muy feliz, ¿A la vez con un poco de preocupación quizás? Ya que en esa época ya sabes, sentíamos que nos conocíamos poco tiempo. Hicimos una apuesta, apostando por nuestro futuro. Sin embargo después de un año entero, creo que hemos ganado la apuesta juntos. 

            </p>
            <div className='second-p flex lg:flex-row flex-col gap-8 items-center lg:items-start'>
                <div>
                    <ImageContainer isSlider={true} image={videocall2} decoration={cutelazo} caption={"Captura de la chica más linda del mundo"}/>
                </div>
                <div data-aos="fade-down" data-aos-delay="300" className='flex flex-col items-center w-auto gap-8'>
                    <p className='text-base lg:text-xl'>
                    Después de un año lleno de videollamadas (capturas), citas románticas, noche de chateo, manoseos…. Sigo pensando de que eres la chica más romántica, 
                    empática, linda, mona y lista; además, hasta ahora nunca he sentido de que no eres suficiente para mí o alguna tonteria estas tuyas 😊. Siempre he 
                    sentido de que yo no soy lo suficientemente bueno para ti, soy cada vez más informático, me preocupo cada vez menos en mi físico, te maltrato, no estoy
                    a tu nivel como persona… En fín, son cosas que suelo pensar de vez en cuando. No sé si tu me ves igual de bien como hace un año cuando me mandaste aquel 
                    mensaje, sé que probablemente que no, ya que has visto demasiadas partes negativas de mí en este año tan estresante que tuve… Pero bueno, iré mejorando 
                    en todos los aspectos que me digas amorcete 🥺 Gracias por tener tanta paciencia en mí y seguir amándome…
                    </p>
                    <p className=' text-primary text-2xl text-center'>Pronto seré tu CARTERA!!! SIUUUUUUUUUUUUUUUUU~</p>

                </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300" className='third-p flex flex-col-reverse lg:flex-row gap-8 items-center lg:items-start'>
                <div className='flex flex-col items-center w-auto gap-8'>
                    <p className='text-base lg:text-xl'>
                    Sé que no ha sido un año fácil, ni para ti ni para mí, hemos tenido momentos de muchas risas, pero también de lágrimas… ¿Pero nunca hay amor 100% perfecto desde el principio 
                    verdad? Estoy dispuesto a estar toda la vida estudiandote para darte lo mejor y también lo mejor para la familia que formaremos en nueve años 
                    (10-1=9! Ya estamos más cerca de tener hijos baby).
                    <br></br>Estoy muy seguro de que si este año no estuvieras a mi lado, me habré pegado un tiro ya seguramente… Hasta ahora siento culpable por no haberte 
                    tratado mejor por todo el tema de trabajo y tal, es que tengo tantas ganas de ser tu cart… o sea tantas ganas de pasar una buena vida contigo, ya que esa es la vida que te mereces tener. 
                    <br></br>Después de dar una vuelta por la galería de fotos del móvil, para ver tantos momentos bonitos que hemos pasado juntos… De verdad te lo digo amor: 
                    

                    </p>
                    <p className='text-xl mt-12'>Quiero que tengamos,</p>
                    <p className='text-2xl'>Quiero que tengamos…</p>

                </div>

                <div>
                    <ImageContainer image={sillyselfie4} decoration={cutelazo} isLeft={false} caption={"Selfie de dos babies"}/>
                </div>
            </div>
            <div data-aos="fade-down" data-aos-delay="300" className='flex items-center flex-col'>
                <h1 className='text-primary text-center'> Quiero que tengamos más momentos de...🥺❤️</h1>
                <p className='text-zinc-400 italic'> Desliza para ver más fotitos jiji(*/ω＼*)</p>
            </div>
            <div className='flex flex-col w-full'>
                <ImageSlider />

            </div>

            <p data-aos="fade-down" data-aos-delay="300" className='intro text-base lg:text-xl'>
            Bueno, como ves, ya que tenemos que repetir tantos momentos juntos y probar nuevas experiencas, ¿Tendrás que estar a mi lado para siempre verdad? si no no nos da la vida jejeje...<br></br>
            Como ves, esta vez no te he escrito una carta, no sé si te gustará… Sé que no soy muy bueno escribiendo cartas románticas en español (ahora creo que en chino tampoco JAJAJA) 
            y tengo una letra de… MIERDA. Por eso pensé en hacerte esta página web para al menos fingir que tengo buena letra jejeje, espero que te guste mi baby. Y voy a rezar a que no me hayas 
            preparado ningún regalo, porque TÚ ya eres el mejor regalo que he recibido en mi vida... <br></br><br></br>¿Qué? No me crees? Entonces explícame la siguiente foto:
            </p>
            
            <ImageContainer image={bestgift} decoration={cutelazo} caption={"El mejor regalo no exi..."}/>
            <div className='relative flex flex-col'>
                <h1 data-aos="fade-down" data-aos-delay="300" className='text-primary text-center py-12 lg:py-24 px-12 lg:px-96 text-2xl lg:text-4xl'> Ling, te amo con todo mi corazón... Sigamos juntos hasta que nuestras almas desaparezcan de este mundo 💕 </h1>
                <p data-aos="fade-down" data-aos-delay="500" className='text-primary text-right text-xs'>~Tu cuchurrumin de fresa<br></br>3 de Agosto de 2024</p>

            </div>
        </div>
    )
} 