"use client";

import styles from './page.module.css'
import PeopleList from './components/peoplelist';
import data from './components/data'

import React, { createContext } from "react";

export const PersonContext = createContext(data);

export default function Home() {

  return (
    <main style={{ padding: "100px" }}>
      <PeopleList />
    </main>
  )
}
