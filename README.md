# Covid-Project

My project is a simple information website. It provides basic knowledge for the Coronavirus disease. There is a map that the user can access to find testing areas near them and a link to an outside source to find a vaccine. User are able to send an message to the 'providers' and take a quiz.

#### How to run

-Download Django
    pip install Django==4.0 (latest version)

-Apply migrations
    python3 manage.py makemigrations covid_watch
    python3 manage.py migrate

-Create super user to access /admin
    python3 manage.py createsuperuser

-Run the application
    python3 manage.py runserver

-Go to https://developers.google.com/maps/documentation/javascript/overview to access an API key for the map to work.

#### Additional Information

-The geolocaion doesn't work with Safari over unsecured networks, which prompts the 'handleLocationError' function. It does work on Chrome.
