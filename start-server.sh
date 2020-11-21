if ! command -v node
then
    echo "nodejs not installed. please install nodejs on you pc to coninue"
    echo visit https://nodejs.org/en/download/ to download the latest version
    exit 1
fi

if [ ! -d "./node_modules/express" ]; then
echo express not found !!!
echo installing express ...

npm install

echo dependencies installed ...
fi

node src/index.js