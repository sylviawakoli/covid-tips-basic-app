# How to Deploy Covid Tips App Website

## Overview

The Covid tips app website is available at https://app.covid19parenting.com
The DNS for this is currently on Wix.
This URL points to a Google Cloud Load Balancer in the "Covid Parenting Websites" GCloud project.
This load balancer then serves the website from pool of storage buckets.
The load balancer should always be pointing to at least one storage bucket (or else we get downtime). The load balancer should not be pointing to a storage bucket that's being uploaded to because that could cause bugs.

## How to release a new app website to production

1. First make sure you have reviewed the IDEMS security policy to make sure you are not introducing any new vulnerabilities.
2. Secondly Download the Google Cloud SDK and check you can run the `gsutil` command
3. Run `npm run build` to build the website files locally in the www folder
4. Go to the Google Cloud Load Balancer (covid-app-lb1) in the "Covid Parenting Websites" GCloud project.
5. Remove one of the two storage buckets from the load balancer backends. _This is not the same as deleting the storage bucket._
6. Upload the files you generated in step 3 to the storage bucket you removed from the load balancer using a command like so
   `gsutil -m rsync -d -R www gs://BUCKET_NAME`
   Making sure you replace BUCKET_NAME with the name of the storage bucket you brought offline in step 5.
7. This will take some time to upload new files and delete ones no longer needed. If for any reason the command freezes or your internet goes out, kill the command, and simply run it again
8. Once the upload is complete run `gsutil web set -m index.html gs://BUCKET_NAME`
9. Now go to http://storage.googleapis.com/BUCKET_NAME/ in a web browser and verify that the new content is displayed.
10. Once the new content is displayed add the storage bucket back to the load balancer backends. At this point half of users will get the new website.
11. Repeat steps 5 to 9 for the other storage bucket you didn't upload to.
12. Add the second storage bucket back to the load balancer, and the website is now fully deployed!
