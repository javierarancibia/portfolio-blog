import React from "react";
import Image from "next/image";
// import styles from "./.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const demo = () => {
  return (
    <div className="h-full bg-gray-800" style={{padding:"15rem"}}>
        <Image 
            src="https://drive.google.com/uc?export=view&id=1FlZ_rxP9T7kd3dxE6VlErc0Qv4g4bLtj" 
            className="w-full" 
            height={100} 
            width={100} 
            unoptimized 
            alt="Tasaciones Online" 
        />
    </div>
  )
}
export default demo;