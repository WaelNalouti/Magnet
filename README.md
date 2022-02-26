# **Magnet**

## Description

This app is a CRBT mangement system app for The Tunisian Post. For more informations about the CRBT solution, visit: https://www.poste.tn/index_service.php?code_menu=9&code_sous_menu=17

This project consists of a **Reactjs client app** with a **PHP REST API** and **MariaDB database**.
The goal of this project is to try to build a php rest api and work with SQL.

## Repo structure

    .
    ├── Magnet_api              # containes code for PHP REST API
    │   ├── api
    │   │   └── order           # Endpoints to execute given crud ops like create and read
    │   │       ├── create.php
    │   │       └── read.php
    │   ├── config              # Contains database config file
    │   │   └── Databese.php    # Contains database connection method `connect()`
    │   └── models
    │       └── Order.php       # DAO_like ??
    ├── public
    ├── src                     # Containes Reactjs client src code
    └── README.md
