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
    name: 'Midweek Service',
    type: 'recurring',
    recurring_day: 'Wednesday',
    startDate: null,
    endDate: null,
    startTime: '6:30pm',
    endTime: '8:30pm',
    status: 'Ended',
  },
  {
    id: 2,
    name: 'Sunday Service',
    type: 'recurring',
    recurring_day: 'Sunday',
    startDate: null,
    endDate: null,
    startTime: '6:30pm',
    endTime: '8:30pm',
    status: 'Paused',
  },
  {
    id: 3,
    name: 'Havilia Praise Retreat',
    type: 'Time Bound',
    recurring_day: null,
    startDate: '21.01.2024',
    endDate: '23.01.2024',
    startTime: '6:30pm',
    endTime: '8:30pm',
    status: 'Active',
  },
  {
    id: 4,
    name: 'New Bible',
    type: 'Recurring',
    recurring_day: 'Friday',
    startDate: null,
    endDate: null,
    startTime: '6:30pm',
    endTime: '8:30pm',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Church Choir Praise',
    type: 'One Time',
    recurring_day: null,
    startDate: '21.01.2024',
    endDate: '23.01.2024',
    startTime: '6:30pm',
    endTime: '8:30pm',
    status: 'Active',
  },
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
    qrcode_image_string: null,
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    distance_threshold: 4,
    checks: {
      time: true,
      service: true,
      location: true,
      membership: true,
    },
    expected_attendees: 20,
    allow_visiting_members: false,
    created_at: '2023-07-18T01:13:06.000000Z',
    updated_at: '2023-07-18T01:13:06.000000Z',
  },
  {
    id: 2,
    identifier: '8224f814-e438-4c6b-9b1b-d910e8085d53',
    branch_id: 1,
    service_id: 1,
    active_at: '13:00:00',
    expires_at: '16:00:00',
    expired_on: null,
    service_date: '2023-08-19',
    qrcode_image_string: null,
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    distance_threshold: 4,
    checks: {
      time: true,
      service: true,
      location: true,
      membership: true,
    },
    expected_attendees: 39,
    allow_visiting_members: false,
    created_at: '2023-07-18T01:13:06.000000Z',
    updated_at: '2023-07-18T01:13:06.000000Z',
  },
  {
    id: 3,
    identifier: 'e02506b2-42a8-490d-99cd-da60ccddd01b',
    branch_id: 1,
    service_id: 1,
    active_at: '13:00:00',
    expires_at: '16:00:00',
    expired_on: null,
    service_date: '2023-08-19',
    qrcode_image_string: null,
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    distance_threshold: 4,
    checks: {
      time: true,
      service: true,
      location: true,
      membership: true,
    },
    expected_attendees: 39,
    allow_visiting_members: false,
    created_at: '2023-06-18T01:13:06.000000Z',
    updated_at: '2023-07-18T01:13:06.000000Z',
  },
  {
    id: 4,
    identifier: 'dcbb8677-65f2-4afe-ae24-74ae49f427dd',
    branch_id: 1,
    service_id: 1,
    active_at: '13:00:00',
    expires_at: '16:00:00',
    expired_on: '2023-07-18T01:13:06.000000Z',
    service_date: '2023-08-19',
    qrcode_image_string: null,
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    distance_threshold: 4,
    checks: {
      time: true,
      service: true,
      location: true,
      membership: true,
    },
    expected_attendees: 39,
    allow_visiting_members: false,
    created_at: '2023-07-18T01:13:06.000000Z',
    updated_at: '2023-07-18T01:13:06.000000Z',
  },
  {
    id: 5,
    identifier: '56203764-d8a4-44de-aa24-f1cc7ffbf003',
    branch_id: 1,
    service_id: 5,
    active_at: '13:00:00',
    expires_at: '16:00:00',
    expired_on: '2023-07-18T01:13:06.000000Z',
    service_date: '2023-08-19',
    qrcode_image_string: null,
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    distance_threshold: 4,
    checks: {
      time: true,
      service: true,
      location: true,
      membership: true,
    },
    expected_attendees: 39,
    allow_visiting_members: false,
    created_at: '2023-07-18T01:13:06.000000Z',
    updated_at: '2023-07-18T01:13:06.000000Z',
  },
]

