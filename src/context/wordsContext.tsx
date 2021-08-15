import React, { useContext, useEffect, useState } from 'react'
import { MAX_WORDS } from '../utils/constants'

const WordsContext = React.createContext<{
	words: string[]
	reloadWords?: () => Promise<unknown>
}>({
	words: [],
})

export const useWordsContext = () => {
	const context = useContext(WordsContext)

	return context
}

export const WordsProvider = ({ ...props }) => {
	const [words, setWords] = useState<string[]>([])

	const reloadWords = () => {
		return window
			.fetch(`https://random-word-api.herokuapp.com/word?number=${MAX_WORDS}`)
			.then((res) => res.json())
			.then((words) => {
				return new Promise((res) => {
					res(words)
					setWords(words as string[])
				})
			})
	}

	useEffect(() => {
		window
			.fetch(`https://random-word-api.herokuapp.com/word?number=${MAX_WORDS}`)
			.then((res) => res.json())
			.then((words) => {
				setWords(words as string[])
			})
	}, [])

	return (
		<WordsContext.Provider value={{ words, reloadWords }}>{props.children}</WordsContext.Provider>
	)
}
