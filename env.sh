# get node
NODE=`which node`
if [ $? -ne 0 ]; then    

    echo "node not found"
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    nvm install 16
    nvm use 16
fi

npx nuxi init $1

cd $1

mkdir .nuxt
mkdir .output
mkdir assets
mkdir components
mkdir composables
mkdir content
mkdir layouts
mkdir middleware
mkdir pages
mkdir plugins
mkdir public
mkdir server
mkdir src
mkdir utils
cd src
mkdir domain
mkdir domain/entities
mkdir domain/usecases
mkdir domain/interfaces
mkdir infrastructure
mkdir infrastructure/database

npm install
npm install @nuxtjs/auth-next @nuxtjs/axios \
@nuxtjs/proxy body-parser connect nuxt-prometheus-module
npm run dev

