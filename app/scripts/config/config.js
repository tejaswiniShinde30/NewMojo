angular.module('config', [])

.constant('ROLES', {user:{name:'user',id:1,showNPI:false,value:'ROLE_USER'},admin:{name:'Admin',id:3,showNPI:false,value:'ROLE_ADMIN'}})

.constant('AUTH', {authUrl:'/api/login',tokenKey:'x-access-token',bearer:'Bearer',authEvent:{loginSuccess:'auth-login-success',loginFailed:'auth-login-failed',logoutSuccess:'auth-logout-success',logoutFailed:'auth-logout-failed',sessionTimeout:'auth-session-timeout',notAuthenticated:'auth-not-authenticated',notAuthorized:'auth-not-authorized',tokenCheckSuccess:'tokenCheckSuccess',loginSuccessDefaultState:'login-success-default-state',fetchUserDetails:'fetch-user-details',fetchUserDetailsFail:'fetch-user-details-fail',somethingWrong:'something-wrong',alreadyLoggedInDeafultState:'already-logged-in-deafult-state',userInformationUpdate:'user-information-update'}})

.constant('CONFIG', {url:{base:'/api',login:'/login'}})

.constant('NOTIFICATION', {messages:{loginSuccess:'Login Success',loginFailed:'Login Failed',logoutSuccess:'Logout Success',logoutFailed:'Logout Failed',notAuthorized:'Unauthorized Access',somethingWrong:'Something Went Wrong',notAuthenticated:'Please Log In ',createUserSuccess:'User Creation Successful'},state:{success:'success',fail:'fail'}})

.constant('API', {userList:{param:{facility:'facility',lastName:'lastName',type:'type',status:'status',order:'order',sort:'sort',size:'size',page:'page'},order:{asc:'asc',desc:'desc'},sort:{email:'email',firstName:'firstName',lastName:'lastName',status:'status',role:'role',facility:'facility'},total:{count:'x-total-count',page:'x-total-pages'}},orderList:{param:{order:'order',sort:'sort',size:'size',page:'page'},sortOrder:{asc:'asc',desc:'desc'},sort:{orderId:'orderId',patient:'patient',mrn:'mrn',facility:'facility',orderingProvider:'orderingProvider',orderDate:'orderDate',status:'status'},total:{count:'x-total-count',page:'x-total-pages'}},patientList:{param:{searchString:'searchString',order:'order',sort:'sort',size:'size',page:'page'},sortOrder:{asc:'asc',desc:'desc'},sort:{firstName:'firstName',mrn:'mrn',facility:'facility',dob:'dob'},total:{count:'x-total-count',page:'x-total-pages'}},dashboardOrderList:{param:{reportType:'reportType',order:'order',sort:'sort',size:'size',page:'page'},sortOrder:{asc:'asc',desc:'desc'},sort:{orderId:'orderId',reportType:'reportType',reportDate:'reportDate',patientName:'firstName',mrn:'mrn',orderingProvider:'orderingProvider',testName:'testName',orderDate:'orderDate',orderStatus:'orderStatus'},total:{count:'x-total-count',page:'x-total-pages'}},search:{param:{searchString:'orderSearchString',searchType:'searchType',size:'size',page:'page'},total:{count:'x-total-count',page:'x-total-pages',currentPage:'x-current-page'}}})

.constant('POPUP', {deactivate:{modal_header:'Confirmation',modal_body:'Are you sure you want to deactivate the user?',showOk:true,showDisplay:'Yes',showCancel:true},activate:{modal_header:'Confirmation',modal_body:'Are you sure you want to activate the user?',showOk:true,showDisplay:'Yes',showCancel:true},resend_activation:{modal_header:'Confirmation',modal_body:'Activation link is sent to your registered Email ID.',showOk:true,showDisplay:'Ok',showCancel:false},registartion_success:{modal_header:'Confirmation',modal_body:'You have registered successfully.',showOk:true,showDisplay:'Ok',showCancel:false},registartion_failure:{modal_header:'Failure',modal_body:'Link is not valid.',showOk:true,showDisplay:'Ok',showCancel:false},changePassword_success:{modal_header:'Confirmation',modal_body:'Password changed successfully.',showOk:true,showDisplay:'Ok',showCancel:false},failure:{modal_header:'Failure',modal_body:'Please try again later.',showOk:true,showDisplay:'Ok',showCancel:false},user_success:{modal_header:'Confirmation',modal_body:'User details saved successfully.',showOk:true,showDisplay:'Ok',showCancel:false}})

.constant('MESSAGES', {login:{failed:'The email address or password you entered is not valid.'},validation:{required:'This field is required',minLength:'This field is too short',maxLength:'This field is too long',email:'This needs to be a valid email',passwordPattern:'This is not a valid Password',match:'New Password and Confirm New Password should be same',unmatch:'Old password and New Password should not be same'}})

.value('debug', true)

;