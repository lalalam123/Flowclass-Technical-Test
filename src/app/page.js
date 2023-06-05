"use client";

import styles from './page.module.css'
import PeopleList from './components/peoplelist';
import data from './components/data'

import React, { createContext } from "react";

export default function Home() {

  const PersonContext = createContext(null);

  return (
    <main style={{ padding: "100px" }}>
      <PersonContext.Provider value={data}>
        <PeopleList people={data} />
      </PersonContext.Provider>
    </main>
  )
}
