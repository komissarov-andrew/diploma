# syntax=docker/dockerfile:1

FROM python:3.8.5

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5000/tcp

CMD [ "python3", "app.py"]