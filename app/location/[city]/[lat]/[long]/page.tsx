import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import InformationPanel from "@/components/InformationPanel";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div>
      <InformationPanel
      city={city}
      result={results}
      lat={lat}
      long={long}
      />

      <div>
        <div className="p-5">
          <div className="pb-5">
            <h2 className="text-xl font-bold">Todays Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated at: {""}
              {new Date(results.current_weather.time).toLocaleTimeString()}{" "}
              {results.timezone}
            </p>
          </div>
          <div className="m-2 mb-10">
            <CalloutCard message="this is where gpt summary will go" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <StatCard
              title="Max Temp"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`}
              color="yellow"
            />

            <StatCard
              title="Min Temp"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`}
              color="green"
            />

            <div>
              <StatCard
                title="UV Index"
                metric={results.daily.uv_index_max[0].toFixed(1)}
                color="rose"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard 
                message={"UV Index is high today"} 
                warning />
              )}
            </div>

            <div className="flex space-x-3">
              <StatCard
              title="Wind Speed"
              metric={`${results.current_weather.windspeed.toFixed(1)}m/s`}
              color="cyan"
              />
              <StatCard
              title="Wind Direction"
              metric={`${results.current_weather.winddirection.toFixed(1)}°`}
              color="violet"
              />
            </div>


          </div>
        </div>
        <hr className="mb-5" />

        <div className="space-y-3">
          {/* Temp Chart */}
          {/* Rain Chart */}
          {/* Humidity Chart */}
        </div>

      </div>
    </div>
  );
}

export default WeatherPage;
