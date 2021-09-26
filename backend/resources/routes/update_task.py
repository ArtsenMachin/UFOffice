from flask import request
from resources import DB
from json import loads
from resources import app
from resources.queries import task_status_upd


@app.post('/update_task')
async def task_upd():
    try:
        await DB.connect()

        data = request.data.decode('utf8')
        output = await task_status_upd(loads(data)['id'])

        await DB.close()

        return output

    except Exception as e:
        print(e)
