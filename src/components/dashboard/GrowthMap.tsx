/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */


import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { markerOffset: -15, name: "USA", coordinates: [-96, 37], color: "#6C5CE7", value: "35%", flag: "🇺🇸" },
  { markerOffset: -15, name: "UK", coordinates: [-2, 53], color: "#EC4899", value: "28%", flag: "🇬🇧" },
  { markerOffset: 15, name: "Bangladesh", coordinates: [90, 24], color: "#22C55E", value: "24%", flag: "🇧🇩" },
  { markerOffset: 15, name: "UAE", coordinates: [54, 24], color: "#6B7280", value: "13%", flag: "🇦🇪" },
];

export function GrowthMap() {
  return (
    <Card className="rounded-2xl border border-border/50 shadow-sm md:col-span-3 min-h-[400px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Growth by Country</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 w-full min-h-[200px] relative">
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100, center: [0, 30] }} style={{ width: "100%", height: "100%" }}>
                <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#F3F4F6"
                        stroke="#E9EEF5"
                        strokeWidth={0.5}
                        style={{
                            default: { outline: "none" },
                            hover: { fill: "#E5E7EB", outline: "none" },
                            pressed: { outline: "none" },
                        }}
                    />
                    ))
                }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset, color }) => (
                <Marker key={name} coordinates={coordinates as [number, number]}>
                    <circle r={6} fill={color} stroke="#fff" strokeWidth={2} />
                    <circle r={12} fill={color} opacity={0.2} />
                </Marker>
                ))}
            </ComposableMap>
        </div>

        <div className="mt-4 space-y-3">
            {markers.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                        <span className="text-lg">{item.flag}</span>
                        <span className="font-medium text-foreground">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div 
                                className="h-full rounded-full" 
                                style={{ width: item.value, backgroundColor: item.color }} 
                            />
                        </div>
                        <span className="text-muted-foreground w-8 text-right font-medium">{item.value}</span>
                    </div>
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