export const QrcodeCheckInsApi = [
  {
    id: 3,
    qrcode_id: 4,
    member: 'Derrick Kissi',
    branch_id: 1,
    value: 3,
    service_id: 1,
    recorded_at: '2023-07-18T11:14:09.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 4,
    qrcode_id: 4,
    branch_id: 1,
    member: 'Nelly sarpong',
    value: 8,
    service_id: 1,
    recorded_at: '2023-07-18T10:14:09.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 5,
    qrcode_id: 4,
    branch_id: 1,
    member: 'Andrews owusu',
    value: 7,
    service_id: 1,
    recorded_at: '2023-07-18T12:29:34.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 6,
    qrcode_id: 1,
    branch_id: 1,
    value: 15,
    member: 'Benedicta Owireduaa',
    service_id: 5,
    recorded_at: '2023-07-18T13:30:51.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 9,
    qrcode_id: 1,
    branch_id: 1,
    member: 'Richmond Asare',
    value: 22,
    service_id: 5,
    recorded_at: '2023-07-18T12:30:51.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 10,
    qrcode_id: 2,
    branch_id: 1,
    member: 'Clfford Aboagye',
    value: 7,
    service_id: 1,
    recorded_at: '2023-07-18T12:29:34.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 11,
    qrcode_id: 3,
    branch_id: 1,
    member: 'Clfford Aboagye',
    value: 7,
    service_id: 1,
    recorded_at: '2023-07-18T12:29:34.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 12,
    qrcode_id: 3,
    branch_id: 1,
    member: 'Clfford Aboagye',
    value: 3,
    service_id: 1,
    recorded_at: '2023-07-18T14:29:34.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
  {
    id: 13,
    qrcode_id: 5,
    branch_id: 1,
    member: 'Clfford Aboagye',
    value: 3,
    service_id: 5,
    recorded_at: '2023-07-18T12:29:34.000000Z',
    device: 'web',
    user_agent: 'test',
    location: {
      latitude: 50.9406717,
      longitude: 7.0623543,
    },
    recorded_by_user_id: null,
    ip_address: null,
    visitor_branch_id: null,
    created_at: null,
    updated_at: null,
  },
]

export const membersAttendanceAPI = [
  {
    name: 'Sunday Service',
    total_attendance: 56,
    total_absence: 44,
    total_occurrences: 30,
  },
  {
    name: 'Midweek Service',
    total_attendance: 30,
    total_absence: 70,
  },
  {
    name: 'Youth Service',
    total_attendance: 62,
    total_absence: 38,
  },
]

export const totalAttendanceV2 = [
  {
    userId: 1,
    serviceId: 1,
    total_service_attendance: 31,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:30:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:50:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:55:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:30:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:55:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:09:30:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:20:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:00:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-07:09:00:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:47:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:59:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:01:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 2,
    serviceId: 1,
    total_service_attendance: 26,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-07:08:40:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:51:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-07:08:50:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-14:09:10:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:30:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:40:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:50:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:25:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:49:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:15:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:07:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:25:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 3,
    serviceId: 1,
    total_service_attendance: 30,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:45:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:09:05:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:15:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:25:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:40:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:40:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:10:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-14:09:00:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:20:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:20:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 4,
    serviceId: 1,
    total_service_attendance: 27,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:33:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:08:52:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:05:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:19:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:59:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:01:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:30:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:50:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:00:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-08:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-01:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-08:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-15:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 5,
    serviceId: 1,
    total_service_attendance: 42,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:25:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:55:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:08:55:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:15:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:20:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:30:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:40:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:50:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:30:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:10:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-01:08:31:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-08:08:55:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-15:09:01:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-22:09:13:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-29:09:11:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-07:09:01:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:09:11:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:08:31:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-22:09:13:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-29:08:55:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 6,
    serviceId: 1,
    total_service_attendance: 31,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:30:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:50:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:55:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:30:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:55:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:09:30:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:20:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:00:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-07:09:00:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:47:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:59:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:01:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 7,
    serviceId: 1,
    total_service_attendance: 26,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-07:08:40:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:51:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-07:08:50:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-14:09:10:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:30:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:40:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:50:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:25:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:49:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:15:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:07:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:25:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 8,
    serviceId: 1,
    total_service_attendance: 30,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:45:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:09:05:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:15:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:25:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:40:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:40:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:10:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-14:09:00:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:20:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:20:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 9,
    serviceId: 1,
    total_service_attendance: 27,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:33:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:08:52:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:05:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:19:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:59:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:01:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:30:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:50:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:00:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-08:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-01:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-08:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-15:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 10,
    serviceId: 1,
    total_service_attendance: 42,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:25:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:55:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:08:55:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:15:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:20:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:30:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:40:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:50:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:30:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:10:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-01:08:31:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-08:08:55:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-15:09:01:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-22:09:13:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-29:09:11:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-07:09:01:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:09:11:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:08:31:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-22:09:13:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-29:08:55:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 11,
    serviceId: 1,
    total_service_attendance: 31,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:30:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:50:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:55:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:30:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:55:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:09:30:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:20:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:00:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-07:09:00:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:47:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:59:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:01:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 12,
    serviceId: 1,
    total_service_attendance: 26,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-07:08:40:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:51:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-07:08:50:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-14:09:10:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:30:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:40:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:50:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:25:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:49:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:15:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:07:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:25:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 13,
    serviceId: 1,
    total_service_attendance: 30,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:45:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:09:05:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:15:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:25:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:40:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:40:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:10:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-14:09:00:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:20:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:20:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 14,
    serviceId: 1,
    total_service_attendance: 27,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:33:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:08:52:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:05:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:19:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:59:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:01:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:30:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:50:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:00:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-08:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-01:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-08:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-15:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 15,
    serviceId: 1,
    total_service_attendance: 42,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:25:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:55:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:08:55:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:15:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:20:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:30:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:40:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:50:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:30:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:10:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-01:08:31:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-08:08:55:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-15:09:01:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-22:09:13:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-29:09:11:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-07:09:01:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:09:11:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:08:31:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-22:09:13:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-29:08:55:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 16,
    serviceId: 1,
    total_service_attendance: 31,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:30:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:50:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:55:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:30:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:55:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:09:30:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:20:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:00:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-07:09:00:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:47:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:59:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:01:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 17,
    serviceId: 1,
    total_service_attendance: 26,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-07:08:40:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:51:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:00:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-07:08:50:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-14:09:10:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:20:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:30:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:40:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:08:50:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:25:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:49:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:09:15:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:07:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:25:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 18,
    serviceId: 1,
    total_service_attendance: 30,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:45:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:09:05:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:15:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:25:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:08:40:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:40:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:10:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:20:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-07-14:09:00:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:20:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:20:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-07:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-21:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 19,
    serviceId: 1,
    total_service_attendance: 27,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:33:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: false,
            checkedInOn: '2024-01-14:08:52:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:09:05:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:19:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: false,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: false,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: false,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:08:59:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-21:09:01:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: false,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: false,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:30:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:50:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:00:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:10:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: false,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-07:08:21:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-14:08:45:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-21:09:11:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-28:09:03:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: false,
            checkedInOn: '2024-09-28:09:21:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: false,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-08:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: false,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-01:08:21:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-08:08:45:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: false,
            checkedInOn: '2024-12-15:09:11:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:03:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-28:09:21:00Z',
          },
        ],
      },
    ],
  },
  {
    userId: 20,
    serviceId: 1,
    total_service_attendance: 42,
    total_service_occurences: 43,
    user_attendance: [
      {
        month: 'Jan',
        days: [
          {
            date: '2024-01-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-07:08:25:00Z',
          },
          {
            date: '2024-01-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-14:08:55:00Z',
          },
          {
            date: '2024-01-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-21:08:55:00Z',
          },
          {
            date: '2024-01-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-01-28:09:15:00Z',
          },
        ],
      },
      {
        month: 'Feb',
        days: [
          {
            date: '2024-02-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-04:08:30:00Z',
          },
          {
            date: '2024-02-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-11:08:50:00Z',
          },
          {
            date: '2024-02-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-18:09:00:00Z',
          },
          {
            date: '2024-02-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-02-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Mar',
        days: [
          {
            date: '2024-03-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-03:08:21:00Z',
          },
          {
            date: '2024-03-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-03-10:08:45:00Z',
          },
          {
            date: '2024-03-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-17:09:11:00Z',
          },
          {
            date: '2024-03-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-24:09:03:00Z',
          },
          {
            date: '2024-03-31:09:00:00Z',
            attended: true,
            checkedInOn: '2024-03-31:09:21:00Z',
          },
        ],
      },
      {
        month: 'Apr',
        days: [
          {
            date: '2024-04-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-07:09:00:00Z',
          },
          {
            date: '2024-04-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-14:09:20:00Z',
          },
          {
            date: '2024-04-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-04-21:09:30:00Z',
          },
          {
            date: '2024-04-28:09:00:00Z',
            attended: false,
            checkedInOn: '2024-04-28:09:40:00Z',
          },
        ],
      },
      {
        month: 'May',
        days: [
          {
            date: '2024-05-05:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-05:08:55:00Z',
          },
          {
            date: '2024-05-12:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-12:09:30:00Z',
          },
          {
            date: '2024-05-19:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-19:09:20:00Z',
          },
          {
            date: '2024-05-26:09:00:00Z',
            attended: true,
            checkedInOn: '2024-05-26:09:00:00Z',
          },
        ],
      },
      {
        month: 'Jun',
        days: [
          {
            date: '2024-06-02:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-02:08:21:00Z',
          },
          {
            date: '2024-06-09:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-09:08:45:00Z',
          },
          {
            date: '2024-06-16:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-16:09:11:00Z',
          },
          {
            date: '2024-06-23:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-23:09:03:00Z',
          },
          {
            date: '2024-06-30:09:00:00Z',
            attended: true,
            checkedInOn: '2024-06-30:09:21:00Z',
          },
        ],
      },
      {
        month: 'Jul',
        days: [
          {
            date: '2024-07-07:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-07:08:50:00Z',
          },
          {
            date: '2024-07-14:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-14:08:30:00Z',
          },
          {
            date: '2024-07-21:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-21:09:10:00Z',
          },
          {
            date: '2024-07-28:09:00:00Z',
            attended: true,
            checkedInOn: '2024-07-28:09:00:00Z',
          },
        ],
      },
      {
        month: 'Aug',
        days: [
          {
            date: '2024-08-04:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-04:08:30:00Z',
          },
          {
            date: '2024-08-11:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-11:08:50:00Z',
          },
          {
            date: '2024-08-18:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-18:09:00:00Z',
          },
          {
            date: '2024-08-25:09:00:00Z',
            attended: true,
            checkedInOn: '2024-08-25:09:10:00Z',
          },
        ],
      },
      {
        month: 'Sep',
        days: [
          {
            date: '2024-09-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-01:08:31:00Z',
          },
          {
            date: '2024-09-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-08:08:55:00Z',
          },
          {
            date: '2024-09-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-15:09:01:00Z',
          },
          {
            date: '2024-09-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-22:09:13:00Z',
          },
          {
            date: '2024-09-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-09-29:09:11:00Z',
          },
        ],
      },
      {
        month: 'Oct',
        days: [
          {
            date: '2024-10-06:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-06:08:21:00Z',
          },
          {
            date: '2024-10-13:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-13:08:45:00Z',
          },
          {
            date: '2024-10-20:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-20:09:11:00Z',
          },
          {
            date: '2024-10-27:09:00:00Z',
            attended: true,
            checkedInOn: '2024-10-27:09:03:00Z',
          },
        ],
      },
      {
        month: 'Nov',
        days: [
          {
            date: '2024-11-03:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-03:08:21:00Z',
          },
          {
            date: '2024-11-08:10:00:00Z',
            attended: true,
            checkedInOn: '2024-11-10:08:45:00Z',
          },
          {
            date: '2024-11-17:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-17:09:11:00Z',
          },
          {
            date: '2024-11-24:09:00:00Z',
            attended: true,
            checkedInOn: '2024-11-24:09:03:00Z',
          },
        ],
      },
      {
        month: 'Dec',
        days: [
          {
            date: '2024-12-01:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-07:09:01:00Z',
          },
          {
            date: '2024-12-08:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-14:09:11:00Z',
          },
          {
            date: '2024-12-15:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-21:08:31:00Z',
          },
          {
            date: '2024-12-22:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-22:09:13:00Z',
          },
          {
            date: '2024-12-29:09:00:00Z',
            attended: true,
            checkedInOn: '2024-12-29:08:55:00Z',
          },
        ],
      },
    ],
  },
]

export const membersDataAPI = [
  {
    member_id: 1,
    member_name: 'Frederick Aziebu',
    contact: '0550815604',
    status: 'Active',
  },
  {
    member_id: 2,
    member_name: 'Frederick Aziebu',
    contact: '0550815604',
    status: 'Transferred',
  },
  {
    member_id: 3,
    member_name: 'Frederick Aziebu',
    contact: '0550815604',
    status: 'Active',
  },
  {
    member_id: 4,
    member_name: 'Frederick Aziebu',
    contact: '0550815604',
    status: 'Transferred',
  },
  {
    member_id: 5,
    member_name: 'Frederick Aziebu',
    contact: '0550815604',
    status: 'Active',
  },
  {
    member_id: 6,
    member_name: 'Frederick Aziebu',
    contact: '0550815604',
    status: 'Active',
  }
]
