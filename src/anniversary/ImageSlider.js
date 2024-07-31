import ImageContainer from "./ImageContainer";

import hellokitty from './images/decoratives/hellokitty.png';
import cutelazo from './images/decoratives/cutelazo.gif';
import flower from './images/flower.gif';
import cutecat from './images/decoratives/cutecat.gif';
import cuteheart from './images/decoratives/cuteheart.gif';
import cutehellokitty from './images/decoratives/cutehellokitty.gif';
import dogass from './images/decoratives/dogass.png';
import heart from './images/decoratives/heart.png';
import penguin from './images/decoratives/penguin.png';

import datelaprimera from './images/datelaprimera.jpg';
import sillyselfie from './images/sillyselfie.jpg';
import sillyselfie2 from './images/sillyselfie2.jpg';
import sillyselfie3 from './images/sillyselfie3.jpg';
import date1ginkgo from './images/date1ginkgo.jpg';
import date3 from './images/date3.jpg';
import date5matching from './images/date5matching.jpg';
import date6sunset from './images/date6sunset.jpg';
import date7 from './images/date7.jpg';
import date8 from './images/date8.JPG';
import drunknights from './images/drunknights.jpg';
import eat1 from './images/eat1.jpg';
import eat2 from './images/eat2.jpg';
import gaming from './images/gaming.jpg';
import makefoodpizza from './images/makefoodpizza.jpg';
import shopping from './images/shopping.jpg';
import trip1 from './images/trip1.jpg';
import trip2 from './images/trip2.jpg';
import videocall from './images/videocall.jpg';


export default function ImageSlider(){
    
    return (
        <div className="main-container w-full flex flex-row gap-8 overflow-y-auto whitespace-nowrap scrollbar-hide py-8 items-center">
            <ImageContainer image={datelaprimera} isSlider={true} caption={"Citas románticas!"} decoration={hellokitty} isLeft={false} />
            <ImageContainer image={date8} isSlider={true} caption={"Ver peli juntos"}/>
            <ImageContainer image={sillyselfie} isSlider={true} caption={"Hacerel tonto juntos jeje"} />
            <ImageContainer image={date6sunset} isSlider={true} caption={"Ver sunset juntitos"} decoration={cutehellokitty}/>
            <ImageContainer image={trip1} isSlider={true} caption={"Viajar juntos"} decoration={penguin}/>
            <ImageContainer image={date5matching} isSlider={true} caption={"Ir de matching"}/>
            <ImageContainer image={gaming} isSlider={true} caption={"Gaming👾"} decoration={heart} isLeft={false}/>
            <ImageContainer image={eat1} isSlider={true} caption={"COMER!"}/>
            <ImageContainer image={date1ginkgo} isSlider={true} caption={"Cenas románticas"} decoration={dogass}/>
            <ImageContainer image={makefoodpizza} isSlider={true} caption={"Hacer comida juntos en casa"}/>
            <ImageContainer image={shopping} isSlider={true} caption={"Shopping en el super"} decoration={cuteheart}/>
            <ImageContainer image={sillyselfie2} isSlider={true} caption={"hacer deporte juntos"} isLeft={false}/>
            <ImageContainer image={trip2} isSlider={true} caption={"Viajar juntos x2"} decoration={flower}/>
            <ImageContainer image={videocall} isSlider={true} caption={"Sacar este tipo de fotos JAJA"}/>
            <ImageContainer image={date7} isSlider={true} caption={"Ir a exhibiciones"} decoration={cutelazo} isLeft={false}/>
            <ImageContainer image={sillyselfie3} isSlider={true} caption={"Dormir juntos"}/>
            <ImageContainer image={eat2} isSlider={true} caption={"MÁS COMIDA"} decoration={flower}/>
            <ImageContainer image={drunknights} isSlider={true} caption={"Noches de borrachera"} isLeft={false}/>
            <ImageContainer image={date3} isSlider={true} caption={"Citas de inviernoooo"} decoration={cutecat}/>



            
            
      
        
        </div>
    );
}