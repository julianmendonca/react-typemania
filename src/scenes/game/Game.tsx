import { Box, Typography, useMediaQuery } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useHistory } from 'react-router-dom'
import { BaseInput } from '../../components/BaseInput'
import { FallingWord } from '../../components/FallingWord'
import { InfoPage } from '../../components/InfoPage'
import { useWordsContext } from '../../context/wordsContext'
import { PAGES } from '../../pages'
import { INITIAL_TIME, MAX_WORDS } from '../../utils/constants'
export const Game = () => {
	const matchesWidth = useMediaQuery('(min-width:600px)')

	const history = useHistory()
	const { words: allWords, reloadWords } = useWordsContext()
	const [word, setWord] = useState('')
	const [maxTime, setMaxTime] = useState(INITIAL_TIME)
	const [points, setPoints] = useState(0)
	const [inputValue, setInputValue] = useState('')
	const [lost, setLost] = useState(false)
	const [won, setWon] = useState(false)
	const [disabledButton, setDissabledButton] = useState(false)

	useEffect(() => {
		setWord(allWords[0])
	}, [allWords])
	useEffect(() => {
		if (points && (points + 1) % 5 === 0 && maxTime > 4) {
			setMaxTime((prevTime) => prevTime - 1)
		}
		if (points && points === allWords.length) setWon(true)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [points])

	const handleInputChange = (text: string) => {
		setInputValue(text.toLowerCase())
		if (word === text.toLowerCase()) {
			setWord(allWords[points + 1].toLowerCase())
			setPoints((prevPoints) => prevPoints + 1)
			setInputValue('')
		}
	}

	const handleTimeOut = () => {
		setWord('')
		setMaxTime(INITIAL_TIME)
		setLost(true)
	}

	if (won)
		return (
			<InfoPage
				title='You Won!'
				subtitle='You are awesome, thanks for playing!'
				buttonLabel='Home'
				onClick={() => history.push(PAGES.Home.path)}
			/>
		)
	if (lost)
		return (
			<InfoPage
				title='Game Over'
				subtitle={`You manage to type ${points} words out of ${MAX_WORDS}`}
				buttonLabel='Play again!'
				disabled={disabledButton}
				onClick={() => {
					if (reloadWords) {
						setDissabledButton(true)
						reloadWords().then(() => {
							setWon(false)
							setLost(false)
							setPoints(0)
							setInputValue('')
							setDissabledButton(false)
						})
					}
				}}
			/>
		)

	return (
		<Box
			display='flex'
			alignItems='center'
			flexDirection='column'
			style={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate3D(-50%,-50%,0)',
				minWidth: matchesWidth ? 400 : '80%',
				maxWidth: '100%',
			}}
		>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='space-between'
				style={{ marginBottom: 80, width: matchesWidth ? 800 : '100%' }}
			>
				<FallingWord
					word={word}
					style={{
						fontSize: matchesWidth ? 60 : 20,
						fontFamily: 'arial',
						textTransform: 'uppercase',
					}}
				/>
				<CountdownCircleTimer
					size={matchesWidth ? 80 : 40}
					strokeWidth={matchesWidth ? 8 : 4}
					isPlaying
					key={points}
					duration={maxTime}
					onComplete={handleTimeOut}
					colors={[
						['#f947ff', 0.5],
						['#cf2979', 0.5],
						['#b0050b', 0.5],
					]}
				>
					{({ remainingTime }) => remainingTime}
				</CountdownCircleTimer>
			</Box>
			<BaseInput
				autoFocus
				style={{ textTransform: 'uppercase', width: '95%', fontSize: matchesWidth ? 30 : 20 }}
				value={inputValue}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e?.target?.value)}
			/>
			<Typography style={{ color: 'white', width: '100%', marginTop: 30 }}>
				Points: {points}
			</Typography>
		</Box>
	)
}
