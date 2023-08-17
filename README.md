# My Social Network Profiles
The website contains all personal information, phone number, social network accounts, email, bank account numbers, .... And the website can be saved in the form of a QR code to save the website.
# My Purpose
Can share my contact information to the other party just need to scan the QR code or visit the URL of the website.

Replaces a business card and is much more convenient when it contains all my information including social networks.
# Some note:
For social network accounts I already have, when users click on it, they will be directed to the link to the address of that social network and to their own account.

And if social networks are left blank without a link, it means that they have no such account. Then when clicking on it will show a message on the browser saying 'They don't have this account!!!'.

In addition, I have written a rule specifically for the Gmail and Bank Account buttons that when clicked will copy the gmail address or bank account number to the clipboard using the **navigator.clipboard.writeText()** method.

```javascript
 if (nameValue === 'Gmail') {
    navigator.clipboard.writeText(myGmail)
        .then(() => {
             alert(`Copied ${myGmail} to clipboard`);
        })
        .catch(err => {
             console.error('Error copying to clipboard:', err);
        });
}
if (nameValue === 'Bank account') {
     navigator.clipboard.writeText(myBankAccount)
         .then(() => {
              alert(`Copied ${myBankAccount} to clipboard`);
         })
         .catch(err => {
              console.error('Error copying to clipboard:', err);
         });
}
```
But this **navigator.clipboard.writeText()** method is not applicable to all browsers, you can see the image below.

![image](https://github.com/VenusakaVXT/my-social-network-profiles/assets/125566811/69ee6536-016a-4c45-9515-97891cf0b469)

So often this obstacle will be encountered in mobile browsers linked through social networks such as Facebook, Instagram, Messenger, ....

