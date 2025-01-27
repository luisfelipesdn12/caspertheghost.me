---
title: Setting up SnailyCADv3 on Linux
createdAt: April 4, 2021
updatedAt: April 16, 2021
intro: How to setup SnailyCADv3 on Ubuntu - In-depth guide.
keywords: snaily-cad, CAD, fivem, cad/mdt linux
---

# Getting started

This is a Linux guide for installing SnailyCAD. See [the windows guide here](/blog/setting-up-snailycad).

## Requirements

Before starting the installation of SnailyCAD, you need to have the follow installed on your machine:

- [GIT](https://git-scm.com/downloads)
- [NodeJS v14](https://nodejs.org) (**Must be v14 or you'll run into problems!**)
- [MySQL](https://www.apachefriends.org/download.html#download-linux) [(XAMPP installation guide for Ubutnu)](https://vitux.com/ubuntu-xampp/)
- Net tools (`sudo apt install net-tools`)

## Setting up XAMPP

**If you already have XAMPP setup or another MySQL database, you can skip to [Installing SnailyCAD](#installing-snailycad).**

After successfully installing XAMPP, we'll start both `Apache` and `MySQL` by running the following command:

```console
sudo /opt/lampp/lampp mysql
```

If started successfully, you can now access <http://localhost/phpmyadmin> in your browser. If you're using a VPS then you need to use the IP of the VPS, you might need to [configure access to the VPS for phpmyadmin](https://stackoverflow.com/questions/23235363/forbidden-you-dont-have-permission-to-access-phpmyadmin-on-this-server).

---

Let's create the database and insert the `snaily-cad.sql` file

In the sidebar you can see a link: "New", click that, it should look something like this:

![create-database](/blog/create-database.webp)

Enter `snaily-cad` in the input field then click `Create`.

Once finished creating the database, you can should see a navbar at the top, click the `import` button:

![import-button](/blog/import-button.webp)

Now a new window should appear, click the `browse...` button and select the `snaily-cad.sql` file. It's located in the root folder of SnailyCAD. After selecting it you can click the `Go` button on the bottom right corner.

![database-browse](/blog/database-browse.webp)

🎉 You've successfully setup XAMPP and MySQL for SnailyCAD! If you're experiencing issues, [feel free to join our Discord server](https://discord.gg/eGnrPqEH7U).

## Installing SnailyCAD

Firstly, open a terminal.

Once opened, we'll need to clone down the code, run the following command:

```console
git clone https://github.com/Dev-CasperTheGhost/snaily-cadv3
```

Once that's finished, we can go into the SnailyCAD folder with the following command:

```console
cd snaily-cadv3
```

Now we need to install all the dependencies to run the CAD. Run the following command:

_This can take several minutes to finish, please be patient!_

```console
npm install
```

Once it has finished installing, navigate to the `src` folder with the following command:

```console
cd src
```

We can see all the files and folders with the following command:

```console
ls -l
```

Now you should see the following files and folders:

```console
components
hooks
interfaces
lib
pages
state
styles
config.example.ts
language.json
server.ts
```

---

To create the config file run the following command:

_This will copy and rename the file._

```console
cp config.example.ts config.ts
```

Your server folder should now have these files:

```console
components
hooks
interfaces
lib
pages
state
styles
config.example.ts
config.ts
language.json
server.ts
```

Now open the `config.ts` file using `nano config.ts` or any other terminal-editor. You can [view more information about what the values mean here](https://github.com/Dev-CasperTheGhost/snaily-cadv3/wiki/Config-file).

Once modified, make sure to save the config file (CTRL + S).

Now you can run the following command:

```console
npm start
```

This will start SnailyCAD.

## Woohoo 🎉🎉

You've successfully installed SnailyCAD!

You can now open <http://localhost:3030> in your browser.

If you're using a VPS, you'll need to use the IP of that VPS to access the CAD. You can use [NGINX](https://nginx.com) to proxy the CAD too.

## Further support and questions

If you have any other questions or need help installing SnailCAD, [feel free to join the Discord server](https://discord.gg/eGnrPqEH7U).
