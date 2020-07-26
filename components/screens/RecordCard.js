import React, { useState } from 'react'

import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import {
	Surface,
	TextInput,
	Title,
	Caption,
	IconButton
} from 'react-native-paper'
import Clipboard from '@react-native-community/clipboard'

const RecordCard = ({
	record,
	setSnackVisible,
	setRecords,
	records,
	setSnackText
}) => {
	const [isValueHidden, setValueHidden] = useState(true)

	const deleteRecord = (del) => {
		setRecords(records.filter((record) => record.id !== del.id))
		setSnackText('Record Deleted')
		setSnackVisible(true)
	}

	const copyToClipboard = (text, type) => {
		Clipboard.setString(text)
		setSnackText(`Copied ${type} to Clipboard`)
		setSnackVisible(true)
	}

	return (
		<Surface style={styles.record}>
			<View style={{ maxWidth: Dimensions.get('screen').width / 1.3 }}>
				<TouchableOpacity onPress={() => copyToClipboard(record.title, 'Key')}>
					<Title>{record.title}</Title>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => copyToClipboard(record.value, 'Value')}
				>
					<TextInput
						mode='outlined'
						style={{
							backgroundColor: 'transparent',
							width: Dimensions.get('window').width / 1.3
						}}
						dense
						editable={false}
						focusable={false}
						secureTextEntry={isValueHidden}
						value={record.value}
					/>
				</TouchableOpacity>
				<Caption style={{ marginTop: 10 }}>{record.time}</Caption>
			</View>
			<View>
				<IconButton onPress={() => deleteRecord(record)} icon='delete' />
				<IconButton onPress={() => setValueHidden(!isValueHidden)} icon='eye' />
			</View>
		</Surface>
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
	search: {
		marginBottom: 10
	},
	record: {
		marginVertical: 5,
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})

export default RecordCard
