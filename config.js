
window.envConfig = {
    ENVIRONMENT: '',
    AZURE_CLIENT_ID: '55f61c71-77d2-4efc-aa94-0668f60c5c5d',
    REACT_APP_AZURE_BASE_URL: 'https://login.commutewithenterprise.com/commuteB2C.onmicrosoft.com/oauth2/v2.0/authorize',
    REACT_APP_API_BASE_URL:"https://api-gw.ehi.com/commute",
    REACT_APP_LOGIN_URL:"https://api-gw.ehi.com/rideshare/login/v1",
    REACT_APP_BROCHURE_URL: "https://www.commutewithenterprise.com",
    REACT_APP_HELP_URL: "https://www.commutewithenterprise.com/en/faqs.html",
    REACT_APP_AFTER_LEAVE_VANPOOL_URL:"/#/login",
    REACT_APP_PDF_PATH:"/rideshare-static-assets/pdfs",
    REACT_APP_IMAGE_PATH:"/rideshare-static-assets/images",

    REACT_APP_B2C_LOGIN_URL: "https://login.commutewithenterprise.com/commuteB2C.onmicrosoft.com/oauth2/v2.0/authorize?" +
        "p=B2C_1A_signup_signin&client_id=55f61c71-77d2-4efc-aa94-0668f60c5c5d&" +
        "redirect_uri=" + encodeURIComponent(location.origin) + "%2Fazure%2F&" +
        "scope=openid&response_type=id_token",
    REACT_APP_B2C_KEEP_ALIVE_URL: "https://login.commutewithenterprise.com/commuteB2C.onmicrosoft.com/oauth2/v2.0/authorize?" +
        "p=B2C_1A_signup_signin&client_id=55f61c71-77d2-4efc-aa94-0668f60c5c5d&" +
        "redirect_uri=" + encodeURIComponent(location.origin) + "%2FkeepAlive%2F&" +
        "scope=openid&response_type=id_token",
    REACT_APP_B2C_LOGOUT_URL: "https://login.commutewithenterprise.com/commuteB2C.onmicrosoft.com/oauth2/v2.0/logout?" +
        "p=B2C_1A_signup_signin&post_logout_redirect_uri=https%3A%2F%2Fwww.commutewithenterprise.com%2F",
    
    REACT_APP_ENTERPRISE_WEB_LINK: "https://www.enterprise.com",
    REACT_APP_VANSALES_LINK: "https://www.enterprisevansales.com",
    REACT_APP_PRIVACY_LINK: "https://privacy.ehi.com/en-us/home.html#_ga=2.8213301.601798482.1531321288-981948696.1520346562",
    REACT_APP_COOKIE_POLICY_LINK: "https://privacy.ehi.com/en-us/home/cookie-policy.html",
    REACT_APP_TERMS_OF_USE_LINK: "https://www.commutewithenterprise.com/en/terms-of-use.html",
    REACT_APP_PRIVACY_POLICY_LINK: "https://www.commutewithenterprise.com/content/commute/en/privacy-policy.html",
    REACT_APP_CONTACT_SUPPORT_LINK: "https://www.commutewithenterprise.com/content/commute/en/support/contact.html",

    REACT_APP_IDLE_TIMEOUT:900000,
    REACT_APP_KEEP_ALIVE_INTERVAL:3000000,
    REACT_APP_GOOGLE_MAPS_CREDENTIALS: "key=AIzaSyBzVCUscUGOzjfJ6uuAtWvuANUS4g5GiTs",
    REACT_APP_API_SCOPE:"rideshare",    
    REACT_APP_REDUX_DEV_TOOLS:false,
    REACT_APP_VANPOOL_ROUTE_FEATURE:true,
    REACT_APP_VANPOOL_ROSTER_FEATURE:true,
    REACT_APP_PROFILE_FEATURE:true
  };
