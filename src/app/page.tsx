"use client";
import React, { useState, CSSProperties } from "react";
import Image from "next/image";
import { Scanner } from "@yudiel/react-qr-scanner";

interface IScannerStyles {
  container?: CSSProperties;
  video?: CSSProperties;
  finderBorder?: number;
}

export default function Home() {
  const [data, setData] = useState("No result");

  const scannerStyles: IScannerStyles = {
    container: {},
    video: {
      width: "100%",
      height: "auto",
    },
    finderBorder: 0,
  };

  return (
    <div className="">
      <div className="">
        <Scanner
          onScan={(result) => console.log(result)}
          styles={scannerStyles}
        />
      </div>
      <p>{data}</p>
    </div>
  );
}
