import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { scaleLinear } from "d3-scale";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128], value: 120 },
  { markerOffset: -15, name: "London", coordinates: [-0.1276, 51.5074], value: 80 },
  { markerOffset: -15, name: "Tokyo", coordinates: [139.6917, 35.6895], value: 200 },
  { markerOffset: 25, name: "Sydney", coordinates: [151.2093, -33.8688], value: 50 },
  { markerOffset: -15, name: "Dubai", coordinates: [55.2708, 25.2048], value: 150 },
];

const colorScale = scaleLinear<string>().domain([0, 200]).range(["#e5d8fd", "#6C5CE7"]);

export function WorldMap() {
  return (
    <Card className="col-span-4" hoverEffect>
      <CardHeader>
        <CardTitle>Global Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full rounded-xl bg-secondary/20 overflow-hidden border border-border/50">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 120,
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="hsl(var(--muted)/0.3)"
                      stroke="hsl(var(--background))"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "hsl(var(--primary)/0.4)", outline: "none", transition: "all 0.3s" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, markerOffset, value }) => (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                  <circle r={value / 25 + 2} fill="#6C5CE7" stroke="#fff" strokeWidth={2} className="animate-pulse-slow" />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "Inter", fill: "hsl(var(--foreground))", fontSize: "10px", fontWeight: "bold" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
        </div>
      </CardContent>
    </Card>
  );
}
