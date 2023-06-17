# Features

members
    [] create,
    [] update,
    [] delete members
    [] import members from csv file

service
    [] create, 
    [] update, 
    [] delete
    [] create service from csv file

qrcodes
    [] create, 
    [] modify, 
    [] delete

logins
    [] session login  [ super admin, branch login]
    [] api login

data analytics
   [] 
end to end

    [] attendance recording flow
     - cover all edge cases
     
    <!-- record attendance webflow -->
    1. member login -> 
    2. send payload to api endpoint -> 
    3. payload goes through verfication channel -> 
    4. passed -> 
    5. attendance is recorded 
    <!-- end of webflow -->
    






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
        