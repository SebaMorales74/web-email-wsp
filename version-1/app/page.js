
import Slider from "@/components/Slider"
import { SliderData } from "@/components/SliderData"
import Instagram from "@/components/Instagram"

export default function Home() {
  return (
    <div>
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}
