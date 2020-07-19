import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AddRecordScreen from './screens/AddRecordScreen'
import ViewRecordScreen from './screens/ViewRecordScreen'

const Tab = createMaterialTopTabNavigator()

const HomeTabs = () => {
	const [records, setRecords] = useState([])

	return (
		<Tab.Navigator>
			<Tab.Screen name='Add Record'>
				{() => <AddRecordScreen records={records} setRecords={setRecords} />}
			</Tab.Screen>
			<Tab.Screen name='View Record'>
				{() => <ViewRecordScreen records={records} setRecords={setRecords} />}
			</Tab.Screen>
		</Tab.Navigator>
	)
}

export default HomeTabs
