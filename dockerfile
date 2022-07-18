# Stage 0, based on Node.js, to build and compile Angular
FROM node:14.15.5 as node
WORKDIR /opt/network-automation-dockers/dashboard/
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install -g @angular/cli@13.3.8
COPY . .
RUN ng build --prod
#RUN ng build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13
RUN rm -rf /usr/share/nginx/html/
COPY --from=node /opt/network-automation-dockers/web/dist /usr/share/nginx/html/
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
