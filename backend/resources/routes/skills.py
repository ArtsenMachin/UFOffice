from flask import request
from resources import DB
from resources import app
from resources.queries import skills_info


@app.get('/skills_info')
async def skills():
    try:
        await DB.connect()
        user_id = request.args['user_id']
        ret = await skills_info(user_id)
        await DB.close()
        return ret

    except Exception as e:
        print(e)
