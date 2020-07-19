import React, { useState, useEffect } from 'react'

import { ScrollView, View, StyleSheet } from 'react-native'
import {
	Headline,
	Title,
	Subheading,
	Caption,
	Surface,
	IconButton,
	Searchbar
} from 'react-native-paper'

const AddRecordScreen = ({ records, setRecords }) => {
	const [search, setSearch] = useState('')
	const [display, setDisplay] = useState([])

	const handleSearch = (text) => {
		setSearch(text)
	}

	const deleteRecord = (del) => {
		setRecords(records.filter((record) => record.id !== del.id))
	}

	useEffect(() => {
		const results = records.filter((record) =>
			record.title.toLowerCase().includes(search.toLowerCase())
		)
		setDisplay(results)
	}, [search, records])

	return (
		<View style={styles.wrapper}>
			<View>
				<Headline style={styles.title}>Added Records</Headline>
				<Searchbar
					style={styles.search}
					placeholder='Search'
					value={search}
					onChangeText={(text) => handleSearch(text)}
				/>
			</View>
			<ScrollView>
				{display.map((record, index) => (
					<Surface style={styles.record} key={index}>
						<View>
							<Title>{record.title}</Title>
							<Subheading>{record.value}</Subheading>
							<Caption style={{ marginTop: 10 }}>{record.time}</Caption>
						</View>
						<View>
							<IconButton onPress={() => deleteRecord(record)} icon='delete' />
							<IconButton icon='eye' />
						</View>
					</Surface>
				))}
			</ScrollView>
		</View>
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

export default AddRecordScreen
