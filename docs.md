# Features

members
    [] create,
    [] update,
    [] delete members
    [] import members from csv file

service
    [X] create, 
    [] update, 
    [] delete
    [] create service from csv file

qrcodes
    [X] create, 
    [] modify, 
    [] delete

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
        