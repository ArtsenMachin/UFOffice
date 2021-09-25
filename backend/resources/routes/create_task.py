from flask import request
from json import loads
from resources import DB
from resources import app
from resources.queries import task_crt


@app.post('/add_new_task')
async def create_task():
    try:
        await DB.connect()

        data = request.data.decode('utf8')
        ret = await task_crt(
            loads(data)['name'],
            loads(data)['desc'],
            loads(data)['data'],
            loads(data)['rating'],
            loads(data)['id']
        )
        await DB.close()
        return ret

    except Exception as e:
        print(e)
