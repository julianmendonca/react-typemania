import { Box, Button, Typography, useTheme } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { PAGES } from '../../pages/index'
import { MAX_WORDS } from '../../utils/constants'

export const Home = () => {
	const theme = useTheme()
	const history = useHistory()

	const handleStart = () => {
		history.push(PAGES.Game.path)
	}

	return (
		<Box display='flex' alignItems='center' flexDirection='column'>
			<Box
				display='flex'
				alignItems='center'
				flexDirection='column'
				position='absolute'
				top='50%'
				left='50%'
				style={{ transform: 'translate3D(-50%,-70%,0)' }}
			>
				<Typography
					style={{
						textShadow: `3px 7px 10px ${theme.palette.primary.main}`,
						fontFamily: 'Palette Mosaic, cursive',
						color: '#fafafa',
						fontSize: 150,
					}}
				>
					TypeMania
				</Typography>{' '}
				<Typography
					style={{
						marginTop: 40,
						color: '#fafafa',
						fontSize: 50,
					}}
				>
					Type {MAX_WORDS} words correctly to win
				</Typography>
				<Button
					onClick={() => {
						handleStart()
					}}
					variant='contained'
					color='primary'
					size='large'
					style={{ marginTop: 60, fontSize: 30, fontWeight: 'bold' }}
				>
					Start!
				</Button>
			</Box>
		</Box>
	)
}
