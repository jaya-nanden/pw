const webpush = require('web-push')


const vapidKeys = {
    publicKey:
    'BI1fe6P0kH0LI5bs5dnTQNK6kVR0zxXRp0vONQndYSoIDSetkB5IldzHRYsJqqsklgpRSFGU9CXx1aQmiqzVaxM',
    privateKey: 'qBlNLdINw_3bhuHF7wdJq8O7PIItKWFCpmqs-5zlRL0',
  }
  
  //setting our previously generated VAPID keys
  webpush.setVapidDetails(
    'mailto:myuserid@email.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )
  

//function to send the notification to the subscribed device
const sendNotification = () => {
    const sub = {
        endpoint: 'http://updates.push.services.mozilla.com/wpush/v2/gAAAAABip2rfzZtdwqpOpaHMnt_c9lNM5WEERsOjvMW9xny0-s8wDzxE6G8j5MQnEHNrtnlMrzSy8plzx2GhYmp2eqw99t7C8DhHffUG1ym5T4cU7YnfSqS5Y-oZ1JCrFOH11qgSwB6qvzqIJP6cnpL8eEhtPCXKYXfU5eXJo_DaA0g9dsquKvc',
        expirationTime: null,
        keys: {
          auth: 'M6XqdNM451ntr2gXzvqrYw',
          p256dh: 'BBrU-5Vjq4LvTI3lOSp2_FYs6IOcX9OVwnPp9t62f5M5vgl-h3pGVlgJeBMjpvsUpa3Z-1nHVI0iVmtabJZRerM'
        }
      }
    console.log(sub)
    webpush.sendNotification(sub, "payload");
  }

sendNotification()