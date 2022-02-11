---
Layout:

Title: "Daily Summary"

Date: "2022-02-10"

Categories:
---

# INTRODUCTION

Today I learnt how to create a MongoDB Atlas account. I am going to write the process below.

# BODY

-Create a MongoDB Atlas account
--MongoDB Atlas is a MongoDB Database-as-a-Service platform, which means that they configure and host the database for you.

Create a new cluster
First I had to fill in my organization's name, project's name, select JavaScript as my preferred programming language, and click the green Continue button.
and then click the Create a cluster button under Shared Clusters. As it is the only free option.

In the Cluster Name dropdown, I gave my cluster a name but you can also leave it as default Cluster0.
proceeded and clicked the green Create Cluster button at the bottom of the screen. New clusters take between 1-3 minutes to provision. I waited until the cluster is created before going to the next step.

Which is :
--Creating a new user for the database
--On the left side of screen, clicking on Database Access.
--Clicking the green Add New Database User button.
--In the modal, entering a new username and password.
--Under Database User Privileges, leave it as the default option, Read and write to any database.
--Click the Add User button to create a new user.

Allow access from all IP addresses
--On the left side of the screen, clicking on Network Access.
--Clicking the green Add IP Address button.
--In the modal, click the ALLOW ACCESS FROM ANYWHERE button. Letting me to see 0.0.0.0/0 in the Access List Entry entry field.
--Clicking the green Confirm button.

# CONCLUSION

And the last thing to to was connecting to my cluster.
-Connect to my cluster
Clicking on the green Get Started button in the bottom left of my screen it should now show me the final step, Connect to my cluster, and I should be able to click on it.
On the left side of the screen,I must click on Clusters.
And also click the Connect button for my cluster.
In the popup modal, click on Connect my application.
I should see the URI you'll use to connect to my database similar to this: mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<db-name>?retryWrites=true&w=majority.
Click the Copy button to clipboard.
