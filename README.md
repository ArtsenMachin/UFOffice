# UFOffice

## backend

### Установка и запуск

>  **Необходим Python версии 3.9 и выше**

Настройка директории и установка зависимостей (windows)

```ps
$ cd backend

$ python -m venv env

$ env/scripts/activate

$ New-Item -ItemType file -Path './resources/settings.py'

$ pip install requirements.txt
```

Содержимое settings.py
```python
database_url = 'postgres://username:password@host:port/database'
host = ''

```

Запуск 
```console  
$ python app.py   
```

