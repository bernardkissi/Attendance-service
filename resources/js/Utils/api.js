export const serviceApi = [
  {
    id: 1,
    name: 'Sunday Service',
  },
  {
    id: 2,
    name: 'Mens Fellowship',
  },
  {
    id: 3,
    name: 'Womens Services',
  },
  {
    id: 4,
    name: 'Children Services',
  },
  {
    id: 5,
    name: 'Havlia Praise',
  },
  {
    id: 6,
    name: 'Leadership Services',
  },
]

export const members = [
  {
    id: 1,
    name: 'Bernard Kissi',
  },
  {
    id: 2,
    name: 'Desmond Ohene',
  },
  {
    id: 3,
    name: 'Nelly Saprpong',
  },
  {
    id: 4,
    name: 'Owireduaa Benedict',
  },
  {
    id: 5,
    name: 'Emmanunel Adjei',
  },
  {
    id: 6,
    name: 'Ethan Kissi',
  },
]

export const attendanceApi = [
  {
    month: 1,
    attendance: 23,
    absence: 10,
    church: 'Sunday Service',
  },
  {
    month: 2,
    attendance: 23,
    absence: 10,
    church: 'Sunday Service',
  },
  {
    month: 3,
    attendance: 23,
    absence: 10,
    church: 'Sunday Service',
  },
  {
    month: 4,
    attendance: 23,
    absence: 10,
    church: 'Sunday Service',
  },
  {
    month: 5,
    attendance: 30,
    absence: 12,
    church: 'Sunday Service',
  },
  {
    month: 6,
    attendance: 43,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 6,
    attendance: 43,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 7,
    attendance: 33,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 8,
    attendance: 12,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 9,
    attendance: 12,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 10,
    attendance: 4,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 11,
    attendance: 7,
    absence: 9,
    church: 'Sunday Service',
  },
  {
    month: 12,
    attendance: 12,
    absence: 3,
    church: 'Sunday Service',
  },
]

export const genderStatisticsApi = [
  {
    month: 3,
    male: 20,
    female: 30,
  },
  {
    month: 4,
    male: 17,
    female: 28,
  },
]

export const churchServicesAPI = [
  {
     id: 1,
     name:'Midweek Service',
     type: 'recurring',
     recurring_day: 'Wednesday',
     startDate: null,
     endDate: null,
     startTime: '6:30pm',
     endTime: '8:30pm',
     status:'Ended'
  },
  {
    id: 2,
    name:'Sunday Service',
    type: 'recurring',
    recurring_day: 'Sunday',
    startDate: null,
    endDate: null,
    startTime: '6:30pm',
    endTime: '8:30pm',
    status:'Paused'
 },
 {
  id: 3,
  name:'Havilia Praise Retreat',
  type: 'Time Bound',
  recurring_day: null,
  startDate: '21.01.2024',
  endDate: '23.01.2024',
  startTime: '6:30pm',
  endTime: '8:30pm',
  status:'Active'
},
{
  id: 4,
  name:'New Bible',
  type: 'Recurring',
  recurring_day: 'Friday',
  startDate: null,
  endDate: null,
  startTime: '6:30pm',
  endTime: '8:30pm',
  status:'Active'
},
{
  id: 5,
  name:'Church Choir Praise',
  type: 'One Time',
  recurring_day: null,
  startDate: '21.01.2024',
  endDate: '23.01.2024',
  startTime: '6:30pm',
  endTime: '8:30pm',
  status:'Active'
}
]

