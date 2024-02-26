"use client"
import {Curve} from "./curve.js";
import Head from 'next/head';
import Link from "next/link";
import '../style/global.scss';
import '../style/landing.scss';
export default function LandingPage() {
  return (
    <>
      <>
        <Head>
          <title>Landing Page</title>
        </Head>
      </>
    <>
      <main className="container">
        <div className="text-wrapper">
          <h2 className="welcome-msg">Welcome!</h2>
          <Curve 
              className="curve-text curve-text-middle"
              width={300}
              height={100}
              text="<Spiteful Saint Records>"     
          />
          <h5 className="landing-text-secondary">
            Rest for the wayward and weary
          </h5>
        </div>      
        <button className="btn landing-btn">
          <Link className="link" href="/home"><p>Enter Here!</p></Link>
        </button>
      </main>
      </>
    </>
  );
}
