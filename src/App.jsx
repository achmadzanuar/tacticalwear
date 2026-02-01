import React from 'react'
import Hero from './components/Hero'
import Why from './components/Why'
import ProductList from './components/ProductList'
import CTA from './components/CTA'
import SocialProof from './components/SocialProof'

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">URCON</div>
          <nav className="nav">Premium Tactical Wear</nav>
        </div>
      </header>

      <main>
        <Hero />
        <Why />
        <ProductList />
        <CTA />
        <SocialProof />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} URCON — All rights reserved
      </footer>
    </div>
  )
}
