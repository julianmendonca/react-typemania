import { useEffect } from 'react'

type FallingWordType = {
	word: string
	style?: React.CSSProperties
}

export const FallingWord = ({ word, style, ...props }: FallingWordType) => {
	useEffect(() => {}, [word])

	return (
		<div {...props} style={{ color: 'white', ...style }}>
			{word}
		</div>
	)
}
