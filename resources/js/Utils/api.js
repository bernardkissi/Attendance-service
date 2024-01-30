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