# Features
[] protect actions with policies in request form or policies
members
    [x] create,
    [x] update,
    [x] delete members
    [x] import members from csv file

service
    [X] create, 
    [] update, 
    [x] delete
    [?] create service from csv file

qrcodes
    [X] create, 
    [x] modify, 
    [x] delete

logins
    [] session login  [ super admin, branch login]
    [X] api login
    [] api logout
    [] session logout

data analytics
    [] reports statistics
notification
    [] Branch Notifications
    
end to end
    [X] attendance recording flow
    [] user testing edge cases
    
    






Edge cases: 
<!-- 1. idempotentce: the user can do x times but the will not add additional payload if he/she is recorded. -->

2. in the Qrcode middleware,
    check if the login member belong to the branch for the qrcode is created

3. if no qrcode is active, immediately return to the user service has no started.

4. How to handle joint program


for joint service 
    - in branch configuration, allow joint service... 
    - once that is enabled, 
        - members from other branches will be able to record attendance during the joint service.
        - how to we mark this as joint:
            - attendance will have a field called is jointService.
        - allow cross branch attendance
    

SELECT
	s.id,
    s.name AS service_name,
    a.service_id AS attendance_service_id,
    gs.service_id,
    COUNT(m.id) AS members,
    COUNT(DISTINCT gs.member_id) AS group_members,
    COUNT(DISTINCT ts.member_id) AS tag_members,
    (SUM(CASE WHEN gs.member_id IS NOT NULL THEN 1 ELSE 0 END) + SUM(CASE WHEN ts.member_id IS NOT NULL THEN 1 ELSE 0 END)) AS total_eligible_members,
    COUNT(DISTINCT a.member_id) AS attendee_count,
    IFNULL(SUM(CASE WHEN gs.member_id IS NOT NULL THEN 1 ELSE 0 END) + SUM(CASE WHEN ts.member_id IS NOT NULL THEN 1 ELSE 0 END), 0) - COUNT(DISTINCT a.member_id) AS absentee_count
   
FROM
    services s
LEFT JOIN
    attendances a ON s.id = a.service_id
LEFT JOIN
    (
        SELECT
            sbl.service_id,
            gm.member_id
        FROM
            group_member gm
        LEFT JOIN
            serviceables sbl ON gm.group_id = sbl.serviceable_id AND sbl.serviceable_type = 'App\Models\Group'
    ) AS gs ON s.id = gs.service_id
LEFT JOIN
    (
        SELECT
            sbl.service_id,
            tm.member_id
        FROM
            member_tag tm
        INNER JOIN
            serviceables sbl ON tm.tag_id = sbl.serviceable_id AND sbl.serviceable_type = 'App\Models\Tag'
    ) AS ts ON s.id = ts.service_id
LEFT JOIN
    members m ON gs.member_id = m.id OR ts.member_id = m.id
WHERE
    s.id IN (SELECT DISTINCT service_id FROM attendances)
GROUP BY
    s.id, s.name;
