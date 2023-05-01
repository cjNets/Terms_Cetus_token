FROM nginx
COPY nginx/nginx.conf /etc/nginx
COPY nginx/start.sh /bin/start.sh
ADD ./dist /data/www
ENV SERVICENAME="crema-ido"
ENTRYPOINT ["sh", "/bin/start.sh"]
