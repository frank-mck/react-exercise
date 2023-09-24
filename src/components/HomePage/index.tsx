import { Heading, Box } from "@cruk/cruk-react-components"
import { NasaSearchParams } from "../../types"
import Results from "../Results"
import NasaForm from "./NasaForm"

export const HomePage = () => {
	//
	// form and validation code here

	const exampleParam: NasaSearchParams = {
		keywords: "moon",
		yearStart: 2000,
		mediaType: "image",
	}

	return (
		<Box marginTop="s" paddingTop="s">
			<Heading h1>React Exercise</Heading>

			<NasaForm />

			<Results searchParams={exampleParam} />
		</Box>
	)
}

export default HomePage
