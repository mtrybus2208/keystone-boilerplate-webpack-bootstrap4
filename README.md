

# Keystone Boilerplate (Webpack, Babel, ES6, Bootstrap 4):key: 

## :wrench:Core Features:    
* <a href="https://github.com/keystonejs/keystone">Keystone CMS</a>,
* <a href="https://github.com/webpack">Webpack 2</a> for bundling,
* <a href="https://github.com/expressjs/express">Express</a>,
* <a href="https://github.com/babel/babel">Babel</a> for ES6 and ES7,
* <a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a>  Sass files for styling,
* <a href="https://github.com/thednp/bootstrap.native">Bootstrap Native</a> for B4 javascript handling (no jquery), 
* <a href="https://github.com/eslint/eslint">ESLint</a> to maintain a consistent code style
 
## Getting Started
* Install Node,
* Install MongoDB
* Clone repo,
* Install dependendencies from package.json (`yarn install` | `npm install`),
* Sign up for Cloudinary and update the CLOUDINARY_URL in <a href="https://github.com/motdotla/dotenv">.env file,</a>
* Select a random secret for the COOKIE_SECRET in <a href="https://github.com/motdotla/dotenv">.env file.</a>

## Start DEV server  
* First terminal: mongod (leave this running),
* Second terminal: `npm run dev` (webpack with watch mode and dev configuration),
* Third terminal: `npm run key` (Start keystone server)

## Start PRODUCTION server
* Build assets: `npm run prod` (webpack with prod configuration) 
* Start server: `npm run key` 

## :heavy_exclamation_mark: Additional information
* Email and password for first login:
`email: user@keystonejs.com`
`password: user123`
* Don't forget uncomment necessary bootstrap 4 components in 'site.scss' 




