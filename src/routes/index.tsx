import React from 'react'
import { Route } from 'react-router-dom'
import { PAGES } from '../pages'

const pages = PAGES as Record<string, any>

export const Routes = () => {
	return (
		<>
			{Object.keys(pages).map((page) => {
				return (
					<>
						{!!pages[page].component && (
							<Route exact key={pages[page].name} path={pages[page].path}>
								{pages[page].component}
							</Route>
						)}
					</>
				)
			})}
		</>
	)
}
