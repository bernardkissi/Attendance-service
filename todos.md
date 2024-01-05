-[x] change field in qrcode table to hold value from sevice table
-[] improve check to factor in if you consider for the meeting or a service.
-[] factor in visitors count
-[] member statistics for each service -[x] Add member
-[] General search
-[] login  
-[] api login
-[] notifications

members data structure

```json
    // members summary
    {
		"id": 3,
		"name": "Ms. Amalia Morissette",
		"identifier": "ad015f57-dd59-49b9-bea5-71c5490a5417",
		"service": "Adom Praise 2023",
		"total_attendance": 1,
		"service_occurence_count": 2,
		"absent_count": 1
	},
    // attendance summary
    {
		"year": 2023,
		"month": "July",
		"service": "Adom Praise 2023",
		"total_attendance": 3,
		"service_occurences_per_month": 2,
		"expected_attendees_per_each_service": 39,
		"expected_attendance_per_month": 78,
		"absentees_per_month": 75
	}
    // qrrcode summarz
    {
		"total_attendances": 3,
		"expected_attendees": 39,
		"total_absentees": 36,
		"qrcode_identifier": "cc2a87ad-0abc-4a50-8b0e-ecc4a4ca3ef5",
		"members": [
			{
				"name": "Ms. Amalia Morissette",
				"recorded_at": "2023-07-18 01:14:09",
				"member_id": "3",
				"member_identifier": "ad015f57-dd59-49b9-bea5-71c5490a5417",
				"device": "web"
			},
			{
				"name": "Miss Bernita Kshlerin I",
				"recorded_at": "2023-07-18 01:14:09",
				"member_id": "8",
				"member_identifier": "28126f98-ca69-455f-a4f2-288efd54eed5",
				"device": "web"
			},
			{
				"name": "Ashton Block",
				"recorded_at": "2023-07-19 00:29:34",
				"member_id": "7",
				"member_identifier": "6be838db-01bf-4d1c-bd29-6dd651d1abb0",
				"device": "web"
			}
		]
	},
    //service summary
    {
		"service_id": 5,
		"service_name": "Adom Praise 2023",
		"total_service_occurrences": 2,
		"month": "July"
	}
```
