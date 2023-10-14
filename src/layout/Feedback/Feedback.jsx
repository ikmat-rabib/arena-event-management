
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const WheelControls = (slider) => {
    let touchTimeout
    let position
    let wheelActive

    function dispatch(e, name) {
        position.x -= e.deltaX
        position.y -= e.deltaY
        slider.container.dispatchEvent(
            new CustomEvent(name, {
                detail: {
                    x: position.x,
                    y: position.y,
                },
            })
        )
    }

    function wheelStart(e) {
        position = {
            x: e.pageX,
            y: e.pageY,
        }
        dispatch(e, "ksDragStart")
    }

    function wheel(e) {
        dispatch(e, "ksDrag")
    }

    function wheelEnd(e) {
        dispatch(e, "ksDragEnd")
    }

    function eventWheel(e) {
        e.preventDefault()
        if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
        }
        wheel(e)
        clearTimeout(touchTimeout)
        touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
        }, 50)
    }

    slider.on("created", () => {
        slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
        })
    })
}

export default function App() {
    const [sliderRef] = useKeenSlider(
        {
            loop: false,
            rubberband: false,
            vertical: true,
        },
        [WheelControls]
    )

    return (
       <div className="hidden sm:block"  data-aos="fade-up">
         <div ref={sliderRef} className="keen-slider max-w-4xl my-16 mx-auto rounded-xl glass hidden sm:block" style={{ height: 200 }}>
            <div className="keen-slider__slide number-slide1">
                <div className="card card-side  ">
                    <figure className="w-1/3"><img src="https://i.ibb.co/3RhqbVb/person1.jpg" /></figure>
                    <div className="card-body text-white w-2/3">
                        <p className="font-light">"Exceptional gaming event management service! Flawless execution, seamless organization, and a memorable gaming experience. Highly recommend for anyone looking to host a top-tier gaming event."</p>
                        <div className="flex items-baseline gap-2">
                        <h2 className="card-title ">Papon </h2>
                        <p className="text-sm font-extralight"><small>(CEO)</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="keen-slider__slide number-slide2">
                <div className="card card-side  ">
                    <figure className="w-1/3"><img src="https://i.ibb.co/x5rv5Bf/person2.jpg" alt="Album" /></figure>
                    <div className="card-body text-white w-2/3">
                        <p className="font-light">"Outstanding gaming event management! Impeccable attention to detail, friendly staff, and a truly immersive gaming atmosphere. Made our event a huge success. 5 stars!"</p>
                        <div className="flex items-baseline gap-2 ">
                        <h2 className="card-title ">Sujon</h2>
                        <p className="text-sm font-extralight"><small>(Designer)</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="keen-slider__slide number-slide3">
                <div className="card card-side  ">
                    <figure className="w-1/3"><img src="https://i.ibb.co/FqfjD1C/person3.jpg" alt="Album" /></figure>
                    <div className="card-body text-white w-2/3">
                        <p className="font-light">"Absolutely thrilled with the gaming event management service! From start to finish, it was a gaming enthusiast's dream. Exceptional planning, superb execution, and a truly memorable experience. Can't wait for the next event!"</p>
                        <div className="flex items-baseline gap-2 ">
                        <h2 className="card-title ">Hathuru</h2>
                        <p className="text-sm font-extralight"><small>(Manager)</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="keen-slider__slide number-slide4">
                <div className="card card-side  ">
                    <figure className="w-1/3"><img src="https://i.ibb.co/ngNB58y/person4.jpg" alt="Album" /></figure>
                    <div className="card-body text-white w-2/3">
                        <p className="font-light">"Flawless gaming event management! Their expertise and dedication transformed our event into a gaming paradise. Every aspect was meticulously handled. Highly recommended!"</p>
                        <div className="flex items-baseline gap-2 ">
                        <h2 className="card-title ">Hasina</h2>
                        <p className="text-sm font-extralight"><small>(Politician)</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}