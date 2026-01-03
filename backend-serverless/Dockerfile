# FROM node:lts-alpine 
# # alpine build of linux is the least taking space thats why the alpine image is selected here with the latest node version.

# WORKDIR /app

# COPY  . .

# RUN npm install --omit=dev

# RUN npm run build --prefix sainath-bazaar-react

# USER node 
# # user previlages for the application is least , so that the hacker thorough application have no control to the applcation

# CMD ["npm", "start", "--prefix", "backend"]

# EXPOSE 8000



# OPTIMISATIONS BELOW OF THE NOOB FILE ABOVE
FROM node:lts-alpine 
# alpine build of linux is the least taking space thats why the alpine image is selected here with the latest node version.

WORKDIR /app

# 
# COPY  . .
# its crazy that the node modules are differnt for difffernt operating system,
# Most Node.js packages are pure JavaScript → they work the same on all OSes.

# However, some packages include native binaries (written in C/C++) that must be compiled specifically for the operating system and CPU architecture.

# Examples of such packages:

# bcrypt

# sharp

# node-sass

# sqlite3

# canvas

# These packages:

# Compile differently on Windows / Linux / macOS

# Produce OS-specific .node binary files

# Cannot be shared across OSes

# So:

# ❌ Copying node_modules from Linux → Windows will break
# ✅ Re-running npm install on each OS works

# THATS WHY WE HAVE ITEGRATED THE DOCKER-IGNORE FILE, to ignore the node_modules , to not take the .node native files which are created respect to the os which are installed in.

#  docker feature => layers
# so we are going to break our commands to smaller components , so that they can be cached more easily

# Docker will create a new layer each time we run "copy" or "run" command, and it will only perform those

# & that layer will be created again only if that layer has changed in previous run of the command, to create the image faster , 

COPY package*.json ./

COPY sainath-bazaar-react/package*.json sainath-bazaar-react/
RUN npm install-frontend --omit=dev

COPY backend/package*.json backend/
RUN npm install-backend --omit=dev

USER node 
# user previlages for the application is least , so that the hacker thorough application have no control to the applcation

CMD ["npm", "start", "--prefix", "backend"]

EXPOSE 8000