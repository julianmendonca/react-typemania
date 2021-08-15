import React from 'react'
import { Game } from '../scenes/game/Game'
import { Home } from '../scenes/home/Home'

export const PAGES = {
	Home: { path: '/', name: 'Home', component: <Home /> },
	Game: { path: '/play', name: 'Play!', component: <Game /> },
}
