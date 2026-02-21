import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Source for the world map shapes (TopoJSON)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Mapping your client countries to their specific region colors
const countryColors = {
  // South & East Asia (color-0: #60a5fa)
  "India": "#60a5fa",
  "South Korea": "#60a5fa",
  "Thailand": "#60a5fa",
  "Vietnam": "#60a5fa",
  "Malaysia": "#60a5fa",
  "Indonesia": "#60a5fa",
  "Philippines": "#60a5fa",
  "China": "#60a5fa",

  // Central & West Asia (color-1: #2dd4bf)
  "Saudi Arabia": "#2dd4bf",
  "United Arab Emirates": "#2dd4bf",
  "Oman": "#2dd4bf",
  "Qatar": "#2dd4bf",
  "Azerbaijan": "#2dd4bf",

  // Americas (color-2: #f472b6)
  "United States of America": "#f472b6",
  "Colombia": "#f472b6",

  // Europe & Africa (color-3: #fbbf24)
  "South Africa": "#fbbf24",
  "Nigeria": "#fbbf24",
  "Germany": "#fbbf24",

  // Australia (color-4: #a78bfa)
  "Australia": "#a78bfa"
};

const InteractiveMap = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 135, // Adjust zoom
          center: [0, 20] // Adjust initial focus [long, lat]
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isHighlighted = countryColors[countryName];
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isHighlighted ? countryColors[countryName] : "#374151", // Highlight or Dark Gray
                      stroke: "#1f2937", // Border color
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: isHighlighted ? "#ffffff" : "#4b5563", // Turn white if active, lighter gray if inactive
                      stroke: "#fff",
                      strokeWidth: 1,
                      outline: "none",
                      cursor: isHighlighted ? "pointer" : "default",
                    },
                    pressed: {
                      fill: isHighlighted ? "#ffffff" : "#374151",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default InteractiveMap;