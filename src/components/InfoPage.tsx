import { Box, Button, Typography, useMediaQuery, useTheme } from '@material-ui/core'

type InfoPageType = {
	title: string
	subtitle: string
	buttonLabel: string
	disabled?: boolean
	onClick: () => void
}

export const InfoPage = ({
	title,
	subtitle,
	buttonLabel,
	disabled = false,
	onClick,
}: InfoPageType) => {
	const matchesWidth = useMediaQuery('(min-width:600px)')
	const theme = useTheme()

	return (
		<Box
			display='flex'
			alignItems='center'
			flexDirection='column'
			position='absolute'
			top='50%'
			left='50%'
			style={{ transform: 'translate3D(-50%,-70%,0)', width: '100%' }}
		>
			<Typography
				style={{
					textShadow: `3px 7px 10px ${theme.palette.primary.main}`,
					fontFamily: 'Palette Mosaic, cursive',
					color: '#fafafa',
					fontSize: matchesWidth ? 150 : 50,
				}}
			>
				{title}
			</Typography>
			<Typography
				style={{
					marginTop: 40,
					color: '#fafafa',
					fontSize: matchesWidth ? 50 : 20,
				}}
			>
				{subtitle}
			</Typography>
			<Button
				disabled={disabled}
				onClick={onClick}
				variant='contained'
				color='primary'
				size='large'
				style={{ marginTop: 60, fontSize: matchesWidth ? 30 : 15, fontWeight: 'bold' }}
			>
				{buttonLabel}
			</Button>
		</Box>
	)
}
