import { useTheme } from '@material-ui/core'

export const BaseInput = ({ ...props }) => {
	const theme = useTheme()
	const primaryMain = theme.palette.primary.main

	return (
		<input
			{...props}
			style={{
				backgroundColor: 'rgb(0,0,0,0.4)',
				color: primaryMain,
				outline: 'none',
				border: `2px solid ${primaryMain}`,
				borderRadius: 10,
				padding: '20px 30px',
				fontSize: 30,

				...props.style,
			}}
		/>
	)
}
