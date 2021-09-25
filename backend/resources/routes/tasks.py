from flask import request
from resources import DB
from resources import app
from resources.queries import get_user_tasks


@app.get('/tasks')
async def tasks():
    try:
        await DB.connect()

        user_id = request.args['org_id']
        output = await get_user_tasks(user_id)

        await DB.close()
        
        return output

    except Exception as e:
        print(e)
