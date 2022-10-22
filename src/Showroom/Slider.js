import SimpleImageSlider from "react-simple-image-slider";
import panadol from '../image/panadol.png'
import gestid from '../image/gestid.jpg'
const images = [
    { url: panadol },
    { url: gestid },
];

export default function Slider() {
    return (
        <div>
            <SimpleImageSlider
                width={200}
                height={204}
                images={images}
                showBullets={false}
                showNavs={true}
                slideDuration={0.5}
                navStyle={2}
                navSize={25}
                navMargin={0}
                loop={true}
                autoPlay={true}
                bgColor={'ffff'} />
        </div>
    );
}