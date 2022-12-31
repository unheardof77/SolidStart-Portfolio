import morgan from "../assets/images/Morgan.jpg";

export default function Home() {
	return(
		<main class="flex justify-center items-center h-full">
			<section class="flex">
				<img class="rounded-full w-60" src={morgan} alt="Morgan Tolman next to a river."/>
				<section>
					<h1>Morgan Tolman</h1>
					<p>lorem alskdjf ksdjf sdlkfj sd slkdfjsl fjsdfj slkdfj sdkfj sdkfj slkdjf aljsdfkj sdkf sdf jsd fsd fsljdf slkdj fslkdjf slkjfd sd jf</p>
				</section>
			</section>
		</main>
	)
}
