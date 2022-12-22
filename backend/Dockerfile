FROM python:3.10

WORKDIR .

copy requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "manage.py", "runserver" ]