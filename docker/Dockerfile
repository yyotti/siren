FROM node:15.5.1-alpine AS app

COPY ./entrypoint.sh /
RUN chmod 755 /entrypoint.sh \
 ;

USER node
WORKDIR /app

EXPOSE 3000

CMD ["/entrypoint.sh"]
