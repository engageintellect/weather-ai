import weatherCodeToString from "@/lib/weatherCodeToString"
import { MoonIcon, SunIcon } from "@heroicons/reac/solid"
import Image from "next/image"
import CityPicker from "./CityPicker"





type Props = {
	city: string
	results: Root
	lat: string
	long: string

}


function InformationPanel({city, lat, long, results}: Props) {
	return (
		<div className="bg-gradient-to-br from-[#394f68] to-[#18387e] text-white p-10">
			<div className="pb-5">
				<h1 className="text-6xl font-bold">
					 {decodeURI(city)}
				</h1>
				<p className="text-xs text-gray-400">
					Long/Lat: {long}, {lat}
					</p>
			</div>
			<CityPicker />
			<hr className="my-10" />

			<div className="mt-5 flex items-center justify-between space-x-10 mb-10">
				<div>
					<p className="text-xl">
						{new Date().toLocaleDateString("en-GB", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					<p className="font-extralight">
						Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
					</p>
				</div>

					<p className="text-xl font-bold uppercase">
						{new Date().toLocaleTimeString("en-US", {
							hour: "numeric",
							minute: "numeric",
							hour12: true,
						})}
					</p>

			</div>

			<hr className="mt-10 mb-5" />

			<div>
				<div>
					{/* Image */}
				</div>
			</div>



		</div>
	)
}

export default InformationPanel