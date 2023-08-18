import Carrusel from "@/components/Carrusel"
import Slider from "@/components/Slider"
import { SliderData } from "@/components/SliderData"
import Instagram from "@/components/Instagram"
import FloatingButton from "@/components/FloatingButton"

export default function Home() {
  return (
    <div>
      <Carrusel heading='TuVentanal.Cl' message='Hechale un ojo a nuestros productos.' />
      <Slider slides={SliderData} />
      <Instagram />
      <FloatingButton />
    </div>
  )
}
