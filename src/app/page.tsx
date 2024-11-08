"use client"
import {FilmPass} from "three-stdlib";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    new FilmPass(0, 1, 648, false);
  }, []);
  return (
    <></>
  );
}