export const qrcodesAPI = [
	{
		id: 1,
		identifier: 'cc2a87ad-0abc-4a50-8b0e-ecc4a4ca5ea3',
		branch_id: 1,
		service_id: 5,
		active_at: '13:00:00',
		expires_at: '16:00:00',
		expired_on: '2023-07-18T01:13:06.000000Z',
		service_date: '2023-08-19',
		'qrcode_image_string': null,
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'distance_threshold': 4,
		'checks': {
			'time': true,
			'service': true,
			'location': true,
			'membership': true
		},
		'expected_attendees': 20,
		'allow_visiting_members': false,
		'created_at': '2023-07-18T01:13:06.000000Z',
		'updated_at': '2023-07-18T01:13:06.000000Z'
	},
	{
		'id': 2,
		'identifier': '8224f814-e438-4c6b-9b1b-d910e8085d53',
		'branch_id': 1,
		'service_id': 1,
		'active_at': '13:00:00',
		'expires_at': '16:00:00',
		'expired_on': null,
		'service_date': '2023-08-19',
		'qrcode_image_string': null,
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'distance_threshold': 4,
		'checks': {
			'time': true,
			'service': true,
			'location': true,
			'membership': true
		},
		'expected_attendees': 39,
		'allow_visiting_members': false,
		'created_at': '2023-07-18T01:13:06.000000Z',
		'updated_at': '2023-07-18T01:13:06.000000Z'
	},
	{
		'id': 3,
		'identifier': 'e02506b2-42a8-490d-99cd-da60ccddd01b',
		'branch_id': 1,
		'service_id': 1,
		'active_at': '13:00:00',
		'expires_at': '16:00:00',
		'expired_on': null,
		'service_date': '2023-08-19',
		'qrcode_image_string': null,
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'distance_threshold': 4,
		'checks': {
			'time': true,
			'service': true,
			'location': true,
			'membership': true
		},
		'expected_attendees': 39,
		'allow_visiting_members': false,
		'created_at': '2023-06-18T01:13:06.000000Z',
		'updated_at': '2023-07-18T01:13:06.000000Z'
	},
	{
		'id': 4,
		'identifier': 'dcbb8677-65f2-4afe-ae24-74ae49f427dd',
		'branch_id': 1,
		'service_id': 1,
		'active_at': '13:00:00',
		'expires_at': '16:00:00',
		'expired_on': '2023-07-18T01:13:06.000000Z',
		'service_date': '2023-08-19',
		'qrcode_image_string': null,
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'distance_threshold': 4,
		'checks': {
			'time': true,
			'service': true,
			'location': true,
			'membership': true
		},
		'expected_attendees': 39,
		'allow_visiting_members': false,
		'created_at': '2023-07-18T01:13:06.000000Z',
		'updated_at': '2023-07-18T01:13:06.000000Z'
	},
	{
		'id': 5,
		'identifier': '56203764-d8a4-44de-aa24-f1cc7ffbf003',
		'branch_id': 1,
		'service_id': 5,
		'active_at': '13:00:00',
		'expires_at': '16:00:00',
		'expired_on': '2023-07-18T01:13:06.000000Z',
		'service_date': '2023-08-19',
		'qrcode_image_string': null,
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'distance_threshold': 4,
		'checks': {
			'time': true,
			'service': true,
			'location': true,
			'membership': true
		},
		'expected_attendees': 39,
		'allow_visiting_members': false,
		'created_at': '2023-07-18T01:13:06.000000Z',
		'updated_at': '2023-07-18T01:13:06.000000Z'
	}
]

export const QrcodeCheckInsApi = [
  {
		'id': 3,
		'qrcode_id': 4,
		member: 'Derrick Kissi',
		'branch_id': 1,
		'value': 3,
		'service_id': 1,
		'recorded_at': '2023-07-18T11:14:09.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 4,
		'qrcode_id': 4,
		'branch_id': 1,
		 member: 'Nelly sarpong',
		'value': 8,
		'service_id': 1,
		'recorded_at': '2023-07-18T10:14:09.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 5,
		'qrcode_id': 4,
		'branch_id': 1,
		member: 'Andrews owusu',
		'value': 7,
		'service_id': 1,
		'recorded_at': '2023-07-18T12:29:34.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 6,
		'qrcode_id': 1,
		'branch_id': 1,
		'value': 15,
		member: 'Benedicta Owireduaa',
		'service_id': 5,
		'recorded_at': '2023-07-18T13:30:51.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 9,
		'qrcode_id': 1,
		'branch_id': 1,
		member: 'Richmond Asare',
		'value': 22,
		'service_id': 5,
		'recorded_at': '2023-07-18T12:30:51.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 10,
		'qrcode_id': 2,
		'branch_id': 1,
		member: 'Clfford Aboagye',
		'value': 7,
		'service_id': 1,
		'recorded_at': '2023-07-18T12:29:34.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 11,
		'qrcode_id': 3,
		'branch_id': 1,
		member: 'Clfford Aboagye',
		'value': 7,
		'service_id': 1,
		'recorded_at': '2023-07-18T12:29:34.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 12,
		'qrcode_id': 3,
		'branch_id': 1,
		member: 'Clfford Aboagye',
		'value': 3,
		'service_id': 1,
		'recorded_at': '2023-07-18T14:29:34.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	},
	{
		'id': 13,
		'qrcode_id': 5,
		'branch_id': 1,
		member: 'Clfford Aboagye',
		'value': 3,
		'service_id': 5,
		'recorded_at': '2023-07-18T12:29:34.000000Z',
		'device': 'web',
		'user_agent': 'test',
		'location': {
			'latitude': 50.9406717,
			'longitude': 7.0623543
		},
		'recorded_by_user_id': null,
		'ip_address': null,
		'visitor_branch_id': null,
		'created_at': null,
		'updated_at': null
	}
]