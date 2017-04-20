angular.module('config', [])

.constant('AUTH', {authUrl:'/api/login',tokenKey:'x-access-token',bearer:'Bearer',authEvent:{loginSuccess:'auth-login-success',loginFailed:'auth-login-failed',logoutSuccess:'auth-logout-success',logoutFailed:'auth-logout-failed',sessionTimeout:'auth-session-timeout',notAuthenticated:'auth-not-authenticated',notAuthorized:'auth-not-authorized',tokenCheckSuccess:'tokenCheckSuccess',loginSuccessDefaultState:'login-success-default-state',fetchUserDetails:'fetch-user-details',fetchUserDetailsFail:'fetch-user-details-fail',somethingWrong:'something-wrong',alreadyLoggedInDeafultState:'already-logged-in-deafult-state',userInformationUpdate:'user-information-update'}})

.constant('CONFIG', {url:{base:'/api',login:'/login',users:'/users',adminAction:'/action'}})

.constant('NOTIFICATION', {messages:{loginSuccess:'Login Success',loginFailed:'Login Failed',logoutSuccess:'Logout Success',logoutFailed:'Logout Failed',notAuthorized:'Unauthorized Access',somethingWrong:'Something Went Wrong',notAuthenticated:'Please Log In '},state:{success:'success',fail:'fail'}})

.constant('MESSAGES', {login:{failed:'The email address or password you entered is not valid.'},validation:{required:'This field is required',minLength:'This field is too short',maxLength:'This field is too long',email:'This needs to be a valid email'}})

.value('debug', true)

;