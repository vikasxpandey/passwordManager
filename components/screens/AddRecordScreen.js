import React, { useState } from 'react'

import { View, StyleSheet } from 'react-native'
import {
	Headline,
	TextInput,
	HelperText,
	Button,
	IconButton,
	Snackbar
} from 'react-native-paper'

const AddRecordScreen = ({ records, setRecords }) => {
	const [title, setTitle] = useState('')
	const [value, setValue] = useState('')
	const [isValueHidden, setValueHidden] = useState(true)
	const [isSnackVisible, setSnackVisible] = useState(false)

	const handleValueHidden = () => {
		setValueHidden(!isValueHidden)
	}
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min
	}
	const handleAddRecord = () => {
		const id = new Date().getTime() + getRandomInt(10000, 100000)
		const time = new Date().toLocaleDateString()

		setRecords([...records, { id, title, value, time }])
		setTitle('')
		setValue('')
		setSnackVisible(true)
	}

	return (
		<>
			<View style={styles.wrapper}>
				<Headline style={styles.title}>Add new record</Headline>
				<View style={styles.inputWrapper}>
					<TextInput
						style={styles.input}
						label='Title'
						mode='outlined'
						value={title}
						onChangeText={(text) => setTitle(text)}
					/>
					<HelperText>Username, Email, etc.</HelperText>
					<View style={styles.valueWrapper}>
						<TextInput
							style={styles.input}
							label='Value'
							mode='outlined'
							value={value}
							onChangeText={(text) => setValue(text)}
							secureTextEntry={isValueHidden}
						/>
						<HelperText>Password, Some secret, etc.</HelperText>

						<IconButton
							style={styles.viewButton}
							icon={isValueHidden ? 'eye' : 'eye-off'}
							onPress={handleValueHidden}
						/>
					</View>
				</View>
				<Button mode='contained' onPress={handleAddRecord}>
					Add
				</Button>
			</View>
			<Snackbar
				visible={isSnackVisible}
				onDismiss={() => setSnackVisible(false)}
				duration={2000}
			>
				New record added
			</Snackbar>
		</>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		margin: 10
	},
	title: {
		fontSize: 30,
		fontWeight: '700',
		marginTop: 10,
		marginBottom: 20
	},
	inputWrapper: {
		marginBottom: 20
	},
	input: {
		marginTop: 15
	},
	valueWrapper: {
		position: 'relative'
	},
	viewButton: {
		position: 'absolute',
		right: 10,
		top: 26,
		zIndex: 9
	}
})

export default AddRecordScreen
