$(function(){if(window.location.pathname.indexOf('cart')!=-1||window.location.pathname.indexOf('checkout')!=-1){ChatInviteSales();}
else if(window.location.pathname.indexOf('/c/')!=-1||window.location.pathname.indexOf('/f/')!=-1||window.location.pathname.indexOf('/p/')!=-1){ChatInviteTech();}
else if(window.location.pathname.indexOf('understanding-camera-sensors-for-machine-vision-applications')!=-1||window.location.pathname.indexOf('understanding-focal-length-and-field-of-view')!=-1){ChatInviteTechShort();}});function ChatInviteSales(){window.setTimeout(function(){TriggerChatInvite(39);},30000);}
function ChatInviteTech(){window.setTimeout(function(){TriggerChatInvite(62);},30000);}
function ChatInviteTechShort(){window.setTimeout(function(){TriggerChatInvite(62);},15000);}
var __lc={};__lc.license=5237381;__lc.group=liveChatGroupId;__lc.params=[{name:'Sales Org',value:liveChatSalesOrg},{name:'Website Language',value:liveChatLanguageCode}];(function(){window.setTimeout(function(){var lc=document.createElement('script');lc.type='text/javascript';lc.async=true;lc.src='https://cdn.livechatinc.com/tracking.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(lc,s);},5000);})();var inviteGroup=0;var LC_API=LC_API||{};LC_API.on_chat_started=function(){hideChatPushes('true');};LC_API.on_chat_window_opened=function(){if($('#chatInvite').is(":visible")){trackEvent("LiveChat Invite","Chat Opened During Invite",inviteGroup);}
hideChatPushes('true');if(LC_API.is_loaded()&&!IsChatAvailable()){showOfflineWindow();}};LC_API.on_chat_ended=function(){trackEvent('LiveChat','Chat Ended',window.location.pathname);};LC_API.on_chat_started=function(data){trackEvent('LiveChat','Chat Started',window.location.pathname);};function IsChatAvailable(){return(LC_API.agents_are_available()||LC_API.visitor_engaged());}
function showOfflineWindow(){LC_API.hide_chat_window();$('#chatOfflineMessage').slideDown();trackEvent('LiveChat','Chat Offline',window.location.pathname);}
function closeOfflineWindow(){$('#chatOfflineMessage').slideUp();LC_API.minimize_chat_window();}