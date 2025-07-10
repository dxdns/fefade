import CarouselComponent from "./Carousel.svelte"
import CarouselItemComponent from "./CarouselItem.svelte"

type CarouselComponentType = typeof CarouselComponent & {
	Item: typeof CarouselItemComponent
}

const Carousel = CarouselComponent as unknown as CarouselComponentType
Carousel.Item = CarouselItemComponent

export { Carousel as default }
